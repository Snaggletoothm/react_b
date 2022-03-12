import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {
    const todoData = [
        {'label': 'drink milk', 'important': false},
        {'label': 'study data structure and algorithms', 'important': true},
        {'label': 'have a lunch', 'important': false},
    ];

    return (
        <div>
            <span>{(new Date()).toString()}</span>
            <AppHeader />        
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);