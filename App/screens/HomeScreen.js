import React, {useState} from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';

import AppText from "../components/AppText";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import TopBanner from "../components/TopBanner";

import AddPortfolioScreen from "../screens/AddPortfolioScreen";
import ViewPortfolioScreen from "../screens/ViewPortfolioScreen";
import AddFundsScreen from "../screens/AddFundsScreen";
import WithdrawFundsScreen from "../screens/WithdrawFundsScreen";
import { useScrollToTop } from "@react-navigation/native";

// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />
// <MaterialCommunityIcons name="shield-account-outline" size={24} color="yellow" />
// <MaterialCommunityIcons name="medical-bag" size={24} color="yellow" />
// <MaterialCommunityIcons name="excavator" size={24} color="yellow" />

const portfolios = 
[
  {
    portfolioName:"Portfolio A",
    space:"Med-Tech",
    risk:"Low",
    gains:"$19000",
    amount:"$5000",
  },
  {
    portfolioName:"Portfolio B",
    space:"Insur-Tech",
    risk:"Low",
    gains:"$42000",
    amount:"$2000",
  },
  {
    portfolioName:"Portfolio C",
    space:"Big Tech - FANG",
    risk:"Medium",
    gains:"$900",
    amount:"$50000",
  },
  {
    portfolioName:"Portfolio D",
    space:"Construction",
    risk:"High",
    gains:"$1100",
    amount:"$10000",
  },
];

export default function HomeScreen({navigation}) 
{
  const [modal, setModal] = useState(false);

  const portfoliosAsObjects = portfolios.map((item) => 
  {
    return {
      portfolioName: item.portfolioName,
      space: item.space,
      risk: item.risk,
      gains: item.gains,
      amount: item.amount,
    };
  });

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
            <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>{item.portfolioName}</Text>
            <Text style={{color:"white", marginTop:10}}>{item.space}</Text>
          </View>
          <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>{item.gains}</Text>
          </View>
          <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>{item.amount}</Text>
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
              <AppText style={{fontSize:24, fontWeight:"bold"}}>$63000</AppText>
              <AppText style={{fontSize:24, fontWeight:"bold"}}>$10000</AppText>
            </View>
          </View>
          <View>
            <AppHeader style={{margin: 10}}>My Portfolios</AppHeader>
            <View style={styles.flatListHeaders}>
              <View style={{width:"40%"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Portfolio Name</AppText></View>
              <View style={{width:"30%", alignItems:"center"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Gains</AppText></View>
              <View style={{width:"30%", alignItems:"center"}}><AppText style={{color: "#F8F4F480", fontSize:14}}>Amount (SGD)</AppText></View>
            </View>

            <View>
              <FlatList
                data={portfoliosAsObjects}
                renderItem={renderPortfolios}
                keyExtractor={(item) => item.name}
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
    backgroundColor:"#38B6FF50",
    height: "12%",
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


