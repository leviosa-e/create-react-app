import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouseEntered: false };
  handleMouse = (mouseEntered) => {
    return () => {
      this.setState({ mouseEntered });
    };
  };
  handleDelete = (id, deleteTask) => {
    return () => {
      if (window.confirm("确定删除吗？")) {
        deleteTask(id);
      }
    };
  };
  handleCheck = (id, updateTask) => {
    return () => {
      updateTask(id);
    };
  };
  render() {
    const { id, task, done, deleteTask, updateTask } = this.props;
    const { mouseEntered } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        className={mouseEntered ? "active" : ""}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id, updateTask)}
          />
          <span>{task}</span>
        </label>
        <button
          onClick={this.handleDelete(id, deleteTask)}
          className="btn btn-danger"
          style={{ display: mouseEntered ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
