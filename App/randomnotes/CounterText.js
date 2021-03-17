import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CounterText(props)
{
  console.log(props);

  return (
    <Text style={[styles.text,{color: props.color, fontSize: props.fontSize, marginBottom: props.marginBottom, }]}>
        {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  
    text: 
    {
      fontWeight: "bold"
    }
  
});

// export default CounterText;

 {/* <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={{ padding: 10 }}
     >
       <Text style={{ color: "red" }}>Dismiss</Text>
     </TouchableOpacity> */}
     {/* <View style={styles.buttonContainer}>
          
          <TouchableOpacity style={styles.dismissButton}  onPress={() => navigation.goBack()}>
            <AppText>Cancel</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPortfolioButton}>
            <AppText>Add Portfolio</AppText>
          </TouchableOpacity>
      </View> */}

       // for(let i=1; i <= response.data.length; i++)
      // {
      //   console.log(i);
      // }


      // const portfolios = 
// [
//   // {
//   //   portfolioName: item.portfolioName,
//   //   space: item.space,
//   //   // risk: item.risk,
//   //   gains: item.gains,
//   //   balance: item.balance,
//   // },
//   {
//     portfolioName:"Portfolio A",
//     space:"Med-Tech",
//     risk:"Low",
//     gains:"$19000",
//     amount:"$5000",
//   },
//   {
//     portfolioName:"Portfolio B",
//     space:"Insur-Tech",
//     risk:"Low",
//     gains:"$42000",
//     amount:"$2000",
//   },
//   {
//     portfolioName:"Portfolio C",
//     space:"Big Tech - FANG",
//     risk:"Medium",
//     gains:"$900",
//     amount:"$50000",
//   },
//   {
//     portfolioName:"Portfolio D",
//     space:"Construction",
//     risk:"High",
//     gains:"$1100",
//     amount:"$10000",
//   },
// ];