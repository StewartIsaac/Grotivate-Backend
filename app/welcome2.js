import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Image } from "react-native";
import { View } from "react-native";
import success from "../assets/ph_check-fill.png";

import { Text } from "react-native";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atoms/user";

export default function Page() {
  const { slug } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();
  let user = useRecoilValue(userInfo);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    setTimeout(() => {
        router.replace('/home');
    }, 1000);
    // let url = 'https://grotivate.onrender.com/api/users/reset-password';
    //   try {
    //     let resp= await   fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         email: values.email
    //       })
    //     }).then(a=> {
    //       return a.json();
    //     }).then(b=> {
    //       console.log(b);
    //       setStatus(b.message)
    //       if(String(b.message).includes('Please enter password')) {
    //         setUser({isLoggedIn:false, data: {email: values.email}})
    //         router.replace('/reset1');
    //       }
    //     }).catch(err=> {
    //       console.log(err)
    //       setStatus(err.message)
    //     })
    //   } catch (error) {
    //     console.log(error)
    //     setStatus(error.message)
    //   }
  }, []);

  return (
    <View className="w-full flex-1 items-center justify-center ">
      <Image className=" " source={success} alt="success" />
      <Text className="mt-[23px] mb-[0px] font-Inter700 font-bold text-15 text-center w-[286px]  ">
        Please wait while we completely set up your profile.
      </Text>

      <View className="flex mt-[0px] items-center justify-center flex-col gap-[3px]  ">
        <Text className="text-15 w-[323px] font-normal text-center font-Inter400">
          You’ll will be redirected to the next page.
        </Text>
        <Text className="text-[7px] mt-2 font-normal text-center font-Inter400">
        Step 2 of 2
        </Text>

      </View>
    </View>
  );
}
