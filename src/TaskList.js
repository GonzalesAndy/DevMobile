import React, { Component } from "react";

class TaskList extends Component {
    render() {
        return (
            <div className=" pt-20 ">
                <ul className="flex flex-col bg-gray-200">
                    <li className="flex flex-row items-center h-10">
                        <input type="checkbox" className="h-5 w-5" />
                        <p className="text-lg ml-5">Tache 1</p>
                    </li>
                    <li className="flex flex-row items-center h-10">
                        <input type="checkbox" className="h-5 w-5" />
                        <p className="text-lg ml-5">Tache 2</p>
                    </li>
                    <li className="flex flex-row items-center h-10">
                        <input type="checkbox" className="h-5 w-5" />
                        <p className="text-lg ml-5">Tache 3</p>
                    </li>
                </ul>

            </div>
        );
    }
}

export default TaskList;