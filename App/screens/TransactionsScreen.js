import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import TopBanner from "../components/TopBanner";

import AddPortfolioScreen from "../screens/AddPortfolioScreen";
import ViewPortfolioScreen from "../screens/ViewPortfolioScreen";

const API = "https://sufyanahmad3.pythonanywhere.com";
const API_TRANSACTIONS = "/transactions";

// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />
// <MaterialCommunityIcons name="shield-account-outline" size={24} color="yellow" />
// <MaterialCommunityIcons name="medical-bag" size={24} color="yellow" />
// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />
export default function TransactionsScreen() 
{
  const [transactions, setTransactions] = useState([]);

 useEffect(() => 
  {
    loadTransactions();
  }, [])

  async function loadTransactions() 
  {
    console.log(" --- Loading Transactions --- ");
    
    try 
    {
      console.log("First try!");
      const response = await axios.post(API + API_TRANSACTIONS);
      console.log("After Axios");
      console.log("Retrieving transactions!");
      setTransactions(response.data);
      console.log(transactions);

      transactions.map((item) => 
      {
        return {
          actions: item.actions,
          amount: item.amount,
          portfolioid: item.portfolioid,
          portfolioname: item.portfolioname,
          space: item.space,
          transactionid: item.transactionid,
        };
      });

      // console.log(response.data);
      // console.log(response.data.length);
      // console.log(response.data[0].balance);
    } 
    catch (error) 
    {
      console.log("Cannot get transactions!");
      console.log(error.response);
    }
  }
  

// The component that displays all of HomeScreen.
function displayListTransactions({navigation}) 
{
  const renderTransactions = ({ item }) => 
  {
    return (
      <TouchableOpacity>
        <View
          style={{
            padding: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            backgroundColor:"#F8F4F420",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
        
          <View style={{width:"40%",}}>
            <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>{item.portfolioname}</Text>
            <Text style={{color:"white", marginTop:10}}>{item.space}</Text>
          </View>
          <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>{item.actions}</Text>
          </View>
          <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>{item.amount}</Text>
          </View>
          {/* <View>{item.risk}</View> */}

          {/* <TouchableOpacity onPress={() => deleteNote(item.id)}>
            <Ionicons name="trash" size={16} color="#944" />
          </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Screen style={{flex:1}}>
      <View style={styles.container}>
        {/* <TopBanner navigation={navigation}>Transactions</TopBanner> */}
        
        
        <View style={[styles.topBanner]}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
              <AppText style={styles.topBannerText}>Transactions</AppText>
          </View>
        </View>
        
        
        <ScrollView>
          
          <View>
            <AppHeader style={{margin: 10}}>Latest Transactions</AppHeader>
            <View style={styles.flatListHeaders}>
              <View style={{width:"40%"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Portfolio Name</AppText></View>
              <View style={{width:"30%", alignItems:"center"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Actions</AppText></View>
              <View style={{width:"30%", alignItems:"center"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Amount (SGD)</AppText></View>
            </View>

            <View>
              <FlatList
                data={transactions}
                renderItem={renderTransactions}
                keyExtractor={(item) => item.transactionid}
              />
            </View>
            
          </View>    
        </ScrollView>
      </View>
    </Screen>
  );
}

const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsScreen" component={displayListTransactions} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:"black",
  },
  addPortfolioButton:
  {
    flexDirection:"row",
    fontSize:14, 
    justifyContent:"center", 
    marginTop:10
  },
  flatListHeaders:
  {
    flexDirection:"row", 
    justifyContent:"flex-start", 
    marginHorizontal:10, 
    marginBottom:3
  },
  blogPostThumbnail: 
  {
    width: "47.5%",
    height: 110,
    backgroundColor: "#FFFFFF40",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",

  },
  smartcademyItems:
  {
    flexDirection:"row", 
    marginBottom:20,
    marginTop:10,
    marginHorizontal:10, 
    justifyContent:"space-between",
    
  },
  topBanner:
  {
    justifyContent:"center",
    backgroundColor:"#38B6FF50",
    height: 75,
    width: "100%",
  },
  topBannerText:
  {
      fontSize:24, 
      fontWeight:"bold",
      marginLeft:10,
  },
  topBannerHeaders:
  {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop:10,
  },
  topBannerValues:
  {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  titleText: 
  {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  flatList:
  {
    flexDirection:"row",
    color:"white",
  }
});
