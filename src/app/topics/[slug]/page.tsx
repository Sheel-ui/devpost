import PostCreate from "@/components/posts/postCreate";
import PostList from "@/components/posts/postList";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
interface TopicProps {
	params: {
		slug: string;
	};
}

export default async function Topics({ params }: TopicProps) {
	const { slug } = params;
	return (
		<div className="grid grid-cols-4 gap-4 p-4">
			<div className="col-span-3">
				<h1 className="text-2xl font-bold mb-2 px-2">{slug}</h1>
			</div>
			<div className="flex justify-end px-2">
				<PostCreate slug={slug} />
			</div>
			<div className="col-span-4">
				<PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
			</div>
		</div>
	);
}
