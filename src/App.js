import React from 'react';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
