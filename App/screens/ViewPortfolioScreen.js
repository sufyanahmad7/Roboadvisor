import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import TopBanner from "../components/TopBanner";

export default function ViewPortfolioScreen({route, navigation})
{
  // Destructuring this so that we don't have to type route.params.portfolioName and etc.
  const {portfolioname, space, risk_appetite, gains, balance} = route.params;

  const [modal, setModal] = useState(false);

  function addFunds({navigation})
  {
    setModal(true);
    console.log("Add Funds pressed");
    navigation.navigate("AddFundsScreen");
  }

  function withdrawFunds({navigation})
  {
    setModal(true);
    console.log("Add Funds pressed");
    navigation.navigate("WithdrawFundsScreen");
  }

  return(
    <Screen style={{flex:1}}>
      <View style={styles.container}>
        <TopBanner navigation={navigation}>{portfolioname}</TopBanner>
        <View style={styles.portfolioDetails}>
          <View>
            <AppHeader style={{color:"white", fontWeight:"bold"}}>{space}</AppHeader>
            <View>
              <AppText style={{ marginTop:15}}>Risk: {risk_appetite}</AppText>
              <AppText style={{ marginTop:15}}>Gains: {gains}</AppText>
            </View>
          </View>
          <View style={{flexDirection:"column-reverse"}}>
            <AppText style={{fontSize:20, fontWeight:"bold"}}>Balance: {balance}</AppText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addFundsButton} onPress={() => addFunds({navigation})}>
            <AppText>Add Funds</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdrawFundsButton} onPress={() => withdrawFunds({navigation})}>
            <AppText>Withdraw Funds</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )

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
    flexDirection:"row",
    justifyContent:"space-between",
  },
  addFundsButton:
  {
    width:160,
    height:80,
    // margin:10,
    padding:10,
    borderRadius:5,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#78FF3855"
  },
  withdrawFundsButton:
  {
    width:160,
    height:80,
    // margin:10,
    padding:10,
    borderRadius:5,
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FF383855"
  },
  portfolioDetails:
  {
    height:"30%",
    borderRadius:5,
    marginTop:"5%",
    marginHorizontal:10,
    padding: 10,
    backgroundColor:"#F8F4F420",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});

// export default ViewPortfolioScreen;