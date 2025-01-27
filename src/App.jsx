import "./App.css";
import EntryPage from "./components/Entry";
import entriesArray from "./data.js";
import AppHeader from "./components/Header";
import { AuroraBackground } from "./components/ui/auro-bg";

function App() {
	const entries = entriesArray.map((entry) => {
		return (
			<EntryPage
				key={entry.id}
				img={entry.img}
				country={entry.country}
				maplink={entry.maplink}
				place={entry.place}
				date={entry.date}
				desc={entry.desc}
			/>
		);
	});

	return (
		<>
			<AppHeader />

			<AuroraBackground className="">{entries}</AuroraBackground>
		</>
	);
}

export default App;
