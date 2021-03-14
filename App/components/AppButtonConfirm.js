import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

function AppButtonConfirm({ children, style }) 
{
  return <TouchableOpacity style={[styles.button, style]}>{children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: 
  {
    width:150,
    height:70,
    margin:10,
    padding:10,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#03920090",
  },
});

export default AppButtonConfirm;
