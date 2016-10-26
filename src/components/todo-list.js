import React from 'react';
import TodoListItem from './todo-list-item'

class TodoList extends React.Component {
  render() {
    return(
      <div>
        <TodoListItem />
      </div>
    );
  }
}

export default TodoList;
