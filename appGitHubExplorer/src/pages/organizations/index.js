import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator, Text, FlatList } from 'react-native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export default class Organizations extends Component {

  static navigationOptions = {
    title: 'Organizacoes',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor}/>
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');

    const response = await api.get(`/users/${username}/orgs`);

    this.setState({
      data: response.data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <Text>{ item.login }</Text>

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadOrganizations}
      refreshing={this.state.refreshing}
      ListFooterComponent={<View style={styles.listFooter} />}
    />
  );

  render() {
    return (
      <View>
        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }

}
