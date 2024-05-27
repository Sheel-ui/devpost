import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicList() {
	const topics = await db.topic.findMany();

	const colors = [
		'border-rose-500', 'border-purple-500', 'border-cyan-500', 'border-gray-500', 'border-blue-500',
		'border-green-500', 'border-lime-500', 'border-yellow-500', 'border-red-500', 'border-emerald-500'
	];
	
	const renderedTopics = topics.map((topic, index) => {
		const color = colors[index % colors.length];
		return (
			<div key={topic.id}>
				<Link href={paths.topicShow(topic.slug)}>
					<Chip
						variant="bordered"
						className={`text-snow border ${color}`}
					>
						{topic.slug}
					</Chip>
				</Link>
			</div>
		);
	});

	return (
		<div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>
	);
}
