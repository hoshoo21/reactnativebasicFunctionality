import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ExerciseComp from './components/ExerciseComp';
import ListScreen from './components/ListScreen';
import HomeScreen from './components/Home';
import ImageScreen from './components/ImageScreen';
import CalcScreen from './components/CalcScreen';
import ColorScreen from './components/ColorScreen';
import SquareScreen from './components/SquareScreen';
import TextScreen from './components/TextScreen';

const Stack = createNativeStackNavigator();

const App =()=>{
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">  
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Exercise" component={ExerciseComp} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CalcScreen} />
        <Stack.Screen name="Colors" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;