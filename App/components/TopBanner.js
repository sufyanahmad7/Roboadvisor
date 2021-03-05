import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import AppHeader from "../components/AppHeader";
import AppText from "./AppText";

import { Ionicons } from "@expo/vector-icons";

function TopBanner({ children, style, navigation }) 
{
  return(
    <View style={[styles.topBanner, style]}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <AppText style={styles.text}>{children}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topBanner:
    {
    //   backgroundColor:'#8438FF50',
    //   backgroundColor:'#yellow',
      backgroundColor:"#38B6FF50",
      height: "12%",
      width: "100%",
      justifyContent:"center",
    },
    text:
    {
        fontSize:24, 
        fontWeight:"bold",
        marginLeft:10,
    },
});

export default TopBanner;
