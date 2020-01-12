import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const name = 'bhayva'
    const greeting = <Text style={styles.subHeaderStyle}>My Name is {name}!!!</Text>


    return (
        <View>
    <Text style = { styles.textStyle } > Getting Started with React Native!!! </Text>
    {greeting}
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;