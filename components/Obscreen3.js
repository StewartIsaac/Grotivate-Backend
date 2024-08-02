import React from 'react'
import { Image, Text, View } from 'react-native';
import onboarding3 from '../assets/onboarding3.png';


const Obscreen3 = () => {
  return (
    <View className='flex h-fit items-center justify-center w-[239px]' >
      <Image className='h-[181px] w-[239px] object-cover ' source={onboarding3} alt='onboarding image one' />
      <Text style={{fontFamily: 'Itim400',fontSize: 14}} className='mt-[19px] w-[239px]  h-[34px]  ' >Be on top of your farming game, predict
      the weather with our weather map.</Text>
    </View>
  )
}

export default Obscreen3
