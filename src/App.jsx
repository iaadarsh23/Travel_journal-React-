import "./App.css";
import EntryPage from "./components/Entry";
import entriesArray from "./data.js";
import AppHeader from "./components/Header";

function App() {
	const entries = entriesArray.map((entry) => {
		return <EntryPage key={entry.id} {...entry} />;
	});

	return (
		<div className="min-h-screen bg-gradient">
			<AppHeader />
			<div className="container mx-auto pt-20 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{entries}
				</div>
			</div>
		</div>
	);
}

export default App;
