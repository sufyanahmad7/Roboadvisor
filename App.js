import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from "./App/screens/HomeScreen";
import AddPortfolioScreen from "./App/screens/AddPortfolioScreen"
import TransactionsScreen from "./App/screens/TransactionsScreen";
import SettingsScreen from "./App/screens/SettingsScreen"
import PortfoliosStack from "./App/screens/PortfoliosStack"
import { createStackNavigator } from '@react-navigation/stack';
import ViewPortfolioScreen from "./App/screens/ViewPortfolioScreen"


const Stack = createStackNavigator();
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "black",

        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        {/* <Stack.Screen name="ViewPortfolios" component={ViewPortfolioScreen} /> */}
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="ViewPortfolios" component={ViewPortfolioScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>

    
  );
}

{/* <Ionicons name="home" size={24} color="black" />
<Ionicons name="home-outline" size={24} color="black" />

<Ionicons name="list" size={24} color="black" />
<Ionicons name="list" size={24} color="white" />

<Ionicons name="settings" size={24} color="black" />
<Ionicons name="settings-outline" size={24} color="black" /> */}