import React from 'react';
import styles from './styles';

import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-Vindo</Text>
    <Text style={styles.text}>Para continuar, precisamos que informe seu usuario do Github</Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuario"
        underlineColorAndroid="rgba(0,0,0,0)">
      </TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { }}>  
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Welcome.navigationOptions = { 
  header: null,
}

StatusBar.setBarStyle("light-content")

export default Welcome;