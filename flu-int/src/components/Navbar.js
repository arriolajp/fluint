import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Link href="/" asChild>
        <TouchableOpacity><Text style={styles.link}>Home</Text></TouchableOpacity>
      </Link>
      <Link href="/login" asChild>
        <TouchableOpacity><Text style={styles.link}>Login</Text></TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f9fa',
    padding: 15,
  },
  link: {
    fontSize: 18,
    color: '#007bff',
  },
});
