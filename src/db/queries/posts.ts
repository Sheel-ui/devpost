import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostsData = Post & {
	topic: { slug: string };
	user: { name: string | null, image: string | null };
	_count: { comments: number };
};

export function fetchPostsByTopicSlug(slug: string): Promise<PostsData[]> {
	return db.post.findMany({
		where: { topic: { slug } },
		include: {
			topic: { select: { slug: true } },
			user: { select: { name: true, image: true } },
			_count: { select: { comments: true } },
		},
	});
}

export function fetchTopPosts(): Promise<PostsData[]> {
	return db.post.findMany({
		orderBy: [
			{
				comments: {
					_count: "desc",
				},
			},
		],
		include: {
			topic: { select: { slug: true } },
			user: { select: { name: true, image: true } },
			_count: { select: { comments: true } },
		},
		take: 10,
	});
}

export function fetchPostsBySearchTerm(term: string): Promise<PostsData[]> {
	return db.post.findMany({
		include: {
			topic: { select: { slug: true } },
			user: { select: { name: true, image: true } },
			_count: { select: { comments: true } },
		},
		where: {
			OR: [
				{ title: { contains: term } },
				{ content: { contains: term } },
			],
		},
	});
}
