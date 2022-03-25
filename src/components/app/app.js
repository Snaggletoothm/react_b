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
      return this.getStateByAttr(todoData, id, 'important');
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return this.getStateByAttr(todoData, id, 'done');
    });
  };

  getStateByAttr(arr, id, propName) {
    const targetIndex = arr.findIndex(each => each.id === id);
      const oldItem = arr[targetIndex];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      const newArray = [
        ...arr.slice(0, targetIndex),
        newItem,
        ...arr.slice(targetIndex + 1),
      ]; 

      return { todoData: newArray };
  }

  addItem = (text) => {
    this.setState( ({todoData}) => {
      const currentList = todoData;
      const newTodoItem = this.createTodoItem(text);
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
    const { todoData } = this.state; 
    const doneCount = todoData
      .filter(each => each.done)
      .length;

    const todoCount = todoData.length - doneCount;

    return (

      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
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
