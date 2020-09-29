import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <h2>Username: {user.name}</h2>
      <img width="200px" src={user.avatar_url} alt={user.name} />
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p># of followers: {user.followers}</p>
    </div>
  );
};

export default UserCard;
