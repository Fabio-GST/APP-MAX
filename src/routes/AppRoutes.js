import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'



import Home from '../pages/Home';
import Treinamento from '../pages/Treinamento';
import Site from '../pages/Site';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeButton from '../components/HomeButton';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#7300d8',
            tabBarStyle: {
              height: 90,
              paddingBottom: 25,
              
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,

              elevation: 24,
              
            }
        }}
      >

        <Tab.Screen name='Treinamento' component={Treinamento}
          options={{
            headerShown:false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="video-library" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name='Home' component={Home} 
          options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ size, color, focused }) => (
              <HomeButton color={color} size={size} focused={focused} />
            )
          }}
        />

        <Tab.Screen name='Site' component={Site}
          options={{
            headerShown:false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="web" size={size} color={color} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}