import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import PaletteFooter from './PaletteFooter'
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

const styles = makeStyles({
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%",
  }
})


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
