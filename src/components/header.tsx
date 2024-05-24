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

	let authContent: React.ReactNode;
	if (session?.user) {
		authContent = <Avatar src={session.user.image || ""} />;
	} else {
		authContent = (
			<>
				<NavbarItem>
					<Button type="submit" color="secondary" variant="bordered">
						Sign In
					</Button>
				</NavbarItem>
				<Button type="submit" color="primary" variant="flat">
					Sign In
				</Button>
				<NavbarItem></NavbarItem>
			</>
		);
	}

	return (
		<Navbar className="shadow mb-6">
			<NavbarBrand>
				<Link href={paths.home()} className="font-bold">
					Home
				</Link>
			</NavbarBrand>

			<NavbarContent justify="center">
				<NavbarItem>
					<Input />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">{authContent}</NavbarContent>
		</Navbar>
	);
}
