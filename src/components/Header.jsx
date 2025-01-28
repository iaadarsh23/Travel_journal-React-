export default function AppHeader() {
	return (
		<header className="sticky top-0 z-50">
			<nav className="bg-white/80 backdrop-blur-md shadow-sm">
				<div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3">
					<img
						src="src/assets/international-delivery.png"
						className="w-10 h-10"
						alt="logo"
					/>
					<span className="text-2xl font-bold text-gray-800">Travel Here</span>
				</div>
			</nav>
		</header>
	);
}
