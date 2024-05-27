import TopicCreate from "@/components/topics/topicCreate";
import TopicList from "@/components/topics/topicList";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/posts/postList";
import { fetchTopPosts } from "@/db/queries/posts";

export default async function Home() {
	return (
		<div className="grid grid-cols-4 gap-4 p-4">
			<div className="col-span-3">
				<h1 className="text-xl m-2">Top Posts</h1>
			</div>
			<div className="flex justify-end">
				<TopicCreate />
			</div>
			<div className="col-span-3">
				<PostList fetchData={fetchTopPosts} />
			</div>
			<div className="border-2 border-dark-500 rounded-xl shadow py-3 px-2">
				<h3 className="text-lg">Topics</h3>
				<Divider className="my-2" />
				<TopicList />
			</div>
		</div>
	);
}
