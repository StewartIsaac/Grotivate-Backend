import { atom } from "recoil";
import { homeData } from "../components/homeData";


export const homeTabs = atom({
    key: 'homeTabs',
    default: homeData[0].component
}) 