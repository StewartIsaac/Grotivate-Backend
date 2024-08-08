import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { userInfo } from "../atoms/user";
import { useRecoilState, useRecoilValue } from "recoil";
import { TextInput } from "react-native";
import { menuClick } from "../atoms/menu";
import { homeTabs } from "../atoms/tab";
import MenuList from "./MenuList";

export default function HomeHeader() {
  const navigation = useNavigation();
  const router = useRouter();
  let user = useRecoilValue(userInfo);
  let [search, setSearch] = useState("");
  let [menu,setMenu] = useRecoilState(menuClick);
  let [activeComponent,setActivecomponent] = useRecoilState(homeTabs)

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View className="mt-12  ">
      <Text className="font-normal font-Inter400 text-xs mt-[10px] ">
        Hi {user.data.fullName ? user.data.fullName : "Wilson!"}
      </Text>
      <View className="flex flex-row items-start justify-start w-[98vw] mx-auto ">
        <Image
          className="w-[64px] h-[51px] object-contain "
          source={require("../assets/grooooo 2.png")}
          alt="grotivate"
        />
        {/* search */}
        <View className=" w-[183px] mx-auto h-[25px]  border-[2px] border-mgray3 flex items-center justify-between flex-row rounded-[8px] p-3 ">
          <Image  source={require("../assets/search1.png")} alt="search" />
          <TextInput
            onChangeText={setSearch}
            value={search}
            className=" w-full ml-1 h-[25px] border-0 outline-0 "
            placeholder="Search...."
            placeholderTextColor="#aaa"
          />
        </View>
        <View className="flex flex-row  items-start justify-start ">
          <Image source={require("../assets/basket.png")} alt="basket" />
          <View className="relative ml-[15px] mr-2  ">
            <Image source={require("../assets/bell.png")} alt="bell" />
            <View className="absolute top-0 right-0 w-[12px] rounded-full  h-[12px] bg-mgreen flex-1 items-center justify-center  ">
              <Image source={require("../assets/+.png")} alt="plus" />
            </View>
          </View>
           <Pressable onPress={()=> {setMenu(true); setActivecomponent(<MenuList />) } } >
           <Image source={require("../assets/dashicons_menu-alt2.png")} alt="menu" />
           </Pressable>
        </View>
      </View>
    </View>
  );
}
