/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* Tenemos que importar react y react-native */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//importamos la libreria iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStack } from '../dmm52/src/navigator/stacks/HomeStack';
import { CategoriesStack } from '../dmm52/src/navigator/stacks/CategoriesStack';
import { NewsStack } from '../dmm52/src/navigator/stacks/NewsStack';
import { LoginStack } from '../dmm52/src/navigator/stacks/LoginStack';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      activeColor="#ffffff"
      inactiveColor="#ceff00"
      barStyle={{ backgroundColor: '#3500d3' }}
      >
        <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Categories" component={CategoriesStack} 
         options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="News" component={NewsStack}
               options={{
                tabBarLabel: 'Noticias',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="newspaper-variant" color={color} size={26} />
                ),
               }}
        />
        <Tab.Screen name="Login" component={LoginStack}
               options={{
                tabBarLabel: 'Iniciar Session',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="login" color={color} size={26} />
                ),
               }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

