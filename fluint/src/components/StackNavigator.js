import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="Home" // Set initial screen
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome to Home' }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{title: 'Welcome to FluintChat'}}
          />
      </Stack.Navigator>
  );
};

export default StackNavigator;
