import React, { useEffect, useState } from 'react';
import '../css/simon.css';

function Simon() {
  const [round, setRound] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerIsPlaying, setPlayerIsPlaying] = useState(false)
  const [player, setPlayer] = useState(1)
  const [seconds, setSeconds] = useState(0);
  

useEffect(() => {
  
  if(playerIsPlaying == false){
    Round(round)
   setTimeout(() => {
      setSeconds(seconds + 1);
        setCurrentIndex(currentIndex+1)
    }, 1000);

  }
}, [seconds])

if(seconds == sequence.length -1){
  setPlayerIsPlaying(true)
  setSeconds(0)
}

function handleClick(event: React.MouseEvent<HTMLDivElement>) {
  if(playerIsPlaying == true){
    console.log("C'est au tour du joueur !")

    const clickedDivId = parseInt(event.currentTarget.id);
    console.log('ID de la div cliquée :', clickedDivId);

    if(sequence[player - 1] == clickedDivId){
      if(sequence[player - 1] == sequence.length){
        console.log("Good ! Niveau suivant")
        setRound(round+1)
        Round(round)
      }
      console.log("GOOD")
    }else{
      console.log("ERREUR !!!")
      setSequence([])

    }
    setPlayer(player+1)
      
  }
}


function Round(round: number){
  if(round != sequence.length){
    let randomColor = Math.floor(1 + Math.random() * (4 - 1)) 
    setSequence(sequence => [...sequence, randomColor])
    setPlayerIsPlaying(false)
  }

}



  return (
    <>
    <h1 className='round'>Round : {round}</h1>
    <h2 className='timer'>{seconds}</h2>
      <div className='simon'>
        
        <div id="1" className='rouge' onClick={ playerIsPlaying == true ? handleClick : undefined} style={{backgroundColor: sequence[currentIndex] === 1 ? '#FF7777' : undefined}}>
        </div>
        <div id="2" className='bleu' onClick={ playerIsPlaying == true ? handleClick : undefined} style={{backgroundColor: sequence[currentIndex] === 2 ? '#33FFEC' : undefined}}>
        </div>
        <div id="3" className='vert' onClick={ playerIsPlaying == true ? handleClick : undefined} style={{backgroundColor: sequence[currentIndex] === 3 ? '#74FF33' : undefined}}>
        </div>
        <div id="4" className='jaune' onClick={ playerIsPlaying == true ? handleClick : undefined} style={{backgroundColor: sequence[currentIndex] === 4 ? '#E6FF97' : undefined}}>
        </div>
      </div>
    </>
  );
}

export default Simon;
