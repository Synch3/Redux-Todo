import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
export default App;