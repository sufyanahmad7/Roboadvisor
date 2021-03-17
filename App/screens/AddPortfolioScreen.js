import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import axios from "axios";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import AppButtonConfirm from "../components/AppButtonConfirm"
import AppButtonCancel from "../components/AppButtonCancel"
import Screen from "../components/Screen";

const API = "https://sufyanahmad3.pythonanywhere.com";
const API_CREATEPORTFOLIO = "/createportfolio";

export default function AddPortfolioScreen({ navigation }) 
{
  

 return (
  <Screen style={{flex:1}}>
  <View style={styles.container}>
   <AppHeader style={{color:"black", fontWeight:"bold", marginBottom:20}}>Add Portfolio</AppHeader>
   
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Name</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            // value={password}
            // onChangeText={(input) => setPassword(input)}
      />
     </View>
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Risk</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            // value={password}
            // onChangeText={(input) => setPassword(input)}
      />
     </View>
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Companies</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            // value={password}
            // onChangeText={(input) => setPassword(input)}
      />
     </View>
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Add Funds</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            // value={password}
            // onChangeText={(input) => setPassword(input)}
      />
     </View>
    
      <View style={styles.buttonContainer}>
        <AppButtonCancel navigation={navigation}><AppText>Cancel</AppText></AppButtonCancel>
        <AppButtonConfirm><AppText>Confirm</AppText></AppButtonConfirm>
      </View>
   </View>
   </Screen>
 );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor:"#ffffff10",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    height: 36,
    width: "60%",
    fontSize: 18,
    backgroundColor: "white",
  },
  labels:
  {
    color:"black",
  },
  textInputGroup:
  {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    
    marginBottom: 24,
    padding: 4,
    width:"90%",
  },
  buttonContainer:
  {
    marginTop:"5%",
    marginHorizontal:10,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%",
  },
})


