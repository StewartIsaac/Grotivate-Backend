import React from 'react'
import { Image, Text, View } from 'react-native';
import onboarding2 from '../assets/onboarding2.png';

const Obscreen2 = () => {
  return (
    <View className='flex h-fit items-center justify-center w-[215px]' >
      <Image className='h-[181px] w-[215px] object-cover ' source={onboarding2} alt='onboarding image one' />
      <Text style={{fontFamily: 'Itim400',fontSize: 14}} className='mt-[19px] w-[215px]  h-[34px]  ' >Simplify crop planning, harvest and 
      income projection.</Text>
    </View>
  )
}

export default Obscreen2
