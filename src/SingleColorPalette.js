import React, { useState } from "react";
import { Link } from 'react-router-dom'
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
      key={color.name}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <div className="SingleColorPalette Palette">
      <Navbar
        changeFormat={changeFormat}
        showingAllColors={false}
      />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${palette.id}`} className="back-button">Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default SingleColorPalette;
