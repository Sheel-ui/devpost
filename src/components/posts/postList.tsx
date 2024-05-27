import type { PostsData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";
import Image from "next/image";

interface PostListProps {
	fetchData: () => Promise<PostsData[]>;
}

export default async function PostList({ fetchData }: PostListProps) {
	const posts = await fetchData();
	const renderedPosts = posts.map((post) => {
		const topicSlug = post.topic.slug;

		if (!topicSlug) {
			throw new Error("Need a slug to link to a post");
		}

		return (
			<div
				key={post.id}
				className="border-2 border-dark-500 rounded-xl rounded p-3 px-5"
			>
				<p className="text-xs text-gray-400">t/{topicSlug}</p>
				<Link href={paths.postShow(topicSlug, post.id)}>
					<h3 className="text-lg font-bold mb-1">{post.title}</h3>
					<div className="flex flex-row gap-12">
						<div className="text-xs text-gray-400 flex items-center">
							<Image
								src={post.user.image || ""}
								alt="user image"
								width={10}
								height={10}
								className="w-4 h-4 mr-2 rounded-full inline-block"
							/>
							<p className="pt-[2px]">By {post.user.name}</p>
						</div>
						<p className="text-xs text-gray-400 pt-[2px]">
							{post._count.comments} comments
						</p>
					</div>
				</Link>
			</div>
		);
	});

	return <div className="space-y-2">{renderedPosts}</div>;
}
