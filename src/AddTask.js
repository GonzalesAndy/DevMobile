import React, { Component } from "react";

class AddTaskModal extends Component {
  render() {

    const { isOpen, onClose } = this.props;
    return isOpen ? (
      <div className="modal absolute bg-rose-800 inset-x-0 m-5 p-3">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Add Task</h2>
          <input type="text" placeholder="Enter task name" />
          <button>Add</button>
        </div>
      </div>
    ) : null;
  }
}

export default AddTaskModal;