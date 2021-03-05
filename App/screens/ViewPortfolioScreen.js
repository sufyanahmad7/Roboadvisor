import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";

import TopBanner from "../components/TopBanner";
import { TouchableOpacity } from 'react-native-gesture-handler';

// function ViewPortfolioScreen({route}) 
// {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>ViewPortfolioScreen</Text>
//       </View>
//     );
// }


function ViewPortfolioScreen({route})
{
  // Destructuring this so that we don't have to type route.params.red etc.
  const {portfolioName, space, risk, gains, amount} = route.params;

  // const total = portfolioName + space + amount;

  return(
    <Screen style={{flex:1}}>
      <View style={styles.container}>
        <TopBanner>{portfolioName}</TopBanner>
        <View style={styles.portfolioDetails}>
          <View>
            <AppHeader style={{color:"white", fontWeight:"bold"}}>{space}</AppHeader>
            <View>
              <AppText style={{ marginTop:15}}>Risk: {risk}</AppText>
              <AppText style={{ marginTop:15}}>Gains: {gains}</AppText>
            </View>
          </View>
          <View style={{flexDirection:"column-reverse"}}>
            <AppText style={{fontWeight:"bold"}}>Balance: {amount}</AppText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addFundsButton}>
            <AppText>Add Funds</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdrawFundsButton}>
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

export default ViewPortfolioScreen;