import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import Card from './Card';
import uniqid from 'uniqid'

function Main() {
    const [champions, setChampions] = useState(['Morgana', 'Varus', 'Lux', 'Fiora', 'Master Yi', 'Ashe'])
    const [clickedChampions, setClickedChampions] = useState([])
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const shuffleArray = (array) => {
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const handleClick = (championName) => {
        setChampions((prevState) => shuffleArray(champions))
        if (clickedChampions.includes(championName)) {
            setClickedChampions([])
            setCurrentScore(0)
            return
        }
        const newScore = currentScore + 1
        if (newScore > bestScore) setBestScore(newScore)
        setCurrentScore(newScore)
        setClickedChampions(prevState => [...prevState, championName])
    }

    return ( 
        <>
        <Scoreboard 
        currentScore={currentScore} 
        bestScore={bestScore}/>
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
        </>
     );
}

export default Main;