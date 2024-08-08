import { useNavigation, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, View, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { userInfo } from "../atoms/user";

const Schema = Yup.object().shape({
  digit1: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
  digit2: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
  digit3: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
  digit4: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
  digit5: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
  digit6: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
});

export default function Page() {
  const navigation = useNavigation();
  const router = useRouter();
  let  [user,setUser] = useRecoilState(userInfo);
  let [status,setStatus] = useState('');

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView className="mt-12 grid grid-cols-1 bg-mwhite w-full   ">
        {/* forgot */}
        <View className="w-[323px] h-[90px] mx-auto mt-[193px]  ">
          <Text className="font-Inter700 text-15 text-center font-bold mb-[26px] ">
          Email Verification
          </Text>
          <Text className="font-Roboto400 mt[7px] text-15">
          A One Time Password has been sent to the email address . Please input password to continue.
          </Text>
        </View>
        <View className="mt-[39px] w-[323px] mx-auto  ">
          <Formik
            initialValues={{
              digit1: "",
              digit2: "",
              digit3: "",
              digit4: "",
              digit5: "",
              digit6: "",
              
            }}
            onSubmit={async (values) => {
              let url = 'https://grotivate.onrender.com/api/users/verify-otp';
              try {
                let resp= await   fetch(url, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    otp: `${values.digit1}${values.digit2}${values.digit3}${values.digit4}${values.digit5}${values.digit6}` ,
                    email: user.data.email
                  })
                }).then(a=> {
                  return a.json();
                }).then(b=> {
                  // console.log(b);
                  setStatus(b.message)
                  if(String(b.message).includes('successfully')) {
                    setUser({...user,isLoggedIn: true})
                    router.replace('/email2')
                  }
                }).catch(err=> {

                  // console.log(err)
                  setStatus(err.message);
                })
                
              } catch (error) {
                setStatus(error.message);
                // console.log(error)
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
              isSubmitting
            }) => (
              <>
                {/* email */}
                <View className=" mb-[25px] flex items-center justify-center flex-row gap-[5px]  ">
                    {/* box1 */}
                  <TextInput
                    onChangeText={handleChange("digit1")}
                    onBlur={handleBlur("digit1")}
                    value={values.digit1}
                    className=" text-center w-[50px] rounded-[10px] h-[49px] bg-mgray border-transparent "
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={1}
                    returnKeyType={"next"}
                    autoFocus={true}
                    onChange={() => ref_input2.current.focus()}
                  />
                  {/* box2 */}
                  <TextInput
                    ref={ref_input2}
                    onChangeText={handleChange("digit2")}
                    onBlur={handleBlur("digit2")}
                    value={values.digit2}
                    className="text-center w-[50px] rounded-[10px] h-[49px] bg-mgray border-transparent "
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={1}
                    onChange={() => ref_input3.current.focus()}
                  />
                  {/* box3 */}
                  <TextInput
                    onChangeText={handleChange("digit3")}
                    onBlur={handleBlur("digit3")}
                    value={values.digit3}
                    className="text-center w-[50px] rounded-[10px] h-[49px] bg-mgray border-transparent "
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={1}
                    ref={ref_input3}
                    onChange={() => ref_input4.current.focus()}
                  />
                  {/* box4 */}
                  <TextInput
                    onChangeText={handleChange("digit4")}
                    onBlur={handleBlur("digit4")}
                    value={values.digit4}
                    className="text-center w-[50px] rounded-[10px] h-[49px] bg-mgray border-transparent "
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={1}
                    ref={ref_input4}
                    onChange={() => ref_input5.current.focus()}
                    
                  />
                  {/* box5 */}
                  <TextInput
                    onChangeText={handleChange("digit5")}
                    onBlur={handleBlur("digit5")}
                    value={values.digit5}
                    className="text-center w-[50px] rounded-[10px] h-[49px] bg-mgray border-transparent "
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={1}
                    ref={ref_input5}
                    onChange={() => ref_input6.current.focus()}
                    
                  />
                  {/* box6 */}
                  <TextInput
                    onChangeText={handleChange("digit6")}
                    onBlur={handleBlur("digit6")}
                    value={values.digit6}
                    className="text-center w-[50px] rounded-[10px] h-[49px] bg-mgray border-transparent "
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={1}
                    ref={ref_input6}
                    
                  />
                 
                </View>
                {touched.email && errors.email && (
                  <Text className="text-red-600 text-xs">{errors.email}</Text>
                )}

                {/* login button */}
                <View className="mt-[93px] ">
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
                  !isSubmitting && 
                  <Pressable
                  onPress={() => handleSubmit()}
                  type="submit"
                  className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen py-[10px] px-[13px] pr-[18px] "
                >
                  <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                  Continue
                  </Text>
                </Pressable>
                 }
                </View>
                 {/* error status */}
                 <Text className='text-red-600 text-center mt-1' > {status} </Text>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
