import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

export default class Repositorie extends Component {

  static navigationOptions = {
    title: 'Respositorios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor}/>
  };

  render() {
    return <View />
  }
}
