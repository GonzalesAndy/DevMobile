import React, { Component } from "react";
import LocalStorage from "./LocalStorage";

class TaskList extends Component {
    constructor(props) {
        const localStorage = new LocalStorage();
        super(props);
        this.state = {
            tasks: localStorage.getTasks(),
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event, index) {
        const { checked } = event.target;
        const { tasks } = this.state;
        const updatedTasks = [...tasks];
        updatedTasks[index].isChecked = checked;
        this.setState({ tasks: updatedTasks });
        const localStorage = new LocalStorage();
        localStorage.saveTasks(updatedTasks);

        
        const checkedTasksCount = updatedTasks.filter((task) => task.isChecked).length;
        this.props.updateCheckedTasks(Math.round(checkedTasksCount/updatedTasks.length*100));
    }

    render() {
        const { tasks } = this.state;
        const taskList = tasks.map((task, index) => (
            <li className=" text-left bg-neutral-500 m-2 p-1 pl-4 border border-2 border-black rounded-xl" key={index}>
                <input  type="checkbox" checked={task.isChecked} onChange={(event) => this.handleCheckboxChange(event, index)} />
                <span className="pl-2">{task.title}</span>
            </li>
        ));

        return (
            <div className="flex flex-col  h-full w-full">
                <ul className="text-white bg-neutral-600 border border-2 border-black rounded-xl m-1 mt-10 p-1">{taskList}</ul>
            </div>
        );
    }
}

export default TaskList;
