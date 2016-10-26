import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return(
      <div className='well well-sm clearfix'>
        <h4 className='pull-left'>{this.props.item.text}</h4>
        <button
          className='btn btn-danger pull-right'
          value={this.props.item.id}
          onClick={this.props.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default TodoListItem;
