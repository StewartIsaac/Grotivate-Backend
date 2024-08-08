import { Image } from "react-native";
import Schedule from "./Schedule";
import Pest from "./Pest";
import Crop from "./Crop";
import Livestock from "./Livestock";
import Resources from "./Resources";
import Account from "./Account";
import Contact from "./Contact";
import Climate from "./Climate";
import Farm from "./Farm";
import Setting from "./Setting";

export const menuData = [
    {
        id: 1,
        text: 'Schedule',
        icon: <Image source={require('../assets/schedule-g.png')} alt="schedule" />,
        state: true,
        component: <Schedule />
    },
    {
        id: 2,
        text: 'Pest and disease control',
        icon: <Image source={require('../assets/pest.png')} alt="pest" />,
        state: false,
        component: <Pest />
    },
    {
        id: 3,
        text: 'Crop management',
        icon: <Image source={require('../assets/crop.png')} alt="crop" />,
        state: false,
        component: <Crop />
    },
    {
        id: 4,
        text: 'Livestock',
        icon: <Image source={require('../assets/livestock.png')} alt="livestock" />,
        state: false,
        component: <Livestock />
    },
    {
        id: 5,
        text: 'Resources',
        icon: <Image source={require('../assets/resources.png')} alt="resouces" />,
        state: false,
        component: <Resources />
    },
    {
        id: 6,
        text: 'Account',
        icon: <Image source={require('../assets/account.png')} alt="account" />,
        state: false,
        component: <Account />
    },
    {
        id: 7,
        text: 'Contacts',
        icon: <Image source={require('../assets/contacts.png')} alt="contact" />,
        state: false,
        component: <Contact />
    },
    {
        id: 8,
        text: 'Climate',
        icon: <Image source={require('../assets/climate.png')} alt="climate" />,
        state: false,
        component: <Climate />
    },
    {
        id: 9,
        text: 'Farm  report',
        icon: <Image source={require('../assets/report.png')} alt="report" />,
        state: false,
        component: <Farm />
    },
    {
        id: 10,
        text: 'Setting',
        icon: <Image source={require('../assets/setting.png')} alt="settings" />,
        state: false,
        component: <Setting />
    },
   
]