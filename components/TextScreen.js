import React,{useState} from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen =(props)=>{
    const [name, setName] = useState('');
    return (
    <View style={styles.container}>
        <Text>
             Please Enter Password 
        </Text>
        <TextInput
            style={styles.inputContainer}
            placeholder="Type your password "
            autoCorrect={false}
            value={name}  
            editable = {true}
            onChangeText={(text)=> {
                console.log("New Value:", text);
                setName(text);
              }}
        />
        <Text> My Name is  {name}</Text>
        {name.length <5 ? <Text> Password should be atleast 5 characters longs </Text> : <Text></Text> }      
    </View>
   )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,  // Ensures it takes full screen
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        
      },
    inputContainer: {
        height: 50,
        width: "80%",  // Ensures it's visible
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
      },
});

export default TextScreen;