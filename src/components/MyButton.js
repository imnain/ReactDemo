import React from 'react';
import { useState } from 'react';
import './MyButton.css'; // Import the CSS file

function MyButton({ variant, label }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const [buttonColor, setButtonColor] = useState('blue');
  function handleClickChangeColor(){
    setButtonColor('red');
  }

  const buttonClass =
    variant === 'primary'
      ? 'primary-button'
      : variant === 'secondary'
      ? 'secondary-button'
      : variant === 'success'
      ? 'success-button'
      : variant === 'danger'
      ? 'danger-button'
      : '';

  return (
  <div>
    <button onClick={handleClick} className={`my-button ${buttonClass}`}>
      {label} - Clicked {count} times
    </button>
    <button
        onClick={handleClickChangeColor}
        style={{ backgroundColor: buttonColor }}
    >
        Button
    </button>
    </div>
  );
}

export default MyButton;
