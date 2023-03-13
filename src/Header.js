import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            //Header affiche la progression, à savoir le nombre de Taches restantes (isChecked = false) Vs le nombre total.
            <header className="items-center rounded-2xl h-20 w-full bg-gray-200 pt-5">
                <h1 className="text-2xl font-bold">To-Do List</h1>
            </header>
        );
    }
}

export default Header;

