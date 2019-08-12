import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

const PaletteList = ({ palettes, history, removePalette }) => {
  const classes = styles();
  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              removePalette={removePalette}
              handleClick={() => goToPalette(palette.id)}
              key={palette.id}
              id={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteList;
