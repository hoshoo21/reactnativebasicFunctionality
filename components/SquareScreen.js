import React, {useState, useReducer} from "react";
import {View, StyleSheet, Text} from 'react-native';
import ColorAdjuster from "./resuablecomponents/ColorAdjuster";

const reducer = (state, action)=>{
        switch (action.type){
            case "change_red":
               return state.red + action.amount > 255  || state.red + action.payload <= 0?
                    state:
                   { ...state, red:state.red + action.payload};
              
            case "change_green":
                return state.green + action.amount > 255  || state.green + action.payload <= 0?
                state:    
                 {...state, green:state.green+ action.payload};
              
                break;
            case "change_blue":
                return state.blue + action.amount >= 255  || state.blue + action.payload <= 0?
                state :
                {...state, blue:state.blue+ action.payload};
       
            default:
                return state; 


        }
}
const SquareScreen =(props) =>{

    const COLOR_INCREMENTER = 15;
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red,green, blue} = state;
    const handleIncreaseRed =()=>{
         dispatch({type:'change_red', payload :COLOR_INCREMENTER})
    }
    const handleDecreaseRed =()=>{
        dispatch({type:'change_red', payload : -1*COLOR_INCREMENTER})
 
    }
    
    const handleIncreaseBlue =()=>{
        dispatch({type:'change_blue', payload :COLOR_INCREMENTER})
   
        console.log(blue);
    }
    const handleDecreaseBlue =()=>{
        dispatch({type:'change_blue', payload :-1*COLOR_INCREMENTER})
   
        console.log(blue);
    }
    
    const handleIncreaseGreen =()=>{
        dispatch({type:'change_green', payload :COLOR_INCREMENTER})
   
    }
    const handleDecreaseGreen =()=>{
        dispatch({type:'change_green', payload :-1*COLOR_INCREMENTER})
   
    }
    return (
        <View>
                <ColorAdjuster colorName="Red"
                    onIncrease = {handleIncreaseRed}
                    onDecrease = {handleDecreaseRed}
                />
                 <ColorAdjuster colorName = "Blue"
                    onIncrease = {handleIncreaseBlue}
                    onDecrease = {handleDecreaseBlue}

                />
                <ColorAdjuster colorName ="Green"
                    onIncrease = {handleIncreaseGreen}
                    onDecrease = {handleDecreaseGreen}
                />
               
                 <View style ={{height:150, width:150, backgroundColor:`rgb(${red}, ${green},  ${blue})`}} />
            
        </View>
    );
}

const styles=  StyleSheet.create({

});

export default SquareScreen;