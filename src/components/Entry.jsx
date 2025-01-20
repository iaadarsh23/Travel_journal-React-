export default function EntryPage() {
	return (
		<article className="flex flex-col md:flex-row gap-4 p-4">
			<img
				src="https://scrimba.com/links/travel-journal-japan-image-url"
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
					<p className="font-semibold text-lg">Japan</p>
					<a
						href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
						className="text-blue-500 underline"
					>
						Visit
					</a>
				</div>
				<h1 className="text-2xl font-bold mt-2">Mount Fuji</h1>
				<p className="text-gray-500">12 Jan, 2021 - 24 Jan, 2021</p>
				<p className="mt-2 text-justify">
					Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
					(12,380 feet). <br /> Mount Fuji is the single most popular tourist
					site in Japan, <br /> for both Japanese and foreign tourists.
				</p>
			</div>
		</article>
	);
}
