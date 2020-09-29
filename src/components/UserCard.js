import React from "react";

const UserCard = ({ user, follower }) => {
  console.log(follower);
  return (
    <div className="userCard">
      <h2>Username: {user.name}</h2>
      <img width="200px" src={user.avatar_url} alt={user.name} />
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p># of followers: {user.followers}</p>
      <div className="followersWrapper">
        <p>Here is a list of my followers: </p>

        <select>
          <option></option>
          {follower.map((fol) => (
            <option key={fol.id}>{fol.login}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserCard;
