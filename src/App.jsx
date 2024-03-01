import {Navbar} from "./components/Navbar" 
import {HeroSlider} from "./components/HeroSlider" 

 
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="divider divider-primary"></div>
      <HeroSlider />
    </>
  );
};

export default App;
