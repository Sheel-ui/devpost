"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions";

interface CommentCreateFormProps {
	id: string;
	parentId?: string;
	startOpen?: boolean;
}

export default function CommentCreateForm({
	id,
	parentId,
	startOpen,
}: CommentCreateFormProps) {
	const [open, setOpen] = useState(startOpen);
	const ref = useRef<HTMLFormElement | null>(null);
	const [formState, action] = useFormState(
		actions.createComment.bind(null, { id, parentId }),
		{ errors: {} }
	);

	useEffect(() => {
		if (formState.success) {
			ref.current?.reset();

			if (!startOpen) {
				setOpen(false);
			}
		}
	}, [formState, startOpen]);

	const form = (
		<form action={action} ref={ref}>
			<div className="space-y-3 px-1">
				<Textarea
					name="content"
					placeholder="Enter your comment"
					isInvalid={!!formState.errors.content}
					errorMessage={formState.errors.content?.join(", ")}
					variant="bordered"
					color="success"
				/>

				{formState.errors._form ? (
					<div className="p-2 bg-red-200 border rounded border-red-400">
						{formState.errors._form?.join(", ")}
					</div>
				) : null}
				<FormButton>Reply</FormButton>
			</div>
		</form>
	);

	return (
		<div>
			<Button
				size="sm"
				variant="light"
				className="bg-dark-900 text-gray-400 mt-2"
				onClick={() => setOpen(!open)}
			>
				Reply
			</Button>
			{open && form}
		</div>
	);
}
