import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const ExerciseComp = props=> {
    const name = "Naveed Asad";
    return (
        <View style={{flex:1}}>
            <Text style={styles.mainPara} >
                Getting Started With React Native
            </Text>
            <Text style ={styles.secondaryPara}>
                My Name is {name}
            </Text>
        </View>
    )

}


const styles = StyleSheet.create({
    mainPara :{
        
        fontSize:45,
    },
    secondaryPara :{
        fontSize:20,
        paddingTop:20,
        alignItems:'baseline'
    }
});
export default ExerciseComp;