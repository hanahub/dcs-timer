import React, { useEffect } from 'react';
import { Input, Message, Timer, Speed } from './';

export default function Countdown() {
  const speeds = [1, 1.5, 2];
  const [min, setMin] = React.useState(null);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [timerStatus, setTimerStatus] = React.useState('initial');
  const [currentSpeed, setCurrentSpeed] = React.useState(1);
  
  useEffect(() => {
    let timerId = 0;
    if (timerStatus === 'running' && min > 0 && currentTime < min * 60) {
      timerId = setInterval(() => {
        setCurrentTime(currentTime + 1);
      }, 1000 / currentSpeed);
    }

    if (min > 0 && currentTime === min * 60) setTimerStatus('ended');
    return () => {
      clearInterval(timerId);
    }
  });

  return (
    <div className="countdown-box">
      <Input
        setMin={setMin}
        setTimerStatus={setTimerStatus}
        setCurrentTime={setCurrentTime}
      />

      {timerStatus === 'running' && <Message
        min={min}
        currentTime={currentTime}
      />}

      <Timer
        min={min}
        timerStatus={timerStatus}
        setTimerStatus={setTimerStatus}
        currentTime={currentTime}
      />

      <Speed
        speeds={speeds}
        currentSpeed={currentSpeed}
        setCurrentSpeed={setCurrentSpeed}
      />
    </div>
  );
}