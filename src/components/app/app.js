import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(
      ({ todoData }) => {
        const delIndex = todoData.findIndex(each => each.id === id);
        let newTodoData = [
          ...todoData.slice(0, delIndex), 
          ...todoData.slice(delIndex + 1)
        ];
        
        return { todoData: newTodoData };
      }
    );
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={4} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todoData} onDel={this.deleteItem} />
      </div>
    );
  }  
};
