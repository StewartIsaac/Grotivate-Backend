import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
        <Text>About page</Text>
       <Link href='/' >
      
            <Text>
                Back home
            </Text>
       </Link>
    </View>
  );
}
