import React, {useState} from 'react';
import { View, StyleSheet,TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';;

import AppHeader from "./AppHeader";
import AppText from "./AppText";
import Screen from "./Screen";
import AppButtonConfirm from "../components/AppButtonConfirm"
import AppButtonCancel from "../components/AppButtonCancel"

const API = "https://sufyanahmad3.pythonanywhere.com";
const API_ADDFUNDS = "/portfolio/";

export default function AddWithdrawFundsView({ portfolioid, navigation, addFunds}) 
{
  // const portfolioid = route.params;
  
  const [resultText, setResultText] = useState("");
  const [portfolioID, setPortfolioID] = useState(portfolioid);

  async function add() 
  {
    console.log("Something");
    console.log(portfolioid);
    try 
    {
      console.log(" ----- Add Funds in Progress ----- ");
      console.log(portfolioid);
      // Portfolio ID has to be stored in a variable
      const response = await axios.put(API + API_ADDFUNDS, 
      {
        // Does not have to match the names in SQLite.
        // Left is SQLite column names, right is state variable names.
        Add
      });
      console.log("Success adding funds!");
      console.log(response);
  
    } 
    catch (error) 
    {
      // console.log("Error adding funds!");
      // console.log(error.response);
      // setErrorText(error.response.data.description);
    }
  }

  // async function withdraw() 
  // {
    
  //   try 
  //   {
  //     console.log(" ----- Withdraw Funds ----- ");
  //     // const response = await axios.put(API + API_ADDFUNDS, 
  //     // {
  //     //   // Does not have to match the names in SQLite.
  //     //   // Left is SQLite column names, right is state variable names.
  //     //   balance
  //     // });
  //     // console.log("Success adding funds!");
  //     // console.log(response);
  
  //   } 
  //   catch (error) 
  //   {
  //     // console.log("Error adding funds!");
  //     // console.log(error.response);
  //     // setErrorText(error.response.data.description);
  //   }
  // }

 return (
  <Screen style={{flex:1}}>
  <View style={styles.container}>
   <AppHeader style={{color:"black", marginBottom:20}}>
     {addFunds ? "Add Funds" : "Withdraw Funds"}
   </AppHeader>
   
     <View style={styles.textInputGroup}>
     <AppText style={styles.labels}>Amount</AppText>
      <TextInput
            style={styles.input}
            autoCapitalize="none"
            // value={password}
            // onChangeText={(input) => setPassword(input)}
      />
     </View>

      {/* Function to execute when add/withdraw funds. */}
      <View style={styles.buttonContainer}>
        <AppButtonCancel navigation={navigation}><AppText>Cancel</AppText></AppButtonCancel>
        <AppButtonConfirm><AppText>Confirm</AppText></AppButtonConfirm>
        <AppButtonConfirm onPress={ addFunds ? add : withdraw }><AppText>Confirm</AppText></AppButtonConfirm>
       
      </View>


      <View>
        {/* <TouchableOpacity style={styles.toggleScreensButton} onPress={() => navigation.navigate("WithdrawFundsScreen")}> */}
        <TouchableOpacity style={styles.toggleScreensButton} onPress={ addFunds ? add : withdraw }>
          <Text>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleScreensButton} onPress={() => navigation.navigate(addFunds ? "WithdrawFundsScreen" : "AddFundsScreen")}>
          <AppText style={{color:"dodgerblue"}}>
            {addFunds ? "Withdraw Funds instead" : "Add Funds instead"}
          </AppText>
        </TouchableOpacity>
        
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
  toggleScreensButton:
  {
    width:200,
    height:40,
    marginTop:10,
    padding:10,
    borderRadius:5,
    // backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"dodgerblue",
  },
})
