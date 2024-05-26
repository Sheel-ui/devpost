import Link from "next/link";
import PostShow from "@/components/posts/postShow";
import CommentList from "@/components/comments/commentList";
import CommentCreate from "@/components/comments/commentCreate";
import paths from "@/paths";
import { fetchCommentsByPostId } from "@/db/queries/comments";

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
			<Link
				className="underline decoration-solid"
				href={paths.topicShow(slug)}
			>
				{"< "}Back to {slug}
			</Link>
			<PostShow id={id} />
			<CommentCreate id={id} startOpen />
			<CommentList fetchData={() => fetchCommentsByPostId(id)} />
		</div>
	);
}
