import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { View,Text,Dimensions,StyleSheet,TouchableOpacity,Platform} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

  const ENTRIES1 = [
    {
      title: 'Tras el suceso de Ucrania y Rusia, los Ucranianos que habitan en México',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/104/2015/10/GrandCanyon-750x350-1.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://cdn.noticiasultimahora.mx/wp-content/uploads/2022/02/21201108/coronavirus-covid-19-pruebas-rapidas-quintana-roo-reuters.png_423392900.png',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];
  const {width: screenWidth} = Dimensions.get('window');
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  const HomeScreen = props => {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
  
    const goForward = () => {
      carouselRef.current.snapToNext();
    };
  
    useEffect(() => {
      setEntries(ENTRIES1);
    }, []);
    const renderItem = ({item, index}, parallaxProps) => {
      return (
        <View style={styles.item}>
          <ParallaxImage
            source={{uri: item.illustration}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      );
    };
  
 /* Declaración De Nuestro función Home Screenjs */


    return(
        <>
     <View style={[styles.container, {flexDirection: "column"}]}>
      {/* V-SLIDER */}
      <View style={{ flex: 1, justifyContent:"center",}}>
      <TouchableOpacity onPress={goForward}>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 0}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      /> 
    </View>
    
      {/* VISTA CATEGORI 1 */}
      <Text style= {{fontStyle:"normal",fontWeight:"bold"}}>Deportes</Text>
      <View style={{flex:1,justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{ justifyContent:'space-evenly',padding:0,flex:1,backgroundColor:"gray",flexDirection:"row",justifyContent:"center"}}>
        <Card style={{justifyContent:'space-evenly',width:200,height:200}}>
        <Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
          <Card.Actions>
            <Button>Ver Más</Button>
          </Card.Actions>
        </Card>
        </View>
        <View style={{justifyContent:'space-evenly',flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Card style={{justifyContent:'space-evenly',width:200,height:200}}>
        <Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
          <Card.Actions>
          <Button>Ver Más</Button>
          </Card.Actions>
        </Card>
        </View>
      </View>

      {/* Vista categoria 2 */}
      <Text style= {{fontStyle:"normal",fontWeight:"bold"}}>CLIMA</Text>
      <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,backgroundColor:"gray",flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,backgroundColor:"yellow", flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
      </View>
    </View>  
        </>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    }, 
    item: {
      width: screenWidth - 25,
      height: screenWidth - 200,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
      width: '750',
      height: '350',
    }

   });
