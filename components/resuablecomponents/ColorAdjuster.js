import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native';

const ColorAdjuster =(props) =>{

    return (
        <View>
            <Text>
               {props.colorName}
           </Text>
           <Button title = {`Increase ${props.colorName}`} onPress={()=>props.onIncrease()} />
           <Button title = {`Decrese  ${props.colorName}`} onPress={()=>props.onDecrease()} />

        </View>
       
    );
}

const styles=  StyleSheet.create({

});

export default ColorAdjuster;