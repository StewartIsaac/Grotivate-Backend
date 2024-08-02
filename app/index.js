import { Link, Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Button, Text, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import logo from '../assets/grotivate.png';
import Onboarding from '../components/Onboarding';

function LogoTitle() {
  return (
    <Image className='' source={logo } />
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  const router = useRouter();
  const params = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);

  return (
    <View className=' flex-1 items-center justify-center m-0 p-0 ' >
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
      <Onboarding />
    </View>
  );
}


