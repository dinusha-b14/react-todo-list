import React from 'react';
import TodoListItem from './todo-list-item'

class TodoList extends React.Component {
  render() {
    return(
      <div>
        {this.props.items.map(item => (
          <TodoListItem key={item.id} item={item} handleRemove={this.props.handleRemove}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
