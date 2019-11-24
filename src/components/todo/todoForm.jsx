import React, { Component } from "react";
import TodoTable from "./todoTable";

class TodoForm extends Component {
  state = {
    task: {
      name: "",
      desc: "",
      id: ""
    },
    tasks: []
  };

  handleChange = e => {
    const task = { ...this.state.task };
    task.id = Math.random();
    task[e.target.name] = e.target.value;
    this.setState({ task: task });
  };

  handleAdd = () => {
    this.setState({ tasks: [...this.state.tasks, this.state.task] });
    const task = { ...this.state.task };
    task.name = "";
    task.desc = "";
    this.setState({ task: task });
  };

  handleDelete=(task)=>{
      const tasks = this.state.tasks.filter(t => t.id !== task.id);
      this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.state.task.name}
          placeholder="Task Name"
          className="m-2"
        />

        <input
          name="desc"
          type="text"
          onChange={this.handleChange}
          value={this.state.task.desc}
          placeholder="Task Description"
        />

        <input type="button" value="Add" onClick={this.handleAdd} className="btn btn-primary m-2"/>

        <TodoTable tasks={this.state.tasks} onDelete={this.handleDelete} />

      </div>
    );
  }
}

export default TodoForm;
