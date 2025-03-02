import react, {useReducer} from "react";
import {Text,View,TextInput, Button, StyleSheet} from 'react-native';


const reducer =(state, action)=>{

    switch (action.type){
        case "increase_value": 
        console.log(action.payload);
        return {...state, number : state.number + action.payload}

        case "decrease_value": 
            return {...state, number : state.number - action.payload}
        default : 
            return state;
    }
}



const CalcScreen =()=>{
    const INCREMENTOR = 1
    const [state, dispatch] = useReducer(reducer,{number :0} );
    const {number}= state
    console.log(state);
    return (
        <View>
            <Button title ="Increase"  
                onPress={()=>{ 
                   dispatch({type :'increase_value',payload : INCREMENTOR})
                 }}
            />
            <Button title = "Decrease"
                onPress={() =>{
                    dispatch({type :'decrease_value',payload : INCREMENTOR})

                }}
            />
            <Text> Current Count {number} </Text>
        </View>
    );

}

const styles = StyleSheet.create({

});
export default CalcScreen;