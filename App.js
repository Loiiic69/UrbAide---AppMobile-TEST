import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from './composants/slider.js';
import Register from './composants/register.js';
import { PanResponder } from 'react-native-gesture-handler';
import Login from './composants/login.js';
import HomeScreen from './composants/home.js';
import ProfileScreen from './composants/profil.js';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Slider"
        screenOptions={{
          headerShown: false, // Cela masquera la barre de navigation pour toutes les pages
        }}
      >
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
