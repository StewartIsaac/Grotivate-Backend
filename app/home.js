import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { userInfo } from "../atoms/user";
import { RecoilRoot, useRecoilValue } from "recoil";
import HomeLayout from "../components/HomeLayout";


export default function Page() {
  const navigation = useNavigation();
  const router = useRouter();
  let user = useRecoilValue(userInfo);
  let [search, setSearch] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
            <RecoilRoot>
              <HomeLayout />
            </RecoilRoot>
  );
}
