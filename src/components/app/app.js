import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  currId = 0;

  state = {
    todoData: [
      this.createTodoItem('Drink a Coffee'),
      this.createTodoItem('Make some awesome'),
      this.createTodoItem('build app'),
    ]
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.currId++
    };
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const targetIndex = todoData.findIndex(each => each.id === id);
      const oldItem = todoData[targetIndex];
      const newItem = {...oldItem, important: !oldItem.important};

      const newArray = [
        ...todoData.slice(0, targetIndex),
        newItem,
        ...todoData.slice(targetIndex + 1),
      ];

      return { todoData: newArray };
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const targetIndex = todoData.findIndex(each => each.id === id);
      const oldItem = todoData[targetIndex];
      const newItem = {...oldItem, 'done': !oldItem['done']};
      const newArray = [
        ...todoData.slice(0, targetIndex),
        newItem,
        ...todoData.slice(targetIndex + 1),
      ]; 

      return { todoData: newArray };
    });
  };


  addItem = (text) => {
    this.setState( ({todoData}) => {
      const currentList = todoData;
      const newTodoItem = this.createTodoItem('new item');
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
  
        <TodoList 
          todos={this.state.todoData} 
          onDel={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }  
};
