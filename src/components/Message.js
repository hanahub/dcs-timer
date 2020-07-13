import React from 'react';

export default function Message({min, currentTime, timerStatus}) {
  const getTimerMessage = () => {
    if (currentTime > min * 30) return 'More than halfway there!';
    if (currentTime === min * 60) return "Time's up!";
  }

  return (
    <div className="message">
      {getTimerMessage()}
    </div>
  )
}