import {HeroSlider} from "../components/HeroSlider.jsx";
import {Card} from "../components/Card.jsx";
import {Arrival} from "../components/Arrival.jsx";
import {Focus} from "../components/Focus.jsx";
import {Topseller} from "../components/Topseller.jsx";
import {Mostplayed} from "../components/Mostplayed.jsx";
import Footer from "../components/Footer.jsx";



const Home = () => {
    return (
        <>
            <HeroSlider/>
            <Arrival/>
            <Focus/>
            <Card/>
            <Topseller/>
            <Mostplayed/>
            <Footer/>
        </>
    )
}

export default Home