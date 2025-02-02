import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
    const BottomTabs = () => {
        return (
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                // borderTopWidth: 5,
                // borderTopColor: 'rgba(0,0,0,0.3)',
                paddingTop: 10,
                paddingBottom: 10,
                height: 75,
              },
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                headerShown: false,
                tabBarLabelStyle: { color: 'white', fontWeight: 'bold', fontSize: 12},
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <Entypo name="home" size={30} color="white" />
                  ) : (
                    <AntDesign name="home" size={30} color="white" />
                  ),
              }}
            />
            
          </Tab.Navigator>
        );
      };

    };