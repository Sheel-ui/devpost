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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@/utils/iconLibrary";
import { Suspense } from "react";

export default function Header() {
	return (
		<Navbar className="bg-dark-900 mb-6 border-b border-dark-500 py-1">
			<NavbarBrand>
				<Link href="/" className="text-xl font-bold text-white">
					<FontAwesomeIcon icon={faCode} className="mx-2" />
					devpost
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
