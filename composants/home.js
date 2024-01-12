// HomeScreen.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Coordonnées initiales (peuvent être ajustées selon votre emplacement préféré)
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const goToProfileScreen = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* Marqueur pour indiquer la position actuelle */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Ma Position"
          description="Description de ma position"
        />
        {/* Ajoutez d'autres marqueurs selon vos besoins */}
      </MapView>

      {/* Bouton pour aller sur la page ProfileScreen */}
      <TouchableOpacity style={styles.profileButton} onPress={goToProfileScreen}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  profileButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
