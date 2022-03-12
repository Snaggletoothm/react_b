import React from "react";
import TodoListItem from "./todo-list-item";


const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label='drink tea' /></li>
            <li><TodoListItem label='eat meat' /></li>
        </ul>
    );
};


export default TodoList;