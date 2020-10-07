import React from 'react'
import { View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 10,
    height: 10
  }
})

export function Shape(): JSX.Element {
  return (
    <View style={style.container}>
      <p>Hello</p>
    </View>
  );
}