import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {

    const[colArr, updateColorArr] = useState([])
    

    return <View>
    <Button
     title="Add Color"
      onPress={
          ()=> updateColorArr([...colArr, randrgb()])
        }/>

    <FlatList 
    keyExtractor = {(item) => item}
    data = {colArr}
    renderItem = {({item})=>{
        console.log(item)
        return <View style={{height:100, width: 100, backgroundColor: item}}/>
    }}
    />
    
    </View>
}

const randrgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen