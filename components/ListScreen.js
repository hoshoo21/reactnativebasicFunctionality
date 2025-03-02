import React from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen =props =>{

    const friendList = [
        {name : "Friend #1", age : 20 },
        {name : "Friend #2", age : 25  },
        {name : "Friend #3", age : 30 },
        {name : "Friend #4", age : 35 },
        {name : "Friend #5" , age : 20},
        {name : "Friend #6" , age : 25},
        {name : "Friend #7" , age : 30},
        {name : "Friend #8", age : 35 },
    ];

    return (
       <FlatList data={friendList}
       keyExtractor={(friend)=> friend.name}
       renderItem={({item})=>{
            return <Text style={styles.textStyle}> {item.name} - Age {item.age}</Text>
        }}
       >

       </FlatList>
    );
};


const styles = StyleSheet.create({
    textStyle :{
        marginVertical:50,
    }
});

export default ListScreen;