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
    ],
    term: '',
    status: 'all',
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

  onFilterItems = (matcher) => {
    this.setState({ term: matcher });
  };

<<<<<<< HEAD
  onToggleStatus = (status) => {
    this.setState({
      status: status
    });  
  };

  renderingDataItemsAfterSearch(todoData, matcher) {
    if(matcher === '') {
      return todoData;
    }
    return todoData.filter(
      each => each.label.indexOf(matcher) > -1
    );
  }

  renderingDataItemsAfterFilter(todoData, status='all') {
    if(status === 'all') {
      return todoData;
    }

    switch(status) {
      case 'done':
        return todoData.filter(e => e.done);
      case 'active': 
        return todoData.filter(e => !e.done);
      default:
        return todoData;   
    }
=======
  renderingDataItems(todoData, matcher) {
    console.log(matcher + ' >>> ' + todoData);
    if(matcher === '') {
      return todoData;
    }
    return todoData.filter(each => each.label.indexOf(matcher) > -1);
>>>>>>> 394b7b832c31a8fa6674d7bf938ed60ad991809b
  }

  render() {
    const { todoData } = this.state; 
    const doneCount = todoData
      .filter(each => each.done)
      .length;

    const todoCount = todoData.length - doneCount;
<<<<<<< HEAD
    const visibilityItems = this.renderingDataItemsAfterFilter(
      this.renderingDataItemsAfterSearch(todoData, this.state.term), this.state.status);

=======
    const visibilityItems = this.renderingDataItems(todoData, this.state.term);
>>>>>>> 394b7b832c31a8fa6674d7bf938ed60ad991809b
    return (

      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
            todos={visibilityItems}
            onFilterItems={this.onFilterItems} />
<<<<<<< HEAD
          <ItemStatusFilter onToggleStatus={this.onToggleStatus} />
=======
          <ItemStatusFilter />
>>>>>>> 394b7b832c31a8fa6674d7bf938ed60ad991809b
        </div>
  
        <TodoList 
          todos={visibilityItems} 
          onDel={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }  
};
