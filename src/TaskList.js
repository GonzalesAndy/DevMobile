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

    handleCheckboxChange(event, index, changedTaskTitle) {
        const { checked } = event.target;
        const localStorage = new LocalStorage();
        const tasks = localStorage.getTasks();
        const { title } = tasks[index];
        const newIndex = tasks.findIndex(task => task.title === changedTaskTitle);

        const updatedTasks = [...tasks];
        updatedTasks[newIndex].isChecked = checked;
        localStorage.saveTasks(updatedTasks);
        this.setState({ tasks: updatedTasks });
    
        const checkedTasksCount = updatedTasks.filter((task) => task.isChecked).length;
        this.props.updateCheckedTasks(Math.round(checkedTasksCount/updatedTasks.length*100));
        console.log(changedTaskTitle);
    }
    
      

    render() {
        const { tasks } = this.state;
        const { searchText } = this.props;
        const filteredTasks = tasks.filter(task =>
            task.title.toLowerCase().includes(searchText.toLowerCase())
          );
        
        const taskList = filteredTasks.map((task, index) => (
            <li className=" text-left bg-neutral-500 m-2 p-1 pl-4 border border-2 border-black rounded-xl" key={index}>
                <input  type="checkbox" checked={task.isChecked} onChange={(event) => this.handleCheckboxChange(event, index, task.title)} />
                <span className="pl-2">{task.title}</span>


            </li>
        ));
        if (taskList.length === 0) {
            return (
                <div class="mt-5 rounded-lg bg-red-100 py-5 px-6 text-bold text-red-700">
                    Aucune tâche n'a été trouvé !
                </div>
            )
        }      
        return (
            
            <div className="flex flex-col  h-full w-full">
                <ul className="text-white bg-neutral-600 border border-2 border-black rounded-xl m-1 mt-10 p-1">{taskList}</ul>
            </div>
        );
    }
}

export default TaskList;
