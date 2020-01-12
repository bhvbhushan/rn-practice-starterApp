import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const COUNTER_CHANGE_VAL = 10;
const reducer = (state, action) => {
    // state: {counter: number}
    //action: {type: increase || decrease, payload: number}
    return {...state, counter: state.counter + action.payload}
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter:0});

    return <View>
    <Button title = "Increase" onPress = {()=>dispatch({type:'increase', payload: COUNTER_CHANGE_VAL})}/>
    <Button title = "Decrease"onPress = {()=> dispatch({type:'decrease', payload: -COUNTER_CHANGE_VAL})}/>
    <Text>Current Count:</Text>
    <Text>{state.counter}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;