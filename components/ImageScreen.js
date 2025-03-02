import react from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "./resuablecomponents/ImageDetail";

const ImageScreen =(props)=>{
    return (
        <View>
            <ImageDetail title ="Forest" imageSource = {require('../assets/forest.jpg')} score ="7.5"/>
            <ImageDetail title ="Mountain" imageSource = {require('../assets/mountain.jpg')} score ="7.5"/>
            <ImageDetail title ="Beach" imageSource = {require('../assets/beach.jpg')} score ="7.5"/>
            
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;