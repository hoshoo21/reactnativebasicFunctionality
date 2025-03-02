import react, {useState} from "react";
import { StyleSheet, View, Button , Text } from "react-native";
import { FlatList, ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const randomRGB = ()=>{
    const Red= Math.floor(Math.random()*256);
    const Green= Math.floor(Math.random()*256);
    const Blue= Math.floor(Math.random()*256);
    return `rgb(${Red}, ${Green}, ${Blue})`;
}


const ColorScreen = (props) =>{
    const [colors, SetColors]= useState([]);
    const hanldeColors = ()=>{
        SetColors([...colors,randomRGB()]);
    }
    console.log(colors);
    return (
        <View style={{ flex: 1 }}>
            <Button title ="Add Color" onPress={hanldeColors} />
            <GestureHandlerRootView > 
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) =>{ 
            console.log(String(item));
            return  <View style={{ height: 100, width: 100, backgroundColor: String(item)}} />
        }
        }
        ListEmptyComponent={<Text>No Colors Added yet</Text>} // Show message if colors array is empty
      />
    </GestureHandlerRootView>
                      
               
               
                
            
        </View>
    )

}

const styles = StyleSheet.create({

});

export default ColorScreen;


