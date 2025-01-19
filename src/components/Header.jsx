export default function AppHeader() {
	return (
		<header>
			<nav className="flex justify-center items-center gap-5 border-b-2 pb-2 bg-gray-100 accent-transparent">
				<img
					src="src/assets/international-delivery.png"
					className="w-11 shrink-0"
				/>
				<span className="m-2 text-2xl font-bold">Travel Here</span>
			</nav>
		</header>
	);
}
