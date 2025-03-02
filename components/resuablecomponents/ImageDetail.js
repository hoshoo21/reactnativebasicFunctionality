import react from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) =>{
    return (
        <View>
            <View style={styles.textContainer}>
                <Text>
                    {props.title}
                </Text>
                <Text>
                   Image Score- {props.score}
                </Text>
            </View>
            <Image source={props.imageSource}/>
           
    
        </View>
    );

}


const styles = StyleSheet.create({
        textContainer : {
            flexDirection:'column',

        }
});

export default ImageDetail;