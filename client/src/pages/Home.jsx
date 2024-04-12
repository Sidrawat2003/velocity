import {HeroSlider} from "../components/HeroSlider.jsx";
import {Card} from "../components/Card.jsx";
import {Arrival} from "../components/Arrival.jsx";
import {Focus} from "../components/Focus.jsx";

const Home = () => {
    return (
        <>
            <HeroSlider/>
            <Arrival/>
            <Focus/>
            <Card/>
        </>
    )
}

export default Home