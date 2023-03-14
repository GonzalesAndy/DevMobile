import React, {Component} from "react";
 

class Header extends Component {
    render() {
        const { checkedTasksCount } = this.props; 
        return (
            //Header affiche la progression, à savoir le nombre de Taches restantes (isChecked = false) Vs le nombre total.
            <header className="items-center h-30 w-full bg-neutral-700 pt-5 pd-5 rounded-t-xl">
                <h1 className="text-2xl text-white font-bold">To-Do List</h1>
                <p className="text-xl text-white">Taux d'accomplissement :  {checkedTasksCount} %</p>
            </header>
        );
    }
}

export default Header;

