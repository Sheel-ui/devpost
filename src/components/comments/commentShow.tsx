import Image from "next/image";
import type { CommentWithAuthor } from "@/db/queries/comments";
import { Button } from "@nextui-org/react";
import CommentCreate from "@/components/comments/commentCreate";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface CommentShowProps {
	commentId: string;
	id: string;
}

export default async function CommentShow({ commentId, id }: CommentShowProps) {
	const comments = await fetchCommentsByPostId(id);
	const comment = comments.find((c) => c.id === commentId);

	if (!comment) {
		return null;
	}

	const children = comments.filter((c) => c.parentId === commentId);
	const renderedChildren = children.map((child) => {
		return <CommentShow key={child.id} commentId={child.id} id={id} />;
	});

	return (
		<div className="px-4 pt-2 border-l-2  border-dark-500 m-2 mb-1">
			<div className="flex gap-3">
				<Image
					src={comment.user.image || ""}
					alt="user image"
					width={40}
					height={40}
					className="w-10 h-10 rounded-full"
				/>
				<div className="flex-1">
					<p className="text-xs font-medium text-gray-400">
						{comment.user.name}
					</p>
					<p className="text-sm">{comment.content}</p>

					<CommentCreate id={comment.postId} parentId={comment.id} />
				</div>
			</div>
			<div className="pl-4">{renderedChildren}</div>
		</div>
	);
}
