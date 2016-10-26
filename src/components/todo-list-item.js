import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return(
      <div className='well well-sm clearfix'>
        <h4 className='pull-left'>Some Text Here</h4>
        <button className='btn btn-danger pull-right'>Remove</button>
      </div>
    );
  }
}

export default TodoListItem;
