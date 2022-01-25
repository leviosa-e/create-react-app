import React, { Component } from "react";
import "./index.css";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { todos, deleteTask, updateTask } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todoObj) => {
          return (
            <Item
              key={todoObj.id}
              {...todoObj}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </ul>
    );
  }
}
