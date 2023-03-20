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
          <button onClick={this.props.toggleModal}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg></button>
        </div>
      </footer>
    );
  }
}

export default Footer;
