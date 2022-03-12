import React from "react";
import TodoListItem from "./todo-list-item";


const TodoList = ({todos}) => {
    const items = todos.map(item => {
        const {id, ...tail} = item;
        return (

            <li key={id}>
                <TodoListItem {...tail} />
            </li>
        );
    });
    return (
        <ul>
            {items}
        </ul>
    );
};


export default TodoList;