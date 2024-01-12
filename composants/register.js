import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegistration = () => {
    if (!isValidEmail(email)) {
      setEmailError('Veuillez entrer une adresse e-mail valide');
      return;
    }

    if (!isValidPassword(password)) {
      setPasswordError(
        'Le mot de passe doit contenir au moins 14 caractères, des caractères spéciaux et des majuscules'
      );
      return;
    }

    console.log('Email:', email);
    console.log('Nom complet:', fullName);
    console.log('Téléphone:', phone);
    console.log('Mot de passe:', password);
    navigation.navigate('HomeScreen');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 14 && /[!@#$%^&*(),.?":{}|<>]/.test(password) && /[A-Z]/.test(password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/registerimg.png')} style={styles.logo} />
      <Text style={styles.header}>Inscription</Text>

      <View style={styles.inputContainer}>
        <Icon name="at" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
        />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nom complet"
          autoCapitalize="words"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError('');
          }}
        />
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <Text style={styles.conditions}>
        En vous inscrivant, vous acceptez nos{' '}
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.linkText}>Conditions</Text>
        </TouchableOpacity>{' '}
        et notre{' '}
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.linkText}>Politique de confidentialité</Text>
        </TouchableOpacity>
      </Text>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesomeIcon name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>S'inscrire avec Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  registerButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  conditions: {
    textAlign: 'center',
    marginTop: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: -50,
    alignSelf: 'center',
  },
});

export default Register;
