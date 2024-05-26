import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from "@/db";

export type CommentWithAuthor = Comment & {
	user: { name: string | null; image: string | null };
};

export const fetchCommentsByPostId = cache(
	(id: string): Promise<CommentWithAuthor[]> => {
		return db.comment.findMany({
			where: { postId: id },
			include: {
				user: {
					select: {
						name: true,
						image: true,
					},
				},
			},
		});
	}
);
