"use server";

import { z } from "zod";

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/, {message:'Must be lower case characters with hyphens'}),
    description: z.string().min(10),
})

// reval homepage
export async function createTopic(formData: FormData) {
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    })

    if (!result.success){
        console.log(result.error.flatten().fieldErrors);
    }
}
