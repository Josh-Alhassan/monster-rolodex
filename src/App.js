import { Component } from "react";
import logo from "./logo.svg";

import CardList from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    console.log("Constructor")
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("Component")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchField};
    })
  }

  render() {
    // Desctructuring this.state
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input 
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearchChange} />

      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
