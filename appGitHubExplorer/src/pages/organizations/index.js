import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

export default class Organizations extends Component {

  static navigationOptions = {
    title: 'Organizacoes',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor}/>
  };

  render() {
    return <View />
  }
}
