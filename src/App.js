import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const userName = "willwearing";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    this.fetchUser(this.state.user);
    this.fetchFollowers(this.state.followers);
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${userName}/followers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          followers: data,
        });
      })
      .catch((err) => {
        console.log("follower fetch error", err);
      });
  };

  fetchUser = (user) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          user: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub Users of People we Like</h1>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
