import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Home from "../pages/Home";
import { User } from "./model";
import { UserContext } from "./UserContext";
// import { userContext, UserContext } from '../pages/Home';{ UserContext } from "./UserContext";

const UserCard = () => {
  const { users: usersList, setUsers } = useContext(UserContext);
  const handleDelete = (id: any) => {
    const temp: User[] | any = usersList.filter((user: User) => user.Id !== id);
    setUsers(temp);
  };
  // console.log(usersList);
  return (
    <div className="users">
      <h2>Available Users</h2>
      <ul className="user-list">
        {usersList.map((user: User) => (
          <li key={String(user.Id)} className="user">
            <h3>{user.Name}</h3>
            <div className="user__age">{String(user.Age)}</div>
            <p className="user__bio">{user.Bio}</p>
            <button onClick={() => handleDelete(user.Id)}>Delete User</button>
          </li>
        ))}
        {/* {!usersList && <div>NoList</div>} */}
      </ul>
    </div>
  );
};

export default UserCard;
