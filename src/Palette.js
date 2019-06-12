import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from './Navbar'
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex")

  const changeLevel = level => {
    setLevel(level);
  };

  const changeFormat = (val) => {
    setFormat(val)
  }

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox background={color[format]} name={color.name} />
  ));
  
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
      {/* Nav goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;
