import * as  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';


const Stack = createNativeStackNavigator();
export const CategoriesStack = () =>{
   return(
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={CategoriesScreen} />
        </Stack.Navigator>
    );
} 