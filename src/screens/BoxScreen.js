import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}> Box Screen-#1</Text>
      <Text style={styles.textTwoStyle}> Box Screen-#2</Text>
      <Text style={styles.textThreeStyle}> Box Screen-#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: 'space-between',
    // alignItems: "space-around"
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 100,
    width: 100
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    // flex:3,
    alignSelf: 'flex-start',
    // position:'absolute',
    marginTop:100,
    // top: 100,
    // left: 120,
    height: 100,
    width: 100
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 100,
    width: 100
  }
});

export default BoxScreen;
