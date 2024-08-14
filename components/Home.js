import { useState } from "react";
import { Text, View } from "react-native";
import TempType from "./TempType";
import { Image } from "react-native";
import classNames from "classnames";

const Home = () => {
  let [weather, setWeather] = useState({
    city: "WARRI",
    city_temp: "100",
    "light rain": "H 29 ",
    Sunset: "6:54PM",
    Wind: "2 mps",
    Humidity: "67%",
    "Feels like": "30 ",
    "Sky Cover": "38%",
    "1-Hr Precip": "011mm",
  });

  let [card,setCard] = useState([
    {
      id: 1,
      img: require('../assets/overview1.png'),
      text: 'Harvest in 3days by farmer Chile',
      style: 'w-[98px] min-h-[127px]  '
    },
    {
      id: 2,
      img: require('../assets/overview2.png'),
      text: 'Harvest in 20days by farmer Faith',
      style: 'w-[82px] min-h-[94px] self-start '

    },
    {
      id: 3,
      img: require('../assets/overview3.png'),
      text: 'Harvest egg now by farmer Chile',
      style: 'w-[107px] min-h-[127px] '
    },
  ])
  return (
    <View className="mb-[70px] ">
      {/* weather */}
      <View className="w-[89vw] mx-auto min-h-[265px] bg-mgray px-4 py-8 rounded-[8px] ">
        <Text className="font-Inter400 font-normal text-xs text-mgray5 ">
          WEATHER FOR {weather.city}
        </Text>
        <View className="mt-[9px] flex flex-row justify-start items-center   ">
          <View className="text-black font-normal font-Inter400 text-[32px] mr-8  flex flex-row items-center justify-center ">
            <View  className='flex items-center justify-center flex-row ' >
              <View className='self-end pt-2 ' >
              <Text className='text-black font-normal font-Inter400 text-[32px]' >{weather.city_temp}</Text>
              </View>
               <TempType type='C'  /> 
               </View >
          </View>
          <Image source={require("../assets/cloud.png")} alt="cloud" />
        </View>

        <View className="mt-[22px]  ">
          <Text className='text-black font-normal font-Inter400 text-[12px] mb-[6px] '>Light Rain - {weather["light rain"]} </Text>
          <Text className='text-black font-[300] font-Inter400 text-[12px]'>Sunset: {weather.Sunset} </Text>
          <Text className='text-black font-[300] font-Inter400 text-[12px]'>Wind: {weather.Wind} </Text>
          <Text className='text-black font-[300] font-Inter400 text-[12px] mb-4'>Humidity: {weather.Humidity} </Text>
          <Text className='text-black font-[300] font-Inter400 text-[12px]'>Feels like: {weather["Feels like"]} </Text>
          <Text className='text-black font-[300] font-Inter400 text-[12px]'>Sky Cover: {weather["Sky Cover"]} </Text>
          <Text className='text-black font-[300] font-Inter400 text-[12px]'>1-Hr Precip : {weather["1-Hr Precip"]} </Text>
        </View>
      </View>
      {/* overview */}
      <View className="w-[96vw] mt-[25px] mx-auto min-h-[185px] bg-mgray px-[10px] py-[3px] rounded-[8px]"  >
        <Text className='font-Inter400 font-bold mb-2 text-xs text-mgray5' >FARM OVERVIEW</Text>
        <View className='flex w-[96vw] items-center justify-center gap-[14px] flex-row  ' >
           {
            card.map(each=> (
              <View key={each.id} className={classNames('',{'bg-white rounded-[6px] ': true, [each.style]: true})} >
                 <Image className='rounded-[8px] w-[100%] ' source={each.img} alt={each.text} />
                 <Text className={classNames('py-[10px] px-[3.5px] font-Inter400 font-normal text-[10px] text-center ',{
                  'text-[8px] ': each.id === 2
                 })} > {each.text.slice(0,15)}... </Text>
                 </View>
            ))
           }
        </View>
      </View>
    </View>
  );
};

export default Home;
