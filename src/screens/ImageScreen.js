import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    const imgDir = '../../assets/images'
    return <View>
    <ImageDetail title="Forest" image={require(`${imgDir}/forest.jpg`)} score="8"/>
    <ImageDetail title="Beach" image={require(`${imgDir}/beach.jpg`)} score="10"/>
    <ImageDetail title="Mountain" image={require(`${imgDir}/mountain.jpg`)} score="3"/>
    <ImageDetail title="Forest-2" image={require(`${imgDir}/forest.jpg`)} score="6"/>
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen;