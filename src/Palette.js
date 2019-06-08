import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from './Navbar'
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const changeLevel = level => {
    setLevel(level);
  };

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      {/* Nav goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
