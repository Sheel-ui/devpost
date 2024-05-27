import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "devpost",
	description: "Blogpost for developers",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-dark-900">
			<body className={`${inter.className} text-snow-100`}>
				<div className="w-2/3 mx-auto">
					<Providers>
						<Header />
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
}
