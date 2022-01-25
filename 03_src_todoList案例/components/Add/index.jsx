import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

export default class Add extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    this.props.addTask({ id: uuidv4(), task: target.value, done: false });
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
