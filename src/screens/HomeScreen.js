import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log('Hola',props.navigation);
  return (
    <View>
      <Text style={styles.text}> Hi There!!!!!!!! </Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate('Components')}
        style = {styles.buttonSpacing}
      />
      <Button
        title="Go To List Demoo"
        onPress={() => navigation.navigate('Lists')}
        
      />
      <Button
        title="Go To Image Screen"
        onPress={() => navigation.navigate('ImageScreen')}
        
      />
      <Button
        title="Go To Counter Screen"
        onPress={() => navigation.navigate('CounterScreen')}
        
      />
      
      <Button
        title="Go To Color Screen"
        onPress={() => navigation.navigate('ColorScreen')}
        
      />

      <Button
        title="Go To Square Screen"
        onPress={() => navigation.navigate('SquareScreen')}
        
      />
      
      <Button
      title="Go To Text Screen"
      onPress={() => navigation.navigate('TextScreen')}
      
    />
    <Button
      title="Go To Box Screen"
      onPress={() => navigation.navigate('BoxScreen')}
      
    />
      <TouchableOpacity
      onPress={() =>  props.navigation.navigate('Lists')}
      >
      <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },

  buttonSpacing: {
    marginBottom: 20
  }
});

export default HomeScreen;
