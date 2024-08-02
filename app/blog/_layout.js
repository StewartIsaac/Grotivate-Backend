import { Tabs, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Layout() {
  const router = useRouter();
  const params = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);
  return <Tabs

   />;
}
