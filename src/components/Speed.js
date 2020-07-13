import React from 'react';

export default function Speed(props) {
  const { speeds, currentSpeed, setCurrentSpeed } = props;
  
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
            value={s}
          />
          <button className={currentSpeed === s ? 'checked' : ''} onClick={handleSpeedButtonChange(s)}>{s}X</button>
        </div>
      ))}
    </div>
  )
}