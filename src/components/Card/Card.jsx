import React, { useState } from 'react';

import './Card.css';
import avatar from './logo.png';


const Card = ({ joke, loading, errorMsg }) => {
    const [speed, setSpeed] = useState(3);

    const animation = loading ? `spin ${speed}s linear infinite` : ``;

    return (
        <div className="card">
            <img className="card-img" src={avatar} alt="Chuck norris avatar" style={{animation: animation, width: `100px`, height: `100px`}} />
            <div className="card-container">
            { loading ? '' : <p className={joke !== '' ? "joke" : "joke-initial"}>{errorMsg ? errorMsg : joke}</p> }
            </div>
        </div>
    );
};

export default Card;
