import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Button,Card, Title, Paragraph } from 'react-native-paper';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

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

  return (
    <>
    <View>
      <TouchableOpacity onPress={goForward}>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 30}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      /> 
    </View>
    <Text style={styles.textCat}>Deportes</Text>
    <View style={styles.row}>
          <Card style ={styles.box}>
               
         </Card>
             <Card style ={styles.box}>
             <Card.Content>
               <Paragraph></Paragraph>
             </Card.Content>
             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
             <Card.Actions>
               <Button>Cancel</Button>
               <Button>Ok</Button>
             </Card.Actions>
         </Card>
             <Card style ={styles.box}>
             <Card.Content>
               <Paragraph></Paragraph>
             </Card.Content>
             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
             <Card.Actions>
               <Button>Cancel</Button>
               <Button>Ok</Button>
             </Card.Actions>
         </Card>
             <Card style ={styles.box}>
             <Card.Content>
               <Paragraph></Paragraph>
             </Card.Content>
             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
             <Card.Actions>
               <Button>Cancel</Button>
               <Button>Ok</Button>
             </Card.Actions>
         </Card>
       </View>
       </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  box: {
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: "row",
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
  },

  textCat:{
    fontSize: 20,
    fontWeight:"bold"
  }
});
