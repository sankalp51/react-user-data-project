import React from "react";
import "./PersonCard.css";

const PersonCard = props => {
    return (
        <div className="card">
            <h2 className="name">{props.name}</h2>
            <p className="info">Age: {props.age}</p>
            <p className="info">Gender: {props.gender}</p>
        </div>
    );
};

export default PersonCard;
