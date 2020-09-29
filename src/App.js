import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const userName = "willwearing";

class App extends React.Component {
  state = {
    user: [],
    follower: [],
  };

  componentDidMount() {
    this.fetchUser(this.state.user);
    this.fetchFollowers(this.state.follower);
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${userName}/followers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          follower: data,
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
        <UserCard user={this.state.user} follower={this.state.follower} />
      </div>
    );
  }
}

export default App;
