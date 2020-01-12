import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorChanger from "../components/ColorChanger";

const COL_VAL_CHANGER = 10;

const SquareScreen = () => {
    const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === red, blue, green
        //change === +COL_VAL_CHANGER, -COL_VAL_CHANGER
        // console.log(color, change)
        if (color + change > 255 || color + change < 0 ) {
            return;
        } else {
            switch(color){
                case red:
                    setRed(color+change)
                    break;
                case green:
                    setGreen(color+change)
                case blue:
                    setBlue(color+change)
                default:
                    break;
            }
            
        }

    }
    return <View>
        <ColorChanger 
            onIncrease={()=> setColor(red, +COL_VAL_CHANGER)} 
            onDecrease={()=> setColor(red, -COL_VAL_CHANGER)}
            colName="Red" />
        <ColorChanger 
            onIncrease={()=> setColor(green, +COL_VAL_CHANGER)} 
            onDecrease={()=> setColor(green, -COL_VAL_CHANGER)} 
            colName="Green" />
        <ColorChanger 
            onIncrease={()=> setColor(blue, +COL_VAL_CHANGER)} 
            onDecrease={()=> setColor(blue, -COL_VAL_CHANGER)}
            colName="Blue" />

            <View style={{height:100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;