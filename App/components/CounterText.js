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