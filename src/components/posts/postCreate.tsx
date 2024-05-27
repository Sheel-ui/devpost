"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import FormButton from "@/components/common/formButton";
import {
	Input,
	Button,
	Textarea,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@/utils/iconLibrary";

interface PostCreateFormProps {
	slug: string;
}

export default function PostCreate({ slug }: PostCreateFormProps) {
	const [formState, action] = useFormState(
		actions.createPost.bind(null, slug),
		{
			errors: {},
		}
	);

	return (
		<Popover placement="left">
			<PopoverTrigger>
				<Button
					variant="bordered"
					className="border-2 text-accent-100 border-accent-100"
				>
					<FontAwesomeIcon icon={faPlus} />
					Create a Post
				</Button>
			</PopoverTrigger>
			<PopoverContent className="bg-dark-500 text-snow">
				<form action={action}>
					<div className="flex flex-col gap-4 p-4 w-80 ">
						<h3 className="text-lg">Create a Post</h3>
						<Input
							isInvalid={!!formState.errors.title}
							errorMessage={formState.errors.title?.join(", ")}
							name="title"
							placeholder="Title"
							variant="bordered"
							color="success"
						/>
						<Textarea
							isInvalid={!!formState.errors.content}
							errorMessage={formState.errors.content?.join(", ")}
							name="content"
							placeholder="Content"
							variant="bordered"
							color="success"
						/>

						{formState.errors._form ? (
							<div className="text-red-400 text-xs">
								{formState.errors._form.join(", ")}
							</div>
						) : null}

						<FormButton>Create Post</FormButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
