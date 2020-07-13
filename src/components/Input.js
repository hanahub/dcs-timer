import React from 'react';

export default function Input({ setMin, setTimerStatus, setCurrentTime }) {
  const [num, setNum] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const startTimer = () => e => {
    if (num != null) {
      setTimerStatus('running');
      setCurrentTime(0);
      setMin(num);
    } else {
      setMessage('Please enter a number.');
    }
  }

  const handleChange = () => e => {
    setNum(e.target.value);
  }

  return (
    <div className="input">
      {message && <p>{message}</p>}
      <label>Countdown: </label>
      <input type="number" placeholder="(MIN)" onChange={handleChange()} />
      <button className="button" onClick={startTimer()}>Start</button>
    </div>
  )
}