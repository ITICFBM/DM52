import * as  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScren from '../screens/LoginScren';


const Stack = createNativeStackNavigator();
export const LoginStack = () =>{
   return(
        <Stack.Navigator>
            <Stack.Screen name="Iniciar Session" component={LoginScren} />
        </Stack.Navigator>
    );
} 