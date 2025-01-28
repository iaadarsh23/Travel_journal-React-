export default function EntryPage(props) {
	return (
		<article className="flex flex-col gap-4 p-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
			<img
				src={props.img}
				alt={props.place}
				className="w-full h-48 rounded-lg object-cover shadow-md"
			/>
			<div className="space-y-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<img
							src="src/assets/placeholder.png"
							alt="location"
							className="w-4 h-4"
						/>
						<p className="font-semibold text-gray-800">{props.country}</p>
					</div>
					<a
						href={props.maplink}
						className="text-indigo-600 hover:text-indigo-800 underline text-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on Maps
					</a>
				</div>
				<h1 className="text-2xl font-bold text-gray-900">{props.place}</h1>
				<p className="text-gray-600 text-sm">{props.date}</p>
				<p className="text-gray-700 leading-relaxed">{props.desc}</p>
			</div>
		</article>
	);
}
