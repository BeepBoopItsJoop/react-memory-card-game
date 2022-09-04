import React from 'react';

function Scoreboard(props) {
    return ( 
        <>
        <h1>Current score: {props.currentScore}</h1>
        <h2>Best score: {props.bestScore}</h2>
        </>
     );
}

export default Scoreboard;