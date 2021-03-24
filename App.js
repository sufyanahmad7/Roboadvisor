import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./App/screens/HomeScreen";
import TransactionsScreen from "./App/screens/TransactionsScreen";
import SettingsScreen from "./App/screens/SettingsScreen"

// Ignore all warnings.
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs(true)

const Tab = createBottomTabNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <Tab.Navigator 
        mode="modal"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => 
          {
            let iconName;

            if (route.name === 'Home') 
            {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            else if (route.name === 'Transactions') 
            {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (route.name === 'Settings') 
            {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Can return any component here.
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'gold',
          inactiveTintColor: 'gray',
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "black",
          style:{
            borderTopWidth:1,
            borderTopColor:'#00000099'
        },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

{/* <Ionicons name="home" size={24} color="black" />
<Ionicons name="home-outline" size={24} color="black" />

<Ionicons name="list" size={24} color="black" />
<Ionicons name="list" size={24} color="white" />

<Ionicons name="settings" size={24} color="black" />
<Ionicons name="settings-outline" size={24} color="black" /> */}