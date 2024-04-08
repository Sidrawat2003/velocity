import { Navbar1 } from "./components/Navbar1";
import { LoginX } from "./components/LoginX";
import Home from "./pages/Home";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<Navbar1/>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/login" element={<LoginX/>}></Route>

			</Routes>
		
		</Router>


	);
};

export default App;
