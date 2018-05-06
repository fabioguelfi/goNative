import React, { Component } from 'react';
import { View } from 'react-native';
import ReactotronConfig from 'config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from 'store';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}
