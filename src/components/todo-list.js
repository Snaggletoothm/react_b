import React from "react";
import TodoListItem from "./todo-list-item";


const TodoList = ({todos}) => {
    const items = todos.map(item => {
        return (
            <li>
                <TodoListItem {...item} />
            </li>
        )
    });
    return (
        <ul>
            {items}
        </ul>
    );
};


export default TodoList;