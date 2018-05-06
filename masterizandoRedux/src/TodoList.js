import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const TodoList = ({ todos, addTodo }) => {
    console.tron.log(todos)
    return (
      <View style={styles.container}>
        { todos.map(item => <Text>{ item }</Text>) }
        <TouchableOpacity onPress={ () => addTodo('Fazer Cafe Novamente') }>
          <Text>Adicionar Todo</Text>
        </TouchableOpacity>
      </View>
    );
  };

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
