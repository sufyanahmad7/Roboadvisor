import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) 
{
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "white",
  },
});

export default AppText;
