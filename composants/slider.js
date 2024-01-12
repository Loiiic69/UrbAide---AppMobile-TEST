import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    title: 'Statistiques',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    image: require('../assets/slider1.png'),
  },
  {
    title: 'Urbanisme',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    image: require('../assets/slider2.png'),
  },
  {
    title: 'Inscription', // Modifier le titre ici
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    image: require('../assets/slider3.png'),
  },
  // Ajoutez autant de slides que nécessaire
];

const SliderPage = ({ item, index }) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={item.image} style={styles.slideImage} />
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideText}>{item.text}</Text>
      <View style={styles.pageIndicatorContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.pageIndicator,
              { backgroundColor: i === index ? 'blue' : 'lightgray' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const Slider = ({ navigation }) => {
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    const newPageIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

    if (newPageIndex >= 0 && newPageIndex < data.length) {
      scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width * newPageIndex });
      setCurrentIndex(newPageIndex);
    } else if (newPageIndex === data.length) {
      navigation.navigate('Register');
    }
  };



  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScroll={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const currentPage = Math.floor(offset / Dimensions.get('window').width);
          setCurrentIndex(currentPage);
        }}
        scrollEventThrottle={16} // Ajoutez cette ligne
      >
        {data.map((item, index) => (
          <SliderPage key={index} item={item} index={index} />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleSwipe('right')} style={styles.swipeButton}>
          <Text style={styles.swipeButtonText}>
            {currentIndex === data.length - 1 ? 'Inscription' : 'Suivant'}
          </Text>
        </TouchableOpacity>
        {currentIndex === data.length - 1 && (
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.signInLink}>
            <Text style={styles.signInText}>Déjà un compte ?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: Dimensions.get('window').width,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: Dimensions.get('window').width,
  },
  slideImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  slideTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slideText: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
    marginBottom: 100,
  },
  swipeButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: '90%',
  },
  swipeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  signInLink: {
    backgroundColor: 'transparent',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signInText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Slider;
