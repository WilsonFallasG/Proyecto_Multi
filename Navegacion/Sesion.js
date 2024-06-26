import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Sesion = () => {
  const navigation = useNavigation();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, correo, contrasena);
      setCorreo('');
      setContrasena('');
      Alert.alert('Bienvenido al sistema de EDUCATE-2030');
      navigation.navigate('Home');
    } catch (error) {
      setCorreo('');
      setContrasena('');
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'Correo o contraseña incorrectos');
      } else {
        Alert.alert('Error', 'No se pudo iniciar sesión. Intente de nuevo.');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Registrarse')}>
        <Text style={styles.register}>Registrar</Text>
      </TouchableOpacity>
      <Image source={require('../assets/imageLog.png')} style={styles.logo} />
      <Text style={styles.label}>Correo</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/imageEmail.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#B0B0B0"
        />
      </View>
      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/imageLock.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
          placeholderTextColor="#B0B0B0"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Rec_contraseña')}>
        <Text style={styles.forgotPassword}>Recuperar contraseña</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#195E63',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 312,
    height: 198,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
  },
  button: {
    backgroundColor: '#87B4B5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 314,
    height: 44,
    marginTop: 18
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'lightgray',
    marginBottom: 30,
    marginTop: 20,
    fontSize: 16,
  },
  register: {
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: 10,
    width: 300,
    height: 50,
    textAlign: 'right',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  icon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
});

export default Sesion;
