export default function EntryPage(props) {
	return (
		<article className="flex gap-4 shrink-0 m-7">
			<img
				src={props.img}
				alt="mount fuji"
				className="w-full md:w-[125px] h-44 rounded-md object-cover"
			/>
			<div>
				<div className="flex gap-3 items-center">
					<img
						src="src/assets/placeholder.png"
						alt="location"
						className="w-4 h-4"
					/>
					<p className="font-semibold text-lg">{props.country}</p>
					<a href={props.maplink} className="text-blue-500 underline">
						Visit
					</a>
				</div>
				<h1 className="text-2xl font-bold mt-2">{props.place}</h1>
				<p className="text-gray-500">{props.date}</p>
				<p className="mt-2 text-justify">{props.desc}</p>
			</div>
		</article>
	);
}
