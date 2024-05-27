import Link from "next/link";
import PostShow from "@/components/posts/postShow";
import CommentList from "@/components/comments/commentList";
import CommentCreate from "@/components/comments/commentCreate";
import paths from "@/paths";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import PostShowLoad from "@/components/posts/postShowLoad";

interface PostShowPageProps {
	params: {
		slug: string;
		id: string;
	};
}

export default async function PostShowPage({ params }: PostShowPageProps) {
	const { slug, id } = params;

	return (
		<div className="space-y-3">
			{"< "}
			<Link
				className="underline decoration-solid text-sm"
				href={paths.topicShow(slug)}
			>
				Back to {slug}
			</Link>
			<div className="border border-dark-500 rounded-xl p-4 px-3">
			<Suspense fallback={<PostShowLoad />}>
				<PostShow id={id} />
			</Suspense>
			<CommentCreate id={id} startOpen />
			</div>

			<CommentList id={id} />
		</div>
	);
}
