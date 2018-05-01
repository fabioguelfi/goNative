import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    usuario: 'guelfi',
    todos: [
      { id: 0, text: 'Fazer Cafe' },
      { id: 1, text: 'Estudar GoNative' },
    ],
  };

  // primeira call sobre o ciclo de vida
  // constructor() {}
  // nunca usar no React

  // 1º
  // Ciclo de vida executa automaticamente antes do component ser renderizado em tela
  // Usado para criar eventListeners
  // Nao recomendado alterar o state fazer requests para API
  componentWillMount() {
    // ex: Keyboard.addEventListener
  }

  // 3º
  // Usado para fazer requests nas API, buscar servicos para serem exibidos 
  // em tela ou alteracao assim que o component estiver em tela
  componentDidMount() {

  }

  // 4º
  // quando alguma propriedade do component for alterada ou seja o estado evoluido atraves
  // do metodo setState()
  // executa antes de fazer a evolucao do estado, ou seja contem os antigos dados do state
  componentWillReceiveProps(props) {
    // props.todolist =/= this.props.todolist
  }

  // 5º
  // Serve para verificar se tem alguma prop que foi alterada porem nao esta sendo usada no component
  // ou seja podemos parar o render novamente pois nao surgira efeito na view
  shouldComponentUpdate(newProps, newState) {
    // return false; blck render if return false
  }

  // 6º
  // Consegui a permisao para atualizar o component
  componentWillUpdate() {

  }

  // 7º
  // Usado para verificar as informacoes antigas do state pois as novas ja foram atualizadas
  componentDidUpdate(oldProps, oldState) {

  }

  // 8º
  // É o ultimo metodo executado antes do component ser retirado da tela
  // Bom local para remover os eventListeners
  componentWillUnmount() {
    // Keyboard.removeEventListener
  }

  // 9º
  // Permite recuperar erros em execucao 
  componentDidCatch(err, info) {
    // alert
  }

  addTodo = () => {
    this.setState({
      todos: [
        ... this.state.todos,
        { id: Math.random(), text: 'Novo Todo' },
      ],
    })
  }

  // 2º
  // render estrutura na view
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
        <Text>Oi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#f00',
    margin: 10,
    transform: [
      { rotateZ: '20deg' },
    ]
  },
});
