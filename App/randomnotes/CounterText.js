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