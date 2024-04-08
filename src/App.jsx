import {Navbar} from "./components/Navbar.jsx";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./components/Login.jsx";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>

            </Routes>

        </Router>


    );
};

export default App;
