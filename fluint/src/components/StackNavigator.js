import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#27C9FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Chat')}
              title="Go to Chat"
              color="#fff"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation }) => ({
          title: 'Welcome to FluintChat',
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Back"
              color="#fff"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
