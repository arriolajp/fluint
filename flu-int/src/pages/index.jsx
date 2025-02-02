import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/login">
        <Button title="Go to Login" />
      </Link>
    </View>
  );
}
