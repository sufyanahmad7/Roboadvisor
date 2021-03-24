import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import SettingsButton from "../components/SettingsButton";

function displaySettings({navigation}) 
{
  return (
    <Screen style={{flex:1}}>
      <View style={styles.container}>
      <View style={[styles.topBanner]}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <AppText style={styles.topBannerText}>Settings</AppText>
        </View>
      </View>
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
      <Stack.Screen name="SettingsScreen" component={displaySettings} options={{headerShown: false}} />
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
  topBanner:
  {
    justifyContent:"center",
    backgroundColor:"#38B6FF50",
    height: 75,
    width: "100%",
  },
  topBannerText:
  {
      fontSize:24, 
      fontWeight:"bold",
      marginLeft:10,
  },
})
