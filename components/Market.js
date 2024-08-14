import { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";
import Market1 from "./Market1";
import { useRecoilState } from "recoil";
import { hideHeaderAndFooter } from "../atoms/menu";


const Market = () => {
  let [part, setPart] = useState(1);
  let [all,setAll] = useRecoilState(hideHeaderAndFooter);

  return (
    <>
      {part === 1 && (
        <View className=" w-full pt-12 h-full bg-mgreen">
          <Image
            className="mt-8 ml-[14px] "
            source={require("../assets/grotivate.png")}
            alt="logo"
          />
          <Text className="w-[286px] mt-[20px] ml-[21px] font-Roboto700 font-bold text-[25px] text-white ">
            Welcome
          </Text>
          <Text className="w-[286px] ml-[21px] font-Roboto700 font-bold text-[25px] text-white ">
            to Grovitate Market Place{" "}
          </Text>
          <Text className="w-[249px] ml-[21px] font-Roboto400 font-normal text-[15px] text-white ">
            Buy and sell your farm produce from 
            
          </Text>
          <Text className="w-[249px] ml-[21px] font-Roboto400 font-normal text-[15px] text-white ">
          the comfort of your smartphone
            
          </Text>
          <Pressable className='w-[113px] ml-[21px] rounded-[8px] text-white h-[40px] bg-mgreen2 flex items-center justify-center ' onPress={() =>{ setPart(2); setAll(true) }}>
            <Text>Get Started</Text>
          </Pressable>
          <Image
            className=" object-contain h-[72vh] w-full "
            source={require("../assets/market1.png")}
            alt="market pics"
          />
        </View>
      )}
      {part === 2 && <Market1 setPart={setPart} />}
    </>
  );
};

export default Market;
Market;
