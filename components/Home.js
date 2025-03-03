import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen =(props)=>{
    return(
        <View>
                <Text style={styles.textStyle}> Hi there! </Text>
                <Button title ="Go To Components demo" onPress={()=>{
                        props.navigation.navigate('Exercise');
                }} />
                <Button title ="Go to List" 
                onPress={()=>{
                    props.navigation.navigate('List');
                }} 
                />
                <Button title ="Image Screen"
                    onPress={()=>{
                        props.navigation.navigate('Images');
                    }}
                />
                <Button title = "Counter Screen" 
                    onPress={()=>{
                        props.navigation.navigate("Counter");
                    }}
                />
                <Button title = "Color Screen"
                    onPress={()=>{
                        props.navigation.navigate("Colors");
                    }}
                />
                 <Button title = "Square Screen"
                    onPress={()=>{
                        props.navigation.navigate("Square");
                    }}
                />
                <Button title = "Text Input Screen"
                    onPress={()=>{
                        props.navigation.navigate("TextScreen");
                    }}
                />
                <Button title = "Box Screen"
                    onPress={()=>{
                        props.navigation.navigate("Box Styling");
                    }}
                />

           
        </View>
    );
}


const styles = StyleSheet.create({
    textStyle :{
        fontSize:30,
    }
});
export default HomeScreen;