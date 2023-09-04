
import React from "react";
import { MdEditOff } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

import './Card.css';

const Card = ({hour, date, technology, name, city}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="time-info">
                    <h3>{hour}</h3>
                    <p>{date}</p>
                </div>

                <div className="info-developer">
                    <p className="info-developer-text"><span className="info-developer-text"> {technology} </span> </p>
                    <p className="info-developer-text"><span className="info-developer-text"> {name} </span> </p>
                    <p className="info-developer-text"><span className="info-developer-text"> {city} </span> </p>
                </div>

                <div className="buttons">
                    <button className="detail-button"> Details </button>
                    <button className="edit-button"> <MdEditOff /></button>
                    <button className="delete-button"> <RiDeleteBin5Line/> </button>
                </div>
            </div>
        </div>
    )
}

export default Card;