import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import Users from "../screens/users";
import Post from "../screens/post";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Users"
      >

        <Tab.Screen
          name="Users"
          component={Users}
          options={{
            tabBarLabel: 'Usuários',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="people" size={size} color={color} />
            }
          }} />

        <Tab.Screen
          name="Posts"
          component={Post }
          options={{
            tabBarLabel: 'Posts',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="newspaper" size={size} color={color} />
            }
          }} />

      </Tab.Navigator>

    </NavigationContainer>
  )
}