import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState({ searchText: event.target.value });
    this.props.updateSearchText(event.target.value);
  }

  render() {
    return (
      <footer className="absolute inset-x-0 bottom-0 bg-neutral-700 p-2 rounded-b-xl text-white">
        <div className="flex flex-row justify-between">
          <input
            className="bg-neutral-500 rounded-xl p-1 pl-4 border border-2 border-black"
            type="text"
            placeholder="Rechercher une tâche"
            value={this.state.searchText}
            onChange={this.handleSearchInputChange}
          />
          <button className="bg-neutral-500 rounded-xl p-1 pl-4 border border-2 border-black">
            Ajouter une tâche
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
