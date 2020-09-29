import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>GitHub Users of People we Like</h1>
        <UserCard />
      </div>
    );
  }
}

export default App;
