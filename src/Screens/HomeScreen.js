import * as React from "react"
import { View , Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import c from '../utils/APP_CONSTANTS';
import HomeTab from "../components/home/HomeTab"


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>In Progress!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }) {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: c.colors.lime,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarItemStyle: {
        //         borderTopWidth: 0,
        //         borderBottomWidth: 4,
        //         borderBottomColor: c.colors.lime,
        //         borderRadius: 2,
        //         marginRight : 2
        //       }
      })}>
      <Tab.Screen name="Home"  >
       {(props) => <HomeTab {...props} extraData={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Search" component={SettingsScreen} />
      <Tab.Screen name="Saved" component={SettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
