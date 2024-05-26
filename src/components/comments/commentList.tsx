import CommentShow from "@/components/comments/commentShow";
import type { CommentWithAuthor } from "@/db/queries/comments";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface CommentListProps {
	id: string;
}

export default async function CommentList({ id }: CommentListProps) {
	const comments = await fetchCommentsByPostId(id);
	const topLevelComments = comments.filter(
		(comment) => comment.parentId === null
	);

	const renderedComments = topLevelComments.map((comment) => {
		return <CommentShow key={comment.id} commentId={comment.id} id={id} />;
	});

	return (
		<div className="space-y-3">
			<h1 className="text-lg font-bold">
				All {comments.length} comments
			</h1>
			{renderedComments}
		</div>
	);
}
