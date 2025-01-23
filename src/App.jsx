import "./App.css";
import EntryPage from "./components/Entry";
import AppHeader from "./components/Header";
import { AuroraBackground } from "./components/ui/auro-bg";

function App() {
	return (
		<>
			<AppHeader />

			<AuroraBackground className="">
				<EntryPage
					img="https://scrimba.com/links/travel-journal-japan-image-url"
					country="Japan"
					maplink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
					place="Mount Fuji"
					date="12 Jan, 2021 - 24 Jan, 2021"
					desc={`Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.`}
				/>
				<EntryPage
					img="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
					country="India"
					maplink="https://www.google.com/maps/place/Taj+Mahal/@27.1750151,78.0421552,15z"
					place="Taj Mahal"
					date="01 Feb, 2021 - 10 Feb, 2021"
					desc={`The Taj Mahal, located in Agra, is a white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It's renowned for its intricate architecture and is a UNESCO World Heritage Site`}
				/>
				<EntryPage
					img="https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
					country="France"
					maplink="https://www.google.com/maps/place/Eiffel+Tower/@48.8588443,2.2943506,15z"
					place="Eiffel Tower"
					date="01 Feb, 2021 - 10 Feb, 2021"
					desc={`The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris. It is one of the most recognizable structures in the world and an iconic symbol of France.`}
				/>
				<EntryPage
					img="https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg"
					country="Peru"
					maplink="https://www.google.com/maps/place/Machu+Picchu/@-13.163136,-72.545128,17z"
					place="Machu Picchu"
					date="10 June, 2021 - 20 June, 2021"
					desc={`Machu Picchu, located in the Andes Mountains of Peru, is an ancient Incan city and one of the New Seven Wonders of the World. It is renowned for its sophisticated dry-stone construction and breathtaking location.`}
				/>
			</AuroraBackground>
		</>
	);
}

export default App;
