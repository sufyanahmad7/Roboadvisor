import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

function AppButtonCancel({ children, style, navigation }) 
{
  return <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.goBack()}>{children}</TouchableOpacity>;
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
    backgroundColor:"#00000050"
  },
});

export default AppButtonCancel;
