import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const ColorChanger = ({colName, onIncrease, onDecrease}) => {
    return <View>
    <Text>{colName}</Text>
    <Button title={`More ${colName}`} onPress={()=>onIncrease()}/>
    <Button title={`Less ${colName}`} onPress={()=>onDecrease()}/>
    </View>
}

const styles = StyleSheet.create({})

export default ColorChanger;