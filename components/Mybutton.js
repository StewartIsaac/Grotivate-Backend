import React from 'react'
import { Pressable, Text, View } from 'react-native';
// import FontAwesome from "@expo/vector-icons/FontAwesome";

const MyButton = ({label,theme,onPress}) => {

  return (
    <View className='w-[86px] h-[33px] rounded-[3px] bg-black mx-auto  py-0 px-4 self-center flex items-center justify-center ' >
      <Pressable className=' ' onPress={onPress} >
        <Text style={{fontFamily: 'Inter600',fontSize: 20}}  className={`text-white font-[200] italic   `} > {label} </Text>
      </Pressable>
    </View>
  )
}

export default MyButton
