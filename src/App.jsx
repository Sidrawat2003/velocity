import { Navbar1 } from "./components/Navbar1";
import { HeroSlider } from "./components/HeroSlider";
import { Arrival } from "./components/Arrival";
import { Focus } from "./components/Focus";
import { Card } from "./components/Card";
import { LoginX } from "./components/LoginX";


const App = () => {
	return (
		<>
			<Navbar1 />
			
			<HeroSlider />
			<Arrival />
			<Focus />
			<Card />
			<LoginX />
			
		</>
	);
};

export default App;
