import React from 'react';

export default function Timer(props) {
  const { min, timerStatus, setTimerStatus, currentTime } = props;
  const getTimerText = () => {
    const m = Math.floor(currentTime / 60);
    const s = currentTime % 60;

    const _m = m < 10 ? `0${m}` : `${m}`;
    const _s = s < 10 ? `0${s}` : `${s}`;

    return `${_m}:${_s}`;
  }

  const timeClassName = () => {
    if (min === null) return 'initial';
    if (min * 60 === currentTime) return 'ended';
    if (min * 60 - currentTime <= 10) return 'blink';
    if (min * 60 - currentTime <= 20) return 'red';
    return 'initial';
  }

  const handlePause = () => {
    if (timerStatus === 'ended') return;
    if (timerStatus === 'running') {
      setTimerStatus('paused');
    } else {
      setTimerStatus('running');
    }
  }
  console.log(timerStatus);
  return (
    <div className="timer">
      <label className={timeClassName()}>{getTimerText()}</label>
      {timerStatus !== 'initial' && (
        <button onClick={handlePause} className={`play-button ${timerStatus}`}></button>
      )}
    </div>
  )
}