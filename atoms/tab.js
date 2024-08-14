import { atom } from "recoil";
import Home from "../components/Home";


export const homeTabs = atom({
    key: 'homeTabs',
    default: <Home />
}) 

