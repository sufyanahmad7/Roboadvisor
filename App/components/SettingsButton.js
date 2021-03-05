import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../components/AppText"
import TopBanner from "../components/TopBanner"

function SettingsButton({ children, style }) 
{
  return( 
      
        <TouchableOpacity style={[styles.settingsButton, style]}>
            <AppText>{children}</AppText>

        {/* <TouchableOpacity onPress={() => deleteNote(item.id)}>
        <Ionicons name="trash" size={16} color="#944" />
        </TouchableOpacity> */}
        </TouchableOpacity>
      
  
  )
}

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      backgroundColor:"black",
    },
    settingsButton:
    {
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "#ccc",
        height:70,
        backgroundColor:"#F8F4F420",
        borderRadius:5,
        marginTop:10,
        marginHorizontal:10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
})

export default SettingsButton;
