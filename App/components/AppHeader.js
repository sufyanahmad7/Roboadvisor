import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppHeader({ children, style }) 
{
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    // fontFamily: "Helvetica",
    color: "white",
  },
});

export default AppHeader;
