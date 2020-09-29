import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    follower: [],
    userName: "willwearing",
  };

  componentDidMount() {
    this.fetchUser(this.state.user);
    this.fetchFollowers(this.state.follower);
  }

  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchUser(this.state.userName);
    this.fetchFollowers(this.state.follower);
  };

  fetchUser = (userName) => {
    fetch(`https://api.github.com/users/${this.state.userName}`)
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

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
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

  render() {
    return (
      <div className="App">
        <h1>GitHub User Profiles</h1>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.userName}
          />
          <button>Search Username</button>
        </form>
        <UserCard user={this.state.user} follower={this.state.follower} />
      </div>
    );
  }
}

export default App;
