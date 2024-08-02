import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import openeye from "../assets/openeye.png";

const Schema = Yup.object().shape({
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

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView className="mt-12 grid grid-cols-1 bg-mwhite w-full   ">
        {/* forgot */}
        <View className="w-[323px] h-[90px] mx-auto mt-[141px]  ">
          <Text className="font-Inter700 text-15 text-center font-bold mb-[26px] ">
            Password Reset.
          </Text>
          <Text className="font-Roboto400 text-15">
            Please Enter New Password.
          </Text>
        </View>
        <View className="mt-[54px] w-[323px] mx-auto  ">
          <Formik
            initialValues={{
              password1: "",
              password2: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
              router.replace("/reset3");
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
            }) => (
              <>
                {/* password1 */}
                <View className=" w-[323px] mx-auto h-[55px] border-[1px] border-mgray flex items-center justify-between flex-row rounded-[20px] py-[10px] pl-[10px] pr-[11px] ">
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
                <View className=" w-[323px] mt-6  mx-auto h-[55px] border-[1px] border-mgray flex items-center justify-between flex-row rounded-[20px] py-[10px] pl-[10px] pr-[11px] ">
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
                  <Pressable
                    onPress={() => handleSubmit()}
                    type="submit"
                    className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen2 py-[10px] px-[13px] pr-[18px] "
                  >
                    <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                      Next
                    </Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
