import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import obRight from "../assets/bg-right.png";
import obLeft from "../assets/ob-left.png";
import { obData } from "./onboardingData";
import MyButton from "./Mybutton";
import { useRouter } from 'expo-router';

const Onboarding = () => {
  let [screen, setScreen] = useState(obData);
  let showing = useRef(screen[0].component);
  let clickId = useRef(0);
  const router = useRouter();


  function handleNext() {
    // if(clickId.current != screen.length -1 ) {
    //   clickId.current = clickId.current + 1;

    // }
    clickId.current = clickId.current + 1;
    if(clickId.current === screen.length ) {
      router.replace('/signup')

    }else{
      showing.current = screen[clickId.current].component;

    }
    let upd = screen.map((each, i) => {
      if (clickId.current === i) {
        each.class = "#000000";
      } else {
        each.class = "#D9D9D9";
      }
      return each;
    });
    setScreen(upd);
  }
  return (
    <View className="flex-1 mt-12 w-full bg-[#FEFEFE]  md:w-[100%] relative  ">
      {/* first section */}
      <View className="w-full h-[240px] relative  ">
        <Image
          className="w-[123px] block h-[240px] absolute right-0 "
          source={obRight}
          alt="right bg"
        />
      </View>
      {/* changing section */}
      <View className="min-h-[240px] ">
        <View className="w-full flex-1 items-center justify-center ">
          <Text>{showing.current}</Text>
        </View>
      </View>
      {/* last section */}
      <View className="w-full h-fit  ">
        {/* dots */}
        <View className="flex-1 flex-col mt-[26px] mb-[33px]  items-center justify-center ">
          <View className="  w-full">
            <View className="h-fit w-full text-center flex-row flex items-center justify-center gap-[6px] ">
              {screen.map((each, i) => (
                <Text
                  style={{ backgroundColor: each.class }}
                  className="h-[11px] w-[11px] inline-flex rounded-full  "
                  key={i}
                >
                  {" "}
                </Text>
              ))}
            </View>
          </View>
        </View>
        {/* next button */}
        <View className="">
          <MyButton label={"Next"} onPress={handleNext} />
        </View>
        {/* last bg */}
        <Image
          className="w-[123px] block h-[240px] mt-1  absolute left-[-20px] "
          source={obLeft}
          alt="right bg"
        />
      </View>
    </View>
  );
};

export default Onboarding;
