import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('John Doe');
  const [bio, setBio] = useState('Web Developer');
  const [email, setEmail] = useState('john.doe@example.com');
  const [newEmail, setNewEmail] = useState('');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isChangingEmail, setIsChangingEmail] = useState(false);

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleUpdateEmail = () => {
    setEmail(newEmail);
    setIsEditingEmail(false);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeEmail = () => {
    setIsChangingEmail(true);
  };

  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handleConfirmEmailChange = () => {
    // Implement logic to change email
    setIsChangingEmail(false);
  };

  const handleConfirmPasswordChange = () => {
    // Implement logic to change password
    setIsChangingPassword(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Votre profil</Text>
      </View>
    

      <Modal visible={isChangingPassword} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => setIsChangingPassword(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalBox}>
                <Text style={styles.modalTitle}>Changer de mot de passe</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Nouveau mot de passe"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
                <TouchableOpacity onPress={handleConfirmPasswordChange} style={styles.modalButton}>
                  <Text style={styles.buttonText}>Confirmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsChangingPassword(false)} style={styles.modalButton}>
                  <Text style={styles.buttonText}>Annuler</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'stretch',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 8,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 18,
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  emailContainer: {
    marginBottom: 16,
  },
  emailInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBox: {
    width: '80%',
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
});

export default ProfileScreen;
