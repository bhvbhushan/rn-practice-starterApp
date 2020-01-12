import React, {useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorChanger from "../components/ColorChanger";

const COL_VAL_CHANGER = 10;

const reducer = (state, action) => {
    // state === {red: number, blue: number, green: number}
    //action === {colorToChange:'red'||'blue'||'green', amount: +COL_VAL_CHANGER || -COL_VAL_CHANGER};

    // for action the convention that is followed is {type: 'change_red'||'change_blue'||'change_green', payload: COL_VAL_CHANGER}

    switch(action.colorToChange){
        case 'red':
            return state.red +action.amount > 255 || state.red + action.amount < 0
            ? state
            : {...state, red: state.red + action.amount};
        case 'green':
            return state.green +action.amount > 255 || state.green + action.amount < 0
            ? state
            : {...state, green: state.green + action.amount};
        case 'blue':
            return state.blue +action.amount > 255 || state.blue + action.amount < 0
            ? state
            : {...state, blue: state.blue + action.amount};
        default:
            return state;
    }

}

const SquareScreen = () => {
   
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red, green, blue } = state;

    
    return <View>
        <ColorChanger 
            onIncrease={()=> dispatch({colorToChange:'red', amount: COL_VAL_CHANGER})} 
            onDecrease={()=> dispatch({colorToChange:'red', amount: -COL_VAL_CHANGER})}
            colName="Red" />
        <ColorChanger 
            onIncrease={()=> dispatch({colorToChange:'green', amount: COL_VAL_CHANGER})} 
            onDecrease={()=> dispatch({colorToChange:'green', amount: -COL_VAL_CHANGER})} 
            colName="Green" />
        <ColorChanger 
            onIncrease={()=> dispatch({colorToChange:'blue', amount: COL_VAL_CHANGER})} 
            onDecrease={()=> dispatch({colorToChange:'blue', amount: -COL_VAL_CHANGER})}
            colName="Blue" />

            <View style={{height:100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;