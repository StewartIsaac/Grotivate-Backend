import {  useNavigation, useRouter } from "expo-router";
import { useEffect, useState, } from "react";
import {  Pressable, Text, TextInput, View,ActivityIndicator } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import axios, { AxiosHeaders } from "axios";
import { useRecoilState } from "recoil";
import { userInfo } from "../atoms/user";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  
});


export default function Page() {
  const navigation = useNavigation();
  const router = useRouter();
  let [status,setStatus] = useState('');
  let  [user,setUser] = useRecoilState(userInfo);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  
 
  return (
    <SafeAreaView className='' >
      <ScrollView className="mt-12 grid grid-cols-1  w-full bg-white h-full   ">
       {/* forgot */}
       <View className='w-[323px] h-[90px] mx-auto mt-[67px]  ' >
        <Text className='font-Inter700 text-15 text-center font-bold mb-[26px] ' >Forgot Password</Text>
        <Text className='font-Roboto400 text-15' >Please enter the email address used to register for this account.</Text>
       </View>
      <View className="mt-[54px] w-[323px] mx-auto  ">
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) =>{ 
            // console.log(values)

          let url = 'https://grotivate.onrender.com/api/users/request-password-reset-otp';
            try {
              let resp= await   fetch(url, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: values.email
                })
              }).then(a=> {
                return a.json();
              }).then(b=> {
                console.log(b);
                setStatus(b.message)
                if(String(b.message).includes('Password reset OTP sent to your email')) {
                  setUser({isLoggedIn:false, email: values.email})
                  router.replace('/reset1');
                }
              }).catch(err=> {
                console.log(err)
                setStatus(err.message)
              })
              
            } catch (error) {
              console.log(error)
              setStatus(error.message)
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
              <View className=" mb-[25px]  ">
                
                <View className=" w-[323px]  mx-auto h-[55px] border-[1px] border-mgray flex items-center justify-between flex-row rounded-[20px] py-[10px] pl-[10px] pr-[11px] ">
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    className=" w-[270px] border-transparent "
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                  />
                </View>
              </View>
              {touched.email && errors.email && (
                <Text className="text-red-600 text-xs">{errors.email}</Text>
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
                !isSubmitting &&

                <Pressable
                onPress={() => handleSubmit() }
                type="submit"
                className="text-white min-w-[65px] flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen2 py-[10px] px-[13px] pr-[18px] "
              >
                <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                 Next
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
