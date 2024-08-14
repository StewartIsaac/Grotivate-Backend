import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import grotivate from "../assets/loginlogo.png";
import openeye from "../assets/openeye.png";
import apple from "../assets/ic_baseline-apple.png";
import google from "../assets/devicon_google.png";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userInfo } from "../atoms/user";

// 192.168.229.98:8081

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const navigation = useNavigation();
  const router = useRouter();
  let [status, setStatus] = useState("");
  let [form, setForm] = useState(false);
  let [user,setUser] = useRecoilState(userInfo);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  

  return (
    <SafeAreaView>
      <ScrollView className="mt-12 grid grid-cols-1 bg-mwhite w-full   ">
        <View className="mt-[25px] flex items-center justify-center w-[124px] h-[111px] mx-auto ">
          <Image className=" block " source={grotivate} alt="grotivate" />
        </View>
        <View className="mt-[25px] w-[323px] mx-auto  ">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              let url = 'https://grotivate.onrender.com/api/users/login';
              try {
                let resp= await   fetch(url, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    password: values.password,
                    email: values.email
                  })
                }).then(a=> {
                  return a.json();
                }).then(b=> {
                  // console.log(b);
                  setStatus(b.message)
                    if(b.token) {
                      setUser({isLoggedIn:true, data:{email: values.email,token: b.token}});
                      setTimeout(() => {
                        router.replace("/welcome");
                      }, 1000);
                    }
                  }).catch(err=> {
                    setStatus(err.message)
                    // console.log(err);
                  })
                
              } catch (error) {
                // console.log(error);
                setStatus(error.message);
              }
            }}
            validationSchema={Schema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <>
                {/* email */}
                <View className=" mb-[25px]  ">
                  <Text
                    style={{ fontFamily: "Inter700" }}
                    className="text-[15px] mb-2  "
                  >
                    Email address
                  </Text>
                  <View className=" w-[323px]  mx-auto h-[55px] border-[1px] border-mgray flex items-center justify-between flex-row rounded-[20px] py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      className=" w-[270px] border-transparent "
                      placeholder="Enter Email"
                      placeholderTextColor="#aaa"
                    />
                    <Text className="text-mgray font-Roboto400 text-[13px] ">
                      Email
                    </Text>
                  </View>
                </View>
                {touched.email && errors.email && (
                  <Text className="text-red-600 text-xs">{errors.email}</Text>
                )}
                {/* password */}
                <View className=" ">
                  <Text
                    style={{ fontFamily: "Inter700" }}
                    className="text-[15px] mb-2 "
                  >
                    Password
                  </Text>
                  <View className=" w-[323px] mx-auto h-[55px] border-[1px] border-mgray flex items-center justify-between flex-row rounded-[20px] py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      className=" w-[270px]  border-transparent  "
                      placeholder="Enter Password"
                      placeholderTextColor="#aaa"
                      secureTextEntry={!showPassword}
                    />
                    <Text onPress={toggleShowPassword}>
                      {showPassword ? (
                        "hide"
                      ) : (
                        <Image source={openeye} alt="show password" />
                      )}
                    </Text>
                  </View>
                </View>
                {touched.password && errors.password && (
                  <Text className="text-red-600 text-xs">
                    {errors.password}
                  </Text>
                )}
                {/* remeber */}
                <View className="flex flex-row mt-[25px] items-center justify-between ">
                  <View className="flex flex-row items-center ">
                    <RadioButton.Android
                      value="option1"
                      status={
                        selectedValue === "option1" ? "checked" : "unchecked"
                      }
                      onPress={() => setSelectedValue("option1")}
                      color="#007BFF"
                    />
                    <Text className="font-Roboto400 text-14">Remember me</Text>
                  </View>
                  <View>
                    <Text
                      onPress={() => router.replace("/forgot")}
                      className="font-Roboto400 text-14"
                    >
                      Forgot Password?
                    </Text>
                  </View>
                </View>
                {/* login button */}
                <View className="mt-[25px] ">
                  {!isSubmitting && (
                    <Pressable
                      onPress={() => handleSubmit()}
                      type="submit"
                      className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen2 py-[10px] px-[13px] pr-[18px] "
                    >
                      <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                        Log in
                      </Text>
                    </Pressable>
                  )}
                  {isSubmitting && (
                    <Pressable
                      disabled={true}
                      className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen2 py-[10px] px-[13px] pr-[18px] "
                    >
                      {/* <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                    Log in
                  </Text> */}
                      <ActivityIndicator size={"large"} color={"primary"} />
                    </Pressable>
                  )}
                </View>
                {/* error status */}
                <Text className="text-red-600 text-center mt-1">
                  {" "}
                  {status}{" "}
                </Text>
                <Text className="font-Roboto400 w-[95vw] mx-auto text-[13px] text-center mt-[25px] ">
                  {" "}
                  Or login with{" "}
                </Text>
                {/* buttons */}
                <View className=" mt-9 w-[95vw] items-center px-[8px]  flex text-center justify-between  flex-col">
                  <Pressable
                    onPress={() => {}}
                    type="submit"
                    className="text-white w-full border-[0.59px]   rounded-[11.83px] bg-trasparent py-[15px] flex items-center justify-center flex-row mb-[24px] gap-[14.4px] "
                  >
                    <Image className="" source={google} alt="google" />
                    <Text className="text-black font-Roboto700 font-semibold ">
                      Google
                    </Text>
                  </Pressable>
                  <Pressable className="text-white w-full  rounded-[11.83px] bg-transparent py-[15px] border-[0.59px]   flex items-center justify-center flex-row gap-[14.4px]">
                    <Image className="" source={apple} alt="apple" />
                    <Text className="text-black font-Roboto700  font-semibold ">
                      Apple
                    </Text>
                  </Pressable>
                </View>
                {/* last secttion */}
                <View className="flex mt-[25px] flex-row items-center justify-center">
                  <Text className="font-Roboto400 font-normal italic text-[13px] ">
                    Don't have an account?{" "}
                  </Text>
                  <Text
                    onPress={() => router.replace("/signup")}
                    className="font-Roboto700 font-bold italic text-[13px]"
                  >
                    Sign Up Now
                  </Text>
                </View>

                <Text className="font-Roboto400 font-normal italic text-[13px] text-center mt-[36px] mb-[79px] ">
                  V.1.1.2
                </Text>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
