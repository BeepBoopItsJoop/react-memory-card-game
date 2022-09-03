import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import Main from './Main';

function App() {
  return ( 
    <>
    <Scoreboard /*score={score} bestScore={bestScore}*//>
    <Main />
    </>
   );
}

export default App;