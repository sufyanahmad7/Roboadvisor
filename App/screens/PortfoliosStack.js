import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

const InnerStack = createStackNavigator();

export default function PortfoliosStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Portfolios"
        component={HomeScreen}
        // options={{
        //   title: "Notes, a Todo App",
        //   headerStyle: {
        //     backgroundColor: "yellow",
        //     height: 100,
        //     shadowColor: "black",
        //     shadowOpacity: 0.2,
        //     shadowRadius: 5,
        //   },
        //   headerTintColor: "#f55",
        //   headerTitleStyle: {
        //     fontSize: 24,
        //     fontWeight: "bold",
        //   },
        // }}
      />
    </InnerStack.Navigator>
  );
}