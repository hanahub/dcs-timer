import React from 'react';

export default function Speed(props) {
  const { speeds, currentSpeed, setCurrentSpeed } = props;
  console.log(currentSpeed);
  const handleSpeedChange = s => e => {
    setCurrentSpeed(s);
  }

  const handleSpeedButtonChange = s => e => {
    setCurrentSpeed(s);
  }

  return (
    <div className="speed">
      {speeds.map((s, key) => (
        <div key={key}>
          <input
            name="speed"
            type="radio"
            onChange={handleSpeedChange(s)}
            value={s}
            checked={currentSpeed === s}
          />
          <button onClick={handleSpeedButtonChange(s)}>{s}X</button>
        </div>
      ))}
    </div>
  )
}