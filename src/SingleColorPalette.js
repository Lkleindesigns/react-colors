import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from "./ColorBox";

const styles = makeStyles({
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3);",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: " uppercase",
      border: "none",
      textDecoration: "none"
    }
  }
});

const SingleColorPalette = ({ palette, colorId }) => {
  const [format, setFormat] = useState("hex");
  const classes = styles();

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
      showingFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar changeFormat={changeFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default SingleColorPalette;
