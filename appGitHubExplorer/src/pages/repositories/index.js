import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, AsyncStorage, ActivityIndicator, FlatList, Text } from 'react-native';
import api from '../../services/api';
import styles from './style';
import RepositoryItem from './componnets';



export default class Repositories extends Component {

  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');

    const response = await api.get(`/users/${username}/repos`);

    this.setState({
      data: response.data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
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

