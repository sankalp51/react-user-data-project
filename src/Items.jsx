import React, { useState } from "react";
import Form from "./Form";
import PersonCard from "./PersonCard";
import "./Items.css";

const persons = [
  {
    name: "John",
    age: 25,
    gender: "Male"
  },
  {
    name: "Alice",
    age: 30,
    gender: "Female"
  },
  {
    name: "Bob",
    age: 35,
    gender: "Male"
  }
];

const Items = () => {
  const [users, setUsers] = useState(persons);
  const [showForm, setShowForm] = useState(false);

  const newUser = data => {
    setUsers(prevState => {
      return [...prevState, data];
    });
  };

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <div className="items">
      {showForm ? (
        <Form getNewUser={newUser} setShowFormFlag={toggleForm} />
      ) : (
        <button onClick={toggleForm} className="add-user">
          Add new user
        </button>
      )}
      <div className="card-container">
        {users.map((items, index) => (
          <PersonCard
            key={index}
            name={items.name}
            age={items.age}
            gender={items.gender}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
