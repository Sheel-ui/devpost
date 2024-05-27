"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
	children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" isLoading={pending} className="border-2 border-accent-100 bg-dark-500 text-accent-100">
			{children}
		</Button>
	);
}
