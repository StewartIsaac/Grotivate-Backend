import { Image } from "react-native";
import Home from "./Home";
import FarmMap from "./FarmMap";
import Market from "./Market";
import Me from "./Me";
import Pricing from "./Pricing";

export const homeData = [
    {
        id: 1,
        component: <Home />,
        icon: <Image source={require('../assets/home.png')} alt="home" />,
        icong: <Image source={require('../assets/home-g.png')} alt="home" />,
        state: true,
        text: 'Home',
    },
    {
        id: 2,
        component: <FarmMap />,
        icon: <Image source={require('../assets/farmmap.png')} alt="farm map" />,
        icong: <Image source={require('../assets/farmmap-g.png')} alt="farm map" />,
        state: false,
        text: 'Farm Map',
    },
    {
        id: 3,
        component: <Pricing />,
        icon: <Image source={require('../assets/pricing.png')} alt="pricing" />,
        icong: <Image source={require('../assets/pricing-g.png')} alt="pricing" />,
        state: false,
        text: 'Pricing',
    },
    {
        id: 4,
        component: <Market />,
        icon: <Image   source={require('../assets/market.png')} alt="market" />,
        icong: <Image   source={require('../assets/market-g.png')} alt="market" />,
        state: false,
        text: 'Market',
    },
    {
        id: 5,
        component: <Me />,
        icon: <Image source={require('../assets/me.png')} alt="me" />,
        icong: <Image source={require('../assets/me-g.png')} alt="me" />,
        state: false,
        text: 'Me',
    },
]