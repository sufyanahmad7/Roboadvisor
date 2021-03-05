
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Tooltip } from 'react-native-elements';

import CounterText from "./App/components/CounterText";

export default function App() 
{
  const [counter, setCounter] = useState(0);
  const [encouragingText, setEncouragingText] = useState("");

  function buttonPressed()
  {
    console.log("You pressed me");
    setCounter(counter + 1);
  }

  function keepGoing()
  {
    if (counter === 3)
    {
      // console.log(`You pressed ${counter}x. Keep going!`)
      console.log(`You pressed ${counter}x. Keep going!`);
      // setEncouragingText("You pressed 3x. Keep going!");
      return "Keep going";
    }
    if (counter === 5)
    {
      console.log(`You pressed ${counter}x. Faster!`);
      return "Faster lehh";
    }
    // return "Keep going!";
  }

  function buttonReset()
  {
    console.log
    setCounter(0);
    console.log(`You pressed me when counter is ${counter}`);
    alert("Reset liao!")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Clicker Game</Text>
      <Text style={styles.subTitle}>Hello There. Start by pressing to 5</Text>
      
      <TouchableOpacity style={styles.pressMe} onPress={buttonPressed}><Text>Press Me!</Text></TouchableOpacity>
      <CounterText color="lightgreen" fontSize={20} marginBottom={30} >{counter}</CounterText>
      <CounterText color="red" fontSize={60} marginBottom={20}>{counter}</CounterText>
      <CounterText color="gold" fontSize={100}>{counter}</CounterText>
      <Text style={styles.encouragingText}>{keepGoing()}</Text>
      <Button title="Reset Me" onPress={buttonReset}>Reset Me!</Button>

      <Tooltip popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:
  {
    fontSize: 30,
    color: "dodgerblue",
    fontWeight: "bold",
  },
  subTitle:
  {
    fontSize: 18,
    fontStyle: "italic",
    marginTop: 15,
  },
  // CounterText:
  // {
  //   fontSize: 14,
  //   color: "green",
  //   marginBottom: 20,
  // },
  encouragingText:
  {
    fontWeight: "bold",
  },
  pressMe:
  {
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
  }
});
