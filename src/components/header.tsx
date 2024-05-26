import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import paths from "@/paths";
import HeaderAuth from "./headerAuth";
import SearchInput from "./searchInput";
import { Suspense } from "react";

export default function Header() {
	return (
		<Navbar className="shadow mb-6">
			<NavbarBrand>
				<Link href={paths.home()} className="font-bold">
					Home
				</Link>
			</NavbarBrand>

			<NavbarContent justify="center">
				<NavbarItem>
					<Suspense>
						<SearchInput />
					</Suspense>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<HeaderAuth />
			</NavbarContent>
		</Navbar>
	);
}
