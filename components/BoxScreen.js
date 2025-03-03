import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = (props)=>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> Box Screen </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    viewStyle :{
        borderWidth:3,
        borderColor:'black',
    },
    textStyle :{
        borderWidth:1,
        borderTopColor:'red',
        marginVertical:20,
        marginHorizontal:20
    }

});


export default BoxScreen;