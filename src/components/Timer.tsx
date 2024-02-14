import React, { useState, useEffect } from 'react';

const Timer = ({ onTick }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        // Appeler la fonction de rappel à chaque tick du minuteur
        onTick(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, seconds, onTick]);

  return (
    <div className='time'>
      {seconds}
    </div>
  );
};

export default Timer;
