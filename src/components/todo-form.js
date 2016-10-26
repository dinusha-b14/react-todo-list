import React from 'react';

class TodoForm extends React.Component {
  render() {
    return(
      <div>
        <form className='form-inline' onSubmit={this.props.onSubmit}>
          <div className='form-group'>
            <input
              className='form-control' type='text'
              placeholder='Enter your item here' value={this.props.text}
              onChange={this.props.onChange} />
          </div>
          <span>&nbsp;</span>
          <button className='btn btn-primary' type='submit'>Add Item</button>
        </form>
        <br />
      </div>
    );
  }
}

export default TodoForm;
