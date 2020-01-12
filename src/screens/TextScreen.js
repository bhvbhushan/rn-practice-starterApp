import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
// iOS first text automatic capitalizes, autocorrect functionality

const TextScreen = () => {

    const [name, setName] = useState('')

    return <View>
    <Text>Enter Password:</Text>
    <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
    />
    {name.length>5 ? <Text>My Password is {name}</Text> : <Text>Your password is less the 5 characters</Text>}
    </View>
}

const styles = StyleSheet.create({
    input : {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});


export default TextScreen;