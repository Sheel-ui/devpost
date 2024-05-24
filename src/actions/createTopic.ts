"use server";

import { z } from "zod";

interface createTopicFormState {
	errors: {
		name?: string[];
		description?: string[];
	};
}

const createTopicSchema = z.object({
	name: z
		.string()
		.min(3)
		.regex(/^[a-z-]+$/, {
			message: "Must be lower case characters with hyphens",
		}),
	description: z.string().min(10),
});

// reval homepage
export async function createTopic(
	formState: createTopicFormState,
	formData: FormData
): Promise<createTopicFormState> {
	const result = createTopicSchema.safeParse({
		name: formData.get("name"),
		description: formData.get("description"),
	});

	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors,
		};
	}

	return {
		errors: {},
	};
}
