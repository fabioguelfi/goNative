import React, { Component } from 'react';
import styles from './styles';

import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

export default class Welcome extends Component {

  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  signIn = () => {
    console.log('call')
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
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
            onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}