import React, { useState } from "react";
import "./Form.css";

const Form = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("Male");

    const selectGender = e => {
        setGender(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        const inputData = {
            name: name,
            age: age,
            gender: gender
        };
        props.getNewUser(inputData);
        setName("");
        setAge(0);
        setGender("Male");
        props.setShowFormFlag();
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <label htmlFor="name">Enter Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="input"
            />
            <label htmlFor="age">Enter Age:</label>
            <input
                type="number"
                id="age"
                value={age}
                onChange={e => setAge(e.target.value)}
                className="input"
            />
            <label htmlFor="gender">Select Gender:</label>
            <select id="gender" onChange={selectGender} className="input">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
            <div className="button-container">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" onClick={props.setShowFormFlag} className="cancel-button">Cancel</button>
            </div>
        </form>
    );
};

export default Form;
