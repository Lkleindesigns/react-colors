import React, { useState } from "react";
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import ColorBox from "./ColorBox";

const SingleColorPalette = ({ palette, colorId }) => {
  const [format, setFormat] = useState('hex')

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const _shades = gatherShades(palette, colorId);

  const changeFormat = val => {
    setFormat(val);
  };

  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        changeFormat={changeFormat}
        showingAllColors={false}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default SingleColorPalette;
