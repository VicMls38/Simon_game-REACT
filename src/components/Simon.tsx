import React, { useEffect, useState } from 'react';
import '../css/simon.css';

function Simon() {
  const [round, setRound] = useState(1);
  const [sequence, setSequence] = useState<number[]>([1, 2, 3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerIsPlaying, setPlayerIsPlaying] = useState(false);
  const [player, setPlayer] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!playerIsPlaying) {
      const timeout = setTimeout(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [seconds, playerIsPlaying]);

  useEffect(() => {
    if (seconds === sequence.length - 1) {
      setPlayerIsPlaying(true);
      setSeconds(0);
    }
  }, [seconds, sequence]);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (playerIsPlaying) {
      const clickedDivId = parseInt(event.currentTarget.id);
      console.log('ID de la div cliquée :', clickedDivId);
  
      if (sequence[player - 1] === clickedDivId) {
        console.log('GOOD');
        if (player === sequence.length) {
          console.log('Good ! Niveau suivant');
          setRound(prevRound => prevRound + 1);
          setPlayer(1);
          Round(round + 1);
        } else {
          setPlayer(prevPlayer => prevPlayer + 1);
        }
      } else {
        console.log('ERREUR !!!');
        // Reset the game to round 1
        setSequence([]);
        setRound(1);
        Round(1); // Restart the game
      }
    }
  }
  

  function Round(round: number) {
    if (round !== sequence.length) {
      let randomColor = Math.floor(1 + Math.random() * (4 - 1));
      setSequence(prevSequence => [...prevSequence, randomColor]);
      setCurrentIndex(0);
      setPlayerIsPlaying(false);
    }
  }

  return (
    <>
      <h1 className='round'>Round: {round}</h1>
      <h2 className='timer'>{seconds}</h2>
      <div className='simon'>
        <div
          id='1'
          className='rouge'
          onClick={playerIsPlaying ? handleClick : undefined}
          style={{ backgroundColor: sequence[currentIndex] === 1 ? '#FF7777' : undefined }}
        ></div>
        <div
          id='2'
          className='bleu'
          onClick={playerIsPlaying ? handleClick : undefined}
          style={{ backgroundColor: sequence[currentIndex] === 2 ? '#33FFEC' : undefined }}
        ></div>
        <div
          id='3'
          className='vert'
          onClick={playerIsPlaying ? handleClick : undefined}
          style={{ backgroundColor: sequence[currentIndex] === 3 ? '#74FF33' : undefined }}
        ></div>
        <div
          id='4'
          className='jaune'
          onClick={playerIsPlaying ? handleClick : undefined}
          style={{ backgroundColor: sequence[currentIndex] === 4 ? '#E6FF97' : undefined }}
        ></div>
      </div>
    </>
  );
}

export default Simon;
