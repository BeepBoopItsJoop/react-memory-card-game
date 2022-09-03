import React, { useState } from 'react';
import Card from './Card';
import uniqid from 'uniqid'

function Main() {
    const [champions, setChampions] = useState(['Morgana', 'Varus', 'Lux', 'Fiora', 'Master Yi', 'Ashe'])
    const [clickedChampions, setClickedChampions] = useState([])

    const handleClick = (champion) => {
        setClickedChampions([...clickedChampions, champion])
        console.log(clickedChampions)
    }

    return ( 
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
        }}>
            {champions.map((champion) => {
                return <Card 
                key={uniqid()}
                name={champion}
                handleClick={handleClick}
                />
            })}
        </div>
     );
}

export default Main;