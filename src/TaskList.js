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
        this.moveTaskUp = this.moveTaskUp.bind(this);
        this.moveTaskDown = this.moveTaskDown.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleCheckboxChange(event, index, changedTaskTitle) {
        const { checked } = event.target;
        const localStorage = new LocalStorage();
        const tasks = localStorage.getTasks();
        const newIndex = tasks.findIndex(task => task.title === changedTaskTitle);
        const updatedTasks = [...tasks];
        updatedTasks[newIndex].isChecked = checked;
        localStorage.saveTasks(updatedTasks);
        this.setState({ tasks: updatedTasks });

    
        const checkedTasksCount = updatedTasks.filter((task) => task.isChecked).length;
        this.props.updateCheckedTasks(Math.round(checkedTasksCount/updatedTasks.length*100));
    }

    deleteTask(index) {
        const localStorage = new LocalStorage();
        const tasks = localStorage.getTasks();
        tasks.splice(index, 1);
        localStorage.saveTasks(tasks);
        //change number of checked tasks
        const checkedTasksCount = tasks.filter((task) => task.isChecked).length;
        this.props.updateCheckedTasks(Math.round(checkedTasksCount/tasks.length*100));
        this.setState({ tasks: tasks });
    }

    moveTaskUp(index) {
        const localStorage = new LocalStorage();
        if (index > 0) {
            this.state.tasks.splice(index - 1, 0, this.state.tasks.splice(index, 1)[0]);
            localStorage.saveTasks(this.state.tasks);
            this.setState({ tasks: this.state.tasks });
        }
    }

    moveTaskDown(index) {
        const localStorage = new LocalStorage();


        if (index < this.state.tasks.length - 1) {
            this.state.tasks.splice(index + 1, 0, this.state.tasks.splice(index, 1)[0]);
            localStorage.saveTasks(this.state.tasks);
            this.setState({ tasks: this.state.tasks });
            
        }
    }

    render() {
        const { tasks } = this.state;
        const { searchText } = this.props;
        const filteredTasks = tasks.filter(task =>
            task.title.toLowerCase().includes(searchText.toLowerCase())
          );
        const taskList = filteredTasks.map((task, index) => (
            <li className="flex flex-row justify-between items-center text-left bg-neutral-500 m-2 p-1 pl-4 border border-2 border-black rounded-xl" key={index}>
                <div>
                <input  type="checkbox" checked={task.isChecked} onChange={(event) => this.handleCheckboxChange(event, index, task.title)} />
                <span className="pl-2">{task.title}</span>
                </div>
                {searchText === "" && (
                <div>
                <button className="bg-neutral-500  p-1 pl-2 pr-2 border border-2 border-black rounded-xl" onClick={(event) => this.moveTaskUp(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                </button>
                <button className="bg-neutral-500  p-1 pl-2 pr-2 border border-2 border-black rounded-xl" onClick={(event) => this.moveTaskDown(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </button>
                <button className="text-red-500 bg-neutral-500  p-1 pl-2 pr-2 border border-2 border-black rounded-xl" onClick={(event) => this.deleteTask(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                </div>
                )}
            </li>
        ));
        if (taskList.length === 0) {
            return (
                <div class="mt-5 rounded-lg bg-red-100 m-2 py-5 px-6 text-bold text-red-700">
                    Aucune tâche n'a été trouvé !
                </div>
            )
        }      
        return (
            
            <div className="flex flex-col  h-full w-full">
                <ul className="max-h-[550px] overflow-scroll overflow-x-hidden overflow-y-auto text-white bg-neutral-600 border border-2 border-black rounded-xl m-1 mt-10 p-1">{taskList}</ul>
            </div>
        );
    }
}

export default TaskList;
