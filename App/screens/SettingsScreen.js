import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import TopBanner from "../components/TopBanner";

import AddPortfolioScreen from "../screens/AddPortfolioScreen";
import ViewPortfolioScreen from "../screens/ViewPortfolioScreen";
import SettingsButton from "../components/SettingsButton";

// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />
// <MaterialCommunityIcons name="shield-account-outline" size={24} color="yellow" />
// <MaterialCommunityIcons name="medical-bag" size={24} color="yellow" />
// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />

// The component that displays all of HomeScreen.
function displayListPortfolios({navigation}) 
{
  
  

  return (
    <Screen style={{flex:1}}>
      <View style={styles.container}>
        <TopBanner>Settings</TopBanner>
        <View style={{flexDirection:"column", margin:20}}>
          <SettingsButton>Edit Profile</SettingsButton>
          <SettingsButton style={{margin:50, backgroundColor:"#FF383855"}}>Delete Account</SettingsButton>
        </View>
      </View>
        
        
      
    </Screen>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() 
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={displayListPortfolios} options={{headerShown: false}} />
      {/* <Stack.Screen name="ViewPortfolioScreen" component={ViewPortfolioScreen} options={{headerShown:false}} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor:"black",
  },
  buttonContainer:
  {
    marginTop:"5%",
    marginHorizontal:10,
    flexDirection:"column",
    alignItems:"center",
    
  },
  editProfileButton:
  {
    // width:160,
    // height:80,
    // // margin:10,
    // padding:10,
    // borderRadius:5,
    // backgroundColor:"blue",
    // justifyContent:"center",
    // alignItems:"center",
    // backgroundColor:"#78FF3855"
  },
  deleteAccountButton:
  {
    // width:160,
    // height:80,
    // // margin:10,
    // padding:10,
    // borderRadius:5,
    // backgroundColor:"green",
    // justifyContent:"center",
    // alignItems:"center",
    // backgroundColor:"#FF383855",
  },
})
