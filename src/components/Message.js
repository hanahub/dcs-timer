import React from 'react';

export default function Message({min, currentTime}) {
  const getTimerMessage = () => {
    if (currentTime === min * 60) return "Time's up!";
    if (currentTime > min * 30) return 'More than halfway there!';
  }

  return (
    <div className="message">
      {getTimerMessage()}
    </div>
  )
}