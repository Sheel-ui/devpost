import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
	Button,
	Avatar,
} from "@nextui-org/react";
import { auth } from "@/auth";
import paths from "@/paths";

export default async function Header() {
	const session = await auth();
	return (
		<Navbar className="shadow mb-6">
			<NavbarBrand>
				<Link href={paths.home()} className="font-bold">Home</Link>
			</NavbarBrand>

			<NavbarContent justify="center">
				<NavbarItem>
					<Input />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					{session?.user ? (
						<div>Signed In</div>
					) : (
						<div>Signed Out</div>
					)}
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
