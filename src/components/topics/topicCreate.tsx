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
import FormButton from "../common/formButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@/utils/iconLibrary";

export default function TopicCreate() {
	const [formState, action] = useFormState(actions.createTopic, {
		errors: {},
	});

	return (
		<Popover placement="left">
			<PopoverTrigger>
				<Button
					variant="bordered"
					className="border-2 text-accent-100 border-accent-100"
				>
					<FontAwesomeIcon icon={faPlus} />
					Create a Topic
				</Button>
			</PopoverTrigger>
			<PopoverContent className="bg-dark-500 text-snow">
				<form action={action}>
					<div className="flex flex-col gap-4 p-4 w-80">
						<h3 className="text-lg">Create a Topic</h3>
						<Input
							name="name"
							placeholder="Name"
							isInvalid={!!formState.errors.name}
							errorMessage={formState.errors.name?.join(", ")}
							variant="bordered"
							color="success"
						/>
						<Textarea
							name="description"
							placeholder="Describe your topic"
							isInvalid={!!formState.errors.description}
							errorMessage={formState.errors.description?.join(
								", "
							)}
							variant="bordered"
							color="success"
						/>
						{formState.errors._form ? (
							<div className="text-red-400 text-xs">
								{formState.errors._form.join(", ")}
							</div>
						) : null}
						<FormButton>Submit</FormButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
