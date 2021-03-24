import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, Touchable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";

import AddPortfolioScreen from "../screens/AddPortfolioScreen";
import ViewPortfolioScreen from "../screens/ViewPortfolioScreen";
import AddFundsScreen from "../screens/AddFundsScreen";
import WithdrawFundsScreen from "../screens/WithdrawFundsScreen";

const API = "https://sufyanahmad3.pythonanywhere.com";
const API_PORTFOLIOS = "/portfolios";

// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />
// <MaterialCommunityIcons name="shield-account-outline" size={24} color="yellow" />
// <MaterialCommunityIcons name="medical-bag" size={24} color="yellow" />

export default function HomeScreen({navigation}) 
{
  const [modal, setModal] = useState(false);
  // To store all the portfolios for loading into flatlist.
  const [portfolios, setPortfolios] = useState([]);
  // To store the total amount of all portfolios and display in
  const [totalBalance, setTotalBalance] = useState(0);

  const Rectangle = () => 
  {
    return (
      <View style={styles.blogPostThumbnail}>
        <AppText style={{fontSize:15}}>Blog Post Thumbnail</AppText>
      </View>
    );
  };

  function addPortfolio({navigation})
  {
    setModal(true);
    console.log("Add Portfolio pressed");
    navigation.navigate("AddPortfolioScreen");
  }

  function viewPortfolio({navigation}, item)
  {
    setModal(false);
    console.log("View portfolio pressed");
    navigation.navigate("ViewPortfolioScreen", item);
  }

  useEffect(() => 
  {
    loadTotalBalance(); loadPortfolios(); 
  }, [])
  

  async function loadTotalBalance() 
  {
    console.log(" --- Loading Total Balance --- ");
    try 
    {
      const response = await axios.post(API + API_PORTFOLIOS);
      console.log("Loading total balance!");
    
      let total = 0;
      response.data.map( (item) => { total += item.balance });
      console.log(total);
      setTotalBalance(total);
      // console.log(response.data);
      // console.log(response.data.length);
      

    } 
    catch (error) 
    {
      console.log("Cannot get sum of balances!");
      console.log(error.response);
    }
  }

  // useEffect(() => 
  // {
  //   loadPortfolios();
  // })

  async function loadPortfolios() 
  {
    console.log(" --- Loading Portfolios --- ");
    try 
    {
      const response = await axios.post(API + API_PORTFOLIOS);
      console.log("Retrieving portfolios!");
      setPortfolios(response.data);
      // console.log(portfolios);

      portfolios.map((item) => 
      {
        return {
          portfolioid: item.portfolioid,
          portfolioname: item.portfolioname,
          space: item.space,
          risk_appetite: item.risk_appetite,
          gains: item.gains,
          balance: item.balance,
        };
      });
      // console.log(response.data);
      // console.log(response.data.length);
      // console.log(response.data[0].balance);
    } 
    catch (error) 
    {
      console.log("Cannot get portfolios!");
      console.log(error.response);
    }
    // return portfoliosAsObjects;
  }
  

// This component displays all of HomeScreen.
  function displayListPortfolios({navigation}) 
  {
  const renderPortfolios = ({ item }) => 
  {
    return (
      // The blanked out code below simply navigates to the page with the item object.
      // <TouchableOpacity onPress={() => navigation.navigate("ViewPortfolioScreen", {...item})}>

      // THe code below differs from the above coz we're calling the function AND sending both navigation and item parameters to the next screen.
      <TouchableOpacity onPress={() => viewPortfolio({navigation}, {...item})}>
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
            {/* <Text style={{color:"white", marginTop:10}}>{item.portfolioid}{item.space}</Text> */}
            <Text style={{color:"white", marginTop:10}}>{item.space}</Text>
          </View>
          <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>{item.gains}</Text>
          </View>
          <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>{item.balance}</Text>
          </View>

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
        
        <ScrollView>
          <View style={styles.topBanner}>
            <View style={styles.topBannerHeaders}>
              <AppText style={{color: "#F8F4F480"}}>Total Gains</AppText>
              <AppText style={{color: "#F8F4F480"}}>Total Net Worth</AppText>
            </View>
            <View style={styles.topBannerValues}>
              <AppText style={{fontSize:24, fontWeight:"bold"}}>$0</AppText>
              <AppText style={{fontSize:24, fontWeight:"bold"}}>${totalBalance}</AppText>
            </View>
          </View>
          
          <View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <AppHeader style={{margin: 10}}>My Portfolios (SGD)</AppHeader>
              <TouchableOpacity onPress={loadPortfolios}>
                <AppText style={{marginRight: 10, marginTop: 12.5, color:"dodgerblue"}}>Refresh</AppText>
              </TouchableOpacity>
            </View>
            <View style={styles.flatListHeaders}>
              <View style={{width:"40%"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Portfolio Name</AppText></View>
              <View style={{width:"30%", alignItems:"center"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Gains</AppText></View>
              <View style={{width:"30%", alignItems:"center"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Amount</AppText></View>
            </View>

            <View>
              <FlatList
                data={portfolios}
                renderItem={renderPortfolios}
                keyExtractor={(item) => item.portfolioid}
              />
            </View>

            <TouchableOpacity style={styles.addPortfolioButton}  onPress={() => addPortfolio({navigation})}>
              <AppText style={{fontSize:14}}>Add Portfolio</AppText>
            </TouchableOpacity>
            
          
            <View style={{borderBottomColor:'#F8F4F450', borderBottomWidth:1, marginTop:15}} />
            
            <AppHeader style={{margin: 10}}>Smartcademy</AppHeader>
            
            <View style={styles.smartcademyItems}>
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </View>         
            
          </View>    
        </ScrollView>
      </View>
    </Screen>
  );
  }

const Stack = createStackNavigator();

return (
  <Stack.Navigator mode={modal ? "modal" : "card"}>
    <Stack.Screen name="Home" component={displayListPortfolios} options={{headerShown: false}} style={{flex:1}} />
    <Stack.Screen name="ViewPortfolioScreen" component={ViewPortfolioScreen} options={{headerShown:false}} />
    <Stack.Screen name="AddPortfolioScreen" component={AddPortfolioScreen} options={{headerShown:false}} />
    <Stack.Screen name="AddFundsScreen" component={AddFundsScreen} options={{headerShown:false}} />
    <Stack.Screen name="WithdrawFundsScreen" component={WithdrawFundsScreen} options={{headerShown:false}} />
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
    width: "96%",
    height: 110,
    backgroundColor: "#FFFFFF40",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10,
  },
  smartcademyItems:
  {
    flexDirection:"column",
    alignItems:"center", 
    // marginBottom:20,
    marginTop:10,
    marginHorizontal:10, 
    justifyContent:"space-between",
    
  },
  topBanner:
  {
    backgroundColor:"#38B6FF50",
    height: 75,
    width: "100%",
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


