import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import axios from "axios";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import AppButtonConfirm from "../components/AppButtonConfirm"
import AppButtonCancel from "../components/AppButtonCancel"
import Screen from "../components/Screen";
import { TouchableOpacity } from 'react-native-gesture-handler';

const API = "https://sufyanahmad3.pythonanywhere.com";
const API_CREATEPORTFOLIO = "/createportfolio";

export default function AddPortfolioScreen({ navigation }) 
{
  const [portfolioName, setPortfolioName] = useState("");
  const [riskAppetite, setRiskAppetite] = useState("");
  const [space, setSpace] = useState("");
  const [addFunds, setAddFunds] = useState(0);

  async function addPortfolio() 
  {
    console.log(" ----- Add Portfolio ----- ");
    try 
    {
      const response = await axios.post(API + API_CREATEPORTFOLIO, 
      {
        // Does not have to match the names in SQLite.
        // Left is SQLite column names, right is state variable names.
        portfolioName,
        riskAppetite,
        space,
        addFunds
      });
      console.log("Success adding portfolio!");
      console.log(response);
  
    } 
    catch (error) 
    {
      console.log("Error adding portfolio!");
      console.log(error.response);
      setErrorText(error.response.data.description);
    }
  }

 return (
  <Screen style={{flex:1}}>
  <View style={styles.container}>
   <AppHeader style={{color:"black", fontWeight:"bold", marginBottom:20}}>Add Portfolio</AppHeader>
   
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Name</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            // Displays value from first load.
            value={portfolioName}
            onChangeText={(input) => setPortfolioName(input)}
      />
     </View>
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Risk</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={riskAppetite}
            onChangeText={(input) => setRiskAppetite(input)}
      />
     </View>
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Companies</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={space}
            onChangeText={(input) => setSpace(input)}
      />
     </View>
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Add Funds</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={addFunds}
            onChangeText={(input) => setAddFunds(input)}
      />
     </View>
    
      <View style={styles.buttonContainer}>
        <AppButtonCancel navigation={navigation}><AppText>Cancel</AppText></AppButtonCancel>
        <TouchableOpacity style={styles.button} onPress={addPortfolio}><Text>Confirm</Text></TouchableOpacity>
      </View>
   </View>
   </Screen>
 );
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
    paddingLeft:5,
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


