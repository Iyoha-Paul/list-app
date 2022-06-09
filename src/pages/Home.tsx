import React, { useState } from "react";
import { User } from "../components/model";
import nextId, { useId } from "react-id-generator";
import UserCard from "../components/UserCard";
import { UserContext } from "../components/UserContext";
// export const UserContext: React.Context<User[]> = React.createContext([{}]);

const Home = () => {
  const [name, setName] = useState("dd");
  const [age, setAge] = useState<Number>(43);
  const [bio, setBio] = useState("efwefe");
  // const [user, setUser] = useState<User>({});
  const [users, setUsers] = useState<User[]>([]);
  // const [Id, setId] = useState<Number>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const generateId = () => {
      const newId = Date.now();
      // id++;
      return newId;
    };
    // setId(Number(generateId()));
    // setUser({ name, age, bio, Id });
    // const temp = users ? [...users, user] : users;
    const temp = { Name: name, Age: age, Bio: bio, Id: generateId() };
    setUsers([temp, ...users]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="home container">
        <h1>List App!</h1>
        <section>
          <h2>Add New User</h2>
          <form className="user-form" action="" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="Number"
              placeholder="Age"
              required
              value={String(age)}
              onChange={(e) => setAge(Number(e.target.value))}
            />

            <textarea
              required
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <button type="submit">Add User</button>
          </form>
        </section>
        <section>
          <UserCard />
        </section>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
