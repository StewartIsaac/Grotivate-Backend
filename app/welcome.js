import classNames from "classnames";
import { useNavigation, useRouter } from "expo-router";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, View } from "react-native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView, Text } from "react-native";
import { useRecoilState } from "recoil";
import * as Yup from "yup";
import { userInfo } from "../atoms/user";



export default function Page() {
  const navigation = useNavigation();
  const router = useRouter();
  let [part, setPart] = useState(1);
  let [status, setStatus] = useState("");
  let [user, setUser] = useRecoilState(userInfo);

  // name, location,country,address,city,state
const Schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  lg: Yup.string().required("Required"),
  // experience: part ===2 && Yup.string().required("Required"),
});

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView className="w-full">
      <ScrollView className="mt-12 w-full mx-[9px] ">
        <View className="flex items-start flex-row justify-start gap-[15px] mt-[5px]">
          <Image source={require("../assets/grooooo 2.png")} alt="grotivate" />
          <Image source={require("../assets/grooooo 3.png")} alt="grotivate" />
        </View>
        <View className="mt-[6px] w-full ">
          <Text className="font-Inter500 font-medium text-[34px] w-[201px] ">
            Welcome to Grotivate
          </Text>
          <Text className="font-Inter400 font-normal text-[15px]">
            Lets setup your farm, tell us about your farm and preferences.
          </Text>
        </View>
        {/* outer box */}
        <View className="mt-[6px] w-full  block ">
          {/* inner box */}

          {/* form */}
          <Formik
            initialValues={{
              name: "",
              country: "",
              city: "",
              address: "",
              state: "",
              lg: "",
              // experience: "",
            }}
            onSubmit={async (values) => {
              // setPart(2);
              setUser({...user,farmInfo: values})
              router.replace('/welcome2')
              // if(part === 2) {
              //   // alert('submitting')
              // }
              // console.log(values)
             
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
                <View className="w-[95vw]  border-[1px] border-mgray px-[9px] ">
                  {/* line1 */}
                  <View className="pt-[29px]  ">
                    <View className="flex items-start justify-start flex-row gap-[7px] ">
                      <Text
                        className={classNames(
                          `w-[19px] h-[18px] bg-mgray3 rounded-full  `,
                          {
                            "bg-black": part === 1,
                          }
                        )}
                      ></Text>
                      <Text
                        className={classNames(
                          "font-Inter400 font-normal text-[15px] text-mgray3 ",
                          {
                            "text-black": part === 1,
                          }
                        )}
                      >
                        About your Farm
                      </Text>
                    </View>
                    <View className="flex items-start justify-start flex-row gap-[7px] mt-[6px] ">
                      <Text
                        className={classNames(
                          `w-[19px] h-[18px] bg-mgray3 rounded-full  `,
                          {
                            "bg-black": part === 2,
                          }
                        )}
                      ></Text>
                      <Text
                        className={classNames(
                          "font-Inter400 font-normal text-[15px] text-mgray3 ",
                          {
                            "text-black": part === 2,
                          }
                        )}
                      >
                        Complete
                      </Text>
                    </View>
                    <Text className="h-[1px] w-[85vw] bg-mgray3 mx-auto mt-[33px] "></Text>
                    <Text className=" w-[85vw] font-Inter400 font-normal text-[7px]  mx-auto mt-[5px] text-center ">
                      Step {part} of 2
                    </Text>
                    <Text className="font-Inter500 font-semibold text-15 text-black text-center mt-3 ">
                      {part===1?'About your Farm': 'Complete'}
                    </Text>
                  </View>

                  {/*  */}
                   {/* part 1 */}
                   {
                    part === 1 && 
                    <>
                      {/* name */}
                <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    What do you call your farm?
                  </Text>
                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      className=" w-full block border-transparent "
                      placeholder="For example: The right Farms"
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
                {touched.name && errors.name && (
                  <Text className="text-red-600 text-xs">{errors.name}</Text>
                )}
                {/* country */}
                <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    Where are you located?
                  </Text>
                  <Text className="mb-[3px] font-Inter500 font-medium text-[7px] ">
                    This will help to accurately map your farm. You can always
                    add this later.
                  </Text>
                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("country")}
                      onBlur={handleBlur("country")}
                      value={values.country}
                      className=" w-full block border-transparent "
                      placeholder="Nigeria"
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
                {touched.country && errors.country && (
                  <Text className="text-red-600 text-xs">{errors.country}</Text>
                )}
               
                 {/* state */}
                 <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    State
                  </Text>

                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("state")}
                      onBlur={handleBlur("state")}
                      value={values.state}
                      className=" w-full block border-transparent "
                      placeholder=""
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
                {touched.state && errors.state && (
                  <Text className="text-red-600 text-xs mb-[77px] ">{errors.state}</Text>
                )}
                {/* city */}
                <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    City
                  </Text>

                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("city")}
                      onBlur={handleBlur("city")}
                      value={values.city}
                      className=" w-full block border-transparent "
                      placeholder=""
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
                {touched.city && errors.city && (
                  <Text className="text-red-600 text-xs">{errors.city}</Text>
                )}

                 {/* local goverment */}
                 <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    Local Government
                  </Text>

                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("lg")}
                      onBlur={handleBlur("lg")}
                      value={values.lg}
                      className=" w-full block border-transparent "
                      placeholder=""
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
                {touched.lg && errors.lg && (
                  <Text className="text-red-600 text-xs">{errors.lg}</Text>
                )}

                 {/* address */}
                 <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    Address
                  </Text>

                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("address")}
                      onBlur={handleBlur("address")}
                      value={values.address}
                      className=" w-full block border-transparent h-[76px] "
                      placeholder=""
                      placeholderTextColor="#aaa"
                      multiline
                    />
                  </View>
                </View>
                {touched.address && errors.address && (
                  <Text className="text-red-600 text-xs">{errors.address}</Text>
                )}
               
                    </>
                   }
                   {/* {
                    part === 2 && 
                    <> */}
                     {/* <Text>Noting for Now</Text> */}
                      {/* state */}
                {/* <View className=" mb-[25px] mt-[11px]  ">
                  <Text className="mb-[3px] font-Inter500 font-medium text-[12px] ">
                    Experience
                  </Text>

                  <View className=" w-[90vw]  mx-auto h-auto border-[1px] border-mgray3 flex items-center justify-between flex-row py-[10px] pl-[10px] pr-[11px] ">
                    <TextInput
                      onChangeText={handleChange("experience")}
                      onBlur={handleBlur("experience")}
                      value={values.experience}
                      className=" w-full block border-transparent "
                      placeholder=""
                      placeholderTextColor="#aaa"
                    />
                  </View>
                </View>
                {touched.experience && errors.experience && (
                  <Text className="text-red-600 text-xs mb-[77px] ">{errors.experience}</Text>
                )} */}
                    {/* </>
                   } */}
                </View>

                {/* login button */}
                <View className="mt-[14px] mb-[26px] w-[90vw] mx-auto ">
                  {isSubmitting && (
                    <Pressable
                      disabled={true}
                      className="text-white w-full flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen py-[10px] px-[13px] pr-[18px] "
                    >
                      <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                        <ActivityIndicator color={"primary"} size={"large"} />
                      </Text>
                    </Pressable>
                  )}
                  {!isSubmitting && (
                    <Pressable
                      onPress={() => handleSubmit()}
                      type="submit"
                      className="text-white w-full flex items-center flex-row justify-center h-[55px]  rounded-[14.81px] bg-mgreen2 py-[10px] px-[13px] pr-[18px] "
                    >
                      <Text className="text-white text-[18px] font-Inter700 font-semibold ">
                        {
                          part === 1 && 
                          <>
                          Next <Image source={require('../assets/arrow.png')} alt="next arrow" />
                          </>
                        }

                        {
                          part === 2 && 

                          <>Submit</>
                        }
                      </Text>
                    </Pressable>
                  )}
                </View>
                {/* error status */}
                <Text className="text-red-600 text-center mt-1">
                  {" "}
                  {status}{" "}
                </Text>
              </>
            )}
          </Formik>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}
