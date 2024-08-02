import { Link, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import classNames from "classnames";
import * as Yup from "yup";


const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="mt-12 grid grid-cols-1  ">
      <View className="mt-14 ">
        <Text
          style={{ fontFamily: "Inter600" }}
          className={classNames(
            " italic font-semibold text-3xl leading-[45px] px-[34px] "
          )}
        >
          Sign in
        </Text>
      </View>
      <View className="mt-[72px] block">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => console.log(values)}
          validationSchema={Schema}
        >
          {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
            <>
            {/* email */}
              <View className="grid grid-cols-1 mb-[19px] px-[34px] ">
                <Text
                  style={{ fontFamily: "Inter700" }}
                  className="text-[15px] mb-2 "
                >
                  Email address
                </Text>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  className="border-[3px] w-full h-10 px-2  "
                  placeholder="Enter Email"
                  placeholderTextColor="#aaa"
                />
                {touched.email && errors.email && <Text className='text-red-600 text-xs'>{errors.email}</Text>}
              </View>
              {/* password */}
              <View className="grid grid-cols-1  px-[34px] ">
                <Text
                  style={{ fontFamily: "Inter700" }}
                  className="text-[15px] mb-2 "
                >
                  Password
                </Text>
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  className="border-[3px] w-full h-10 px-2   "
                  placeholder="Enter Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!showPassword}
                />
                {touched.password && errors.password && <Text className='text-red-600 text-xs' >{errors.password}</Text>}
              </View>
              {/* show password */}
              <View className="flex items-end justify-end w-full px-[17px] ">
                <Text
                  onPress={toggleShowPassword}
                  style={{ fontFamily: "Inter500" }}
                  className="text-center italic text-[15px] leading-5 text-[#47904E] border-b-[3px] w-[113px] border-[#47904E] "
                >
                  {" "}
                  {showPassword ? "Hide password" : "Show password"}{" "}
                </Text>
              </View>
            {/* buttons */}
              <View className=" mt-9 w-full items-center px-[8px]  flex text-center justify-between  flex-row">
                <Pressable
                  onPress={() => handleSubmit()}
                  type="submit"
                  className="text-white min-w-[65px]  rounded-[5px] bg-mgreen py-[10px] px-[13px] pr-[18px] "
                >
                  <Text className="text-white font-Roboto500i font-semibold ">
                    Submit
                  </Text>
                </Pressable>
                <Pressable className="text-white min-w-[121px]  rounded-[5px] bg-mgreen py-[10px] px-[13px] ">
                  <Text className="text-white font-Roboto500i font-semibold ">
                    Forgot password?
                  </Text>
                </Pressable>
              </View>
              {/* last secttion */}
              <View className='flex items-center justify-between flex-row mt-[143px] pl-[17px] pr-[37px]  ' >
                <Text className='font-Roboto500i text-15 italic py-[11p] font-medium' >Don't have an account?</Text>
                <Text className='font-Roboto500i ml-[11px]  text-15 italic py-[11p] font-medium text-mgreen' >create your account now</Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}
