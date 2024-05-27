"use client";

import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
	const searchParams = useSearchParams();
	return (
		<form action={actions.search}>
			<input
				type="text"
				name="term"
				placeholder="Seach"
				defaultValue={searchParams.get("term") || ""}
				className="bg-dark-500 border-0 outline-none p-2 px-4 rounded-xl "
			/>
		</form>
	);
}
