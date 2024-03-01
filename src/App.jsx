import {Navbar} from "./components/Navbar" 
import {HeroSlider} from "./components/HeroSlider" 
import {Arrival} from "./components/Arrival";
import {Focus} from "./components/Focus";

 
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="divider divider-primary"></div>
      <HeroSlider />
      <Arrival/>
      <Focus/>
      
    </>
  );
};

export default App;
