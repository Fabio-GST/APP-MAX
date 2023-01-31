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
            height: 300
        }}
      >

        <Tab.Screen name='Treinamento' component={Treinamento}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="video-library" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name='Home' component={Home} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color, focused }) => (
              <HomeButton color={color} size={size} focused={focused} />
            )
          }}
        />

        <Tab.Screen name='Site' component={Site}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="web" size={size} color={color} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}