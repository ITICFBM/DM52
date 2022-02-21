import * as  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScren from '../screens/NewsScren';


const Stack = createNativeStackNavigator();
export const NewsStack = () =>{
   return(
        <Stack.Navigator>
            <Stack.Screen name="Noticias" component={NewsScren} />
        </Stack.Navigator>
    );
} 