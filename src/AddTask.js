import React, { Component } from "react";
import LocalStorage from "./LocalStorage";

class AddTaskModal extends Component {

  constructor(props) {
    const localStorage = new LocalStorage();
    super(props);
    this.state = {
      taskName: "",
      tasks: localStorage.getTasks()
    };
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleTaskNameChange(event) {
    this.setState({ taskName: event.target.value });
    console.log(this.state.taskName);
  }

  handleAddTask() {
    const tasks = [...this.state.tasks];
    tasks.push({ title: this.state.taskName, isChecked: false });
    const localStorage = new LocalStorage();
    localStorage.saveTasks(tasks);
    //re render task List
    this.setState({ tasks: tasks });
    this.props.onClose();
    window.location.reload();
  }

  render() {

    const { isOpen, onClose } = this.props;
    return isOpen ? (
      <div className="modal absolute inset-x-0 bottom-[170px] m-5 p-3 pt-10 text-white bg-neutral-600 border border-2 border-black rounded-xl">
        <div className="flex flex-col">
          <span className="text-red-500 close absolute top-2" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </span>
          <h2 className="mb-2">Ajouter une tâche</h2>
          <input className="inputName text-black" type="text" placeholder=" Entre le nom de la tâche" value={this.state.taskName} onChange={this.handleTaskNameChange}/>
          <button className="bg-green-500 p-2 rounded-xl mt-2" onClick={this.handleAddTask}>Ajouter</button>

        </div>
      </div>
    ) : null;
  }
}

export default AddTaskModal;