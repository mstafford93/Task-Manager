import React from 'react'

const Games = () => {

    const game1 = ' Bauders Gate 3';
    const game2 = ' CyperPunk 2077';

  return (
    <div>
      <ul>
        <li>{game1}</li>
        <li>{game2.toUpperCase()}</li>
        <li></li>
      </ul>
    </div>
  )
}

export default Games
