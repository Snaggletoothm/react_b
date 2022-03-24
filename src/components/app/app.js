import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  addItem = (text) => {
    this.setState( ({todoData}) => {
      const currentList = todoData;
      const nextNdex4AppendItem = currentList.sort(item => item.id)[0].id + 1;
      const newTodoItem = {label: `item ${nextNdex4AppendItem}`, important: false, id: nextNdex4AppendItem};
      return {todoData: [...currentList, newTodoItem]};
    });
  };

  deleteItem = (id) => {
    this.setState(
      ({ todoData }) => {
        const delIndex = todoData.findIndex(each => each.id === id);
        const newTodoData = [
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
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }  
};
