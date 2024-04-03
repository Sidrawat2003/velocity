import { Navbar1 } from "./components/Navbar1";
import { HeroSlider } from "./components/HeroSlider";
import { Arrival } from "./components/Arrival";
import { Focus } from "./components/Focus";
import { Card } from "./components/Card";


const App = () => {
	return (
		<>
			<Navbar1 />
			<div className="divider divider-primary"></div>
			<HeroSlider />
			<Arrival />
			<Focus />
			<Card />
			
		</>
	);
};

export default App;
