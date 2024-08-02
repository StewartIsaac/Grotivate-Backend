import { atom } from "recoil";


export const userInfo = atom({
    key: 'userInfo',
    default: {
        isLoggedIn: false,
        text: 'Chile',
        data: []
    }
}) 