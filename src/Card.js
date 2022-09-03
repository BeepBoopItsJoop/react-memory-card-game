import React from 'react';

function Card(props) {
    const onClick = () => {
        props.handleClick(props.name)
    }

    return ( 
        <div onClick={onClick}
        style={{
            border: '1.5px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            }}>

            {/* <img src="" alt="" /> */}
            <div style={{width: '100px', height: '100px', backgroundColor: 'red'}} />
            <h1>{props.name}</h1>

        </div>
     );
}

export default Card;