import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function AddPortfolioScreen({ navigation }) 
{
 return (
   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Text>This is the add screen</Text>
     <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={{ padding: 10 }}
     >
       <Text style={{ color: "orange" }}>Dismiss</Text>
     </TouchableOpacity>
   </View>
 );
}


