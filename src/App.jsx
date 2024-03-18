import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { Arrival } from "./components/Arrival";
import { Focus } from "./components/Focus";
import { Card } from "./components/Card";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="divider divider-primary"></div>
			<HeroSlider />
			<Arrival />
			<Focus />
			<Card />
		</>
	);
};

export default App;
