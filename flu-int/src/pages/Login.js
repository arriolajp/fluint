import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email/Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '80%',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
