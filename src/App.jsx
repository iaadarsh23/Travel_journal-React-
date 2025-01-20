import "./App.css";
import EntryPage from "./components/Entry";
import AppHeader from "./components/Header";
import { AuroraBackground } from "./components/ui/auro-bg";

function App() {
	const Time = new Date().getHours();
	function greeting() {
		if (Time > 6 && Time < 12) {
			return "Good morning";
		} else if (Time > 12 && Time < 15) {
			return "Good afternoon";
		} else if (Time > 15 && Time < 18) {
			return "Good Evening";
		} else {
			return "Good Night";
		}
	}
	return (
		<>
			<AppHeader />
			<h1>{greeting()}</h1>
			<AuroraBackground>
				<EntryPage />
			</AuroraBackground>
		</>
	);
}

export default App;
