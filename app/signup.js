import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, View, ActivityIndicator } from "react-native";
import { SafeAreaView, Text } from "react-native";
import groove from "../assets/grooooo 7.png";
import { Formik } from "formik";
import * as Yup from "yup";

import openeye from "../assets/openeye.png";
import { TextInput } from "react-native";
import axios from "axios";
import { userInfo } from "../atoms/user";
import { useRecoilState } from "recoil";

const Schema = Yup.object().shape({
  fullname: Yup.string().min(3, "impossible fullname ").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password1: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
  password2: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    )
    .oneOf([Yup.ref("password1"), null], "Passwords must match"),
});

export default function Page() {
  const navigation = useNavigation();
  const router = useRouter();
  let [showPassword1, toggleShowPassword1] = useState(true);
  let [showPassword2, toggleShowPassword2] = useState(false);
  let [status,setStatus] = useState('');
  let [user,setUser] = useRecoilState(userInfo);
  let [form, setForm] = useState(false);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if(form) {
      axios
      .post("https://grotivate.onrender.com/api/users/signup", {
        email: form.email,
        password: form.password1,
        name: form.fullname
      })
      .then((resp) => {
        console.log(resp);
        setStatus(resp.data.message)
        setUser({isLoggedIn:true, data:resp.data});
        setTimeout(() => {
          router.replace("/email");
        }, 1000);

      })
      .catch((err) => {
        setStatus(err.message)
        console.log(err,'error');
        
      });
    }
  }, [form]);

  return (
    <SafeAreaView className="bg-mgray2">
      <ScrollView>
        {/* image */}
        <View className="mt-[39px]  flex items-center justify-center flex-row ">
          <Image source={groove} alt="grovite" />
        </View>
        {/* text */}
        <Text className="text-center mt-[42px] font-Inter700 font-bold text-[16px] ">
          Create an account
        </Text>
        {/* form */}

        <View className="mt-[14px] w-[323px] mx-auto  ">
          <Formik
            initialValues={{
              password1: "",
              password2: "",
              email: "",
              fullname: "",
            }}
            onSubmit={async (values) => {
             setForm(values);
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
              isSubmitting
            }) => (
              <>
                {/* fullname */}
                <View className="   ">
                  <View className=" w-[323px]  mx-auto h-[55px] border-[1px] border-white flex items-center justify-between flex-row rounded-[10px] py-[10px] pl-[10px] pr-[11px] bg-white ">
                    <TextInput
                      onChangeText={handleChange("fullname")}
                      onBlur={handleBlur("fullname")}
                      value={values.fullname}
                      className=" w-[270px] border-transparent "
                      placeholder="Full Name"
                      placeholderTextColor="#aaa"
                    />
                    <Text className="text-mgray hidden font-Roboto400 text-[13px] ">
                      Email
                    </Text>
                  </View>
                </View>
                {touched.fullname && errors.fullname && (
                  <Text className="text-red-600  text-xs">
                    {errors.fullname}
                  </Text>
                )}
                {/* email */}
                <View className="   ">
                  <View className=" w-[323px] mt-[25px]  mx-auto h-[55px] border-[1px] border-white flex items-center justify-between flex-row rounded-[10px] py-[10px] pl-[10px] pr-[11px] bg-white ">
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      className=" w-[270px] border-transparent "
                      placeholder="Email"
                      placeholderTextColor="#aaa"
                    />
                    <Text className="text-mgray  hidden font-Roboto400 text-[13px] ">
                      Email
                    </Text>
                  </View>
                </View>
                {touched.email && errors.email && (
                  <Text className="text-red-600  text-xs">{errors.email}</Text>
                )}
                {/* password1 */}
                <View className=" w-[323px] mt-[25px] mx-auto h-[55px] border-[1px] border-white flex items-center justify-between flex-row rounded-[10px] py-[10px] pl-[10px] pr-[11px] bg-white ">
                  <TextInput
                    onChangeText={handleChange("password1")}
                    onBlur={handleBlur("password1")}
                    value={values.password1}
                    className=" w-[270px]  border-transparent  "
                    placeholder="New Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!showPassword1}
                  />
                  <Text onPress={toggleShowPassword1}>
                    {showPassword1 ? (
                      "hide"
                    ) : (
                      <Image source={openeye} alt="show password" />
                    )}
                  </Text>
                </View>
                {touched.password1 && errors.password1 && (
                  <Text className="text-red-600 text-xs">
                    {errors.password1}
                  </Text>
                )}
                {/* password2 */}
                <View className=" w-[323px] mt-6  mx-auto h-[55px] border-[1px] border-white flex items-center justify-between flex-row rounded-[10px] py-[10px] pl-[10px] pr-[11px] bg-white ">
                  <TextInput
                    onChangeText={handleChange("password2")}
                    onBlur={handleBlur("password2")}
                    value={values.password2}
                    className=" w-[270px]  border-transparent  "
                    placeholder="Confirm New Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!showPassword2}
                  />
                  <Text onPress={toggleShowPassword2}>
                    {showPassword2 ? (
                      "hide"
                    ) : (
                      <Image source={openeye} alt="show password" />
                    )}
                  </Text>
                </View>
                {touched.password2 && errors.password2 && (
                  <Text className="text-red-600 text-xs">
                    {errors.password2}
                  </Text>
                )}

                {/* login button */}
                <View className="mt-[65px] ">
                  {
                    isSubmitting && <Pressable
                    disabled={true}
                    className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen py-[10px] px-[13px] pr-[18px] "
                  >
                    <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                     <ActivityIndicator color={'primary'} size={'large'} />
                    </Text>
                  </Pressable>
                
                  }

                  {
                    !isSubmitting && <Pressable
                    onPress={() => handleSubmit()}
                    type="submit"
                    className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen py-[10px] px-[13px] pr-[18px] "
                  >
                    <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                      Sign Up
                    </Text>
                  </Pressable>
                  }
                </View>
                {/* error status */}
                <Text className='text-red-600 text-center mt-1' > {status} </Text>
                {/* question */}
                <View className="flex mt-[37px] flex-row items-center justify-center ">
                  <Text className="font-Roboto400 italic text-[13px] font-normal ">
                    Already have an account?{" "}
                  </Text>
                  <Text
                    onPress={() => router.replace("/login")}
                    className="font-Roboto700 italic text-[13px] font-bold "
                  >
                    Sign In
                  </Text>
                </View>
                {/* version */}
                <Text className="font-Roboto400 mt-[119px] mb-14 italic text-[13px] font-normal text-center ">
                  V.1.1.2
                </Text>
                {/* <Text>{user.text} </Text> */}
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}