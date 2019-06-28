import React, { useState } from "react";
import PaletteFooter from './PaletteFooter'
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import styles from './styles/PaletteStyles'


const Palette = ({ palette }) => {
  const { colors, paletteName, emoji } = palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const classes = styles()

  const changeLevel = level => {
    setLevel(level);
  };

  const changeFormat = val => {
    setFormat(val);
  };

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${palette.id}/${color.id}`}
      showingFullPalette
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
        showingAllColors
      />

      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />

    </div>
  );
};

export default Palette;
