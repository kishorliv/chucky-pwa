import React, { useState } from 'react';

import './JokeCard.css'
import Card from '../Card';
import getJoke from '../../api/getJoke';

const JokeCard = () => {
    const [joke, setJoke] = useState('');
    const [errorMsg, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
            setLoading(true);
            getJoke().then((jokeObj) => {
                setLoading(false)
                setJoke(jokeObj.data.value);
            }).catch((error) => {
                setLoading(false);
                setError('Could not fetch the joke!');
            });
    };

    return(
        <div className="jokecard">
            <h1 className="jokecard-header">Chucky</h1>
            <Card joke={joke} loading={loading} errorMsg={errorMsg}/>
            <div>
                <button className="jokecard-btn" type="submit" onClick={handleSubmit}>Get it!</button>
            </div>
        </div>
    );

};

export default JokeCard;
