import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", task: "吃饭", done: true },
      { id: "002", task: "睡觉", done: false },
      { id: "003", task: "打豆豆", done: true },
    ],
  };

  // 添加todo
  addTask = (todoObj) => {
    this.setState({ todos: [todoObj, ...this.state.todos] });
  };

  // 删除todo
  deleteTask = (id) => {
    const newTodos = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  // 更新todo
  updateTask = (id) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ todos: newTodos });
  };

  // 勾选全部
  checkAll = (done) => {
    const newTodos = this.state.todos.map((todoObj) => ({ ...todoObj, done }));
    this.setState({ todos: newTodos });
  };

  // 清除已完成
  clearAllDone = () => {
    const newTodos = this.state.todos.filter((todoObj) => !todoObj.done);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add todos={todos} addTask={this.addTask} />
          <List
            todos={todos}
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}
          />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
