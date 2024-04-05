import {Navbar} from "./components/Navbar" 
import {HeroSlider} from "./components/HeroSlider" 
import {Login} from "./components/Login"
import {SignUp} from "./components/SignUp"

 
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="divider divider-primary"></div>
      <HeroSlider/>
      <Login/>
      <SignUp/>
      
     
    
      
    </>
  );
};

export default App;
