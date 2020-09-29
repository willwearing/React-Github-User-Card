import React from "react";

const UserCard = ({ user, follower }) => {
  return (
    <div className="userCard">
      <h2>Username: {user.name}</h2>
      <img width="200px" src={user.avatar_url} alt={user.name} />
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p># of followers: {user.followers}</p>
      <p>Here is a list of my followers: </p>
      <div>
        {follower.map((fol) => {
          return (
            <div key={fol.id} className="followersWrapper">
              <ul>{fol.login}</ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserCard;
