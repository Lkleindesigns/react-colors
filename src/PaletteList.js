import React from "react";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";

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
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
              <MiniPalette
                {...palette}
                removePalette={removePalette}
                handleClick={() => goToPalette(palette.id)}
                key={palette.id}
                id={palette.id}
              />
              </CSSTransition>
            ))}
          </TransitionGroup>
      </div>
    </div>
  );
};

export default PaletteList;
