import * as  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();
export const HomeStack = () =>{
   return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={HomeScreen} />
        </Stack.Navigator>
    );
} 