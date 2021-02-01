import React, {useState} from 'react';
import './ColoBox.css';

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'yellow', 'green', 'blue', 'black'];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'deeppink';
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    console.log(newColor);
    setColor(newColor);

    localStorage.setItem('box-color', newColor);
  }
  return (
    <div
      className="color-box"
      style={{backgroundColor: color}}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
