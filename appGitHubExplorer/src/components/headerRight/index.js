import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default class HeaderRight extends Component {

  signOut = () => {}

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    );
  }
}