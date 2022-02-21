import  React from 'react';
import {StyleSheet, Text, View} from 'react-native';

 /* Declaración De Nuestro función Home Screenjs */
export default function HomeScreen(){

    return(
        <>
    <View style={styles.container }>
      <Text style={styles.textcolor}>Soy un Home desde un componete!</Text>
    </View>
        </> 
    )


}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'red',
    },
    textcolor:{
        color:'#ffffff',
    }
});


