import { db } from "@/db";
import { notFound } from "next/navigation";
import { resolve } from "path";

interface PostShowProps {
	id: string;
}

export default async function PostShow({ id }: PostShowProps) {
	const post = await db.post.findFirst({
		where: { id: id },
	});

	if (!post) {
		notFound();
	}

	return (
		<div className="pl-2">
			<h1 className="text-2xl font-bold my-2">{post.title}</h1>
			<p className="text-sm">{post.content}</p>
		</div>
	);
}
