import React from 'react';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { items: [], text: '' };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  handleRemove(e) {
    let newItems = this.state.items;
    let indexForItem = newItems.findIndex((item) => {
      return item.id.toString() === e.target.value;
    });

    if (indexForItem !== -1) {
      newItems.splice(indexForItem, 1);
    }

    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <TodoForm
          text={this.state.text}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
        <TodoList items={this.state.items} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
