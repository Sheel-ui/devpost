"use client";

import {
	Textarea,
	Button,
	Input,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function TopicCreate() {
	const [formState, action] = useFormState(actions.createTopic, {
		errors: {},
	});

	return (
		<Popover placement="left">
			<PopoverTrigger>
				<Button color="primary">Create a Topic</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form action={action}>
					<div className="flex flex-col gap-4 p-4 w-80">
						<h3 className="text-lg">Create a Topic</h3>
						<Input
							label="Name"
							name="name"
							labelPlacement="outside"
							placeholder="Name"
							isInvalid={!!formState.errors.name}
							errorMessage={formState.errors.name?.join(", ")}
						/>
						<Textarea
							label="Description"
							name="description"
							labelPlacement="outside"
							placeholder="Describe your topic"
							isInvalid={!!formState.errors.description}
							errorMessage={formState.errors.description?.join(
								", "
							)}
						/>
						{formState.errors._form ? (
							<div className="p-2 bg-red-200 border border-red-400 rounded text-red-400">
								{formState.errors._form.join(", ")}
							</div>
						) : null}
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
