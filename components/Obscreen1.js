import React from 'react'
import { Image, Text, View } from 'react-native';
import onboarding1 from '../assets/onboarding1.png';

const Obscreen1 = () => {
  return (
    <View className='flex h-fit items-center justify-center w-full' >
      <Image className='h-[181px] w-[184px] ' source={onboarding1} alt='onboarding image one' />
      <Text style={{fontFamily: 'Inter400',fontSize: 14}} className='mt-[19px]' >Streamline  sales online, keep inventory.</Text>
    </View>
  )
}

export default Obscreen1
