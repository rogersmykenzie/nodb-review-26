import React from "react";
//POINTS - 39
//components
import AddDestination from "./components/AddDestination";
import MyDestinations from "./components/MyDestinations";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: ""
    }
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={() => this.setState({currentPage: "add"})}>Add Place</button>
          <button onClick={() => this.setState({currentPage: "view"})}>View Places</button>
        </nav>
        <h1>App Component</h1>
        {
          this.state.currentPage === "add" 
        ?
          <AddDestination />
        : 
          this.state.currentPage === "view"
        ?
          <MyDestinations />
        : 
          null
        }
      </div>
    )
  }
}

export default App;