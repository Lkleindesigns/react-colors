import React from "react";
import styles from './styles/PaletteFooterStyles'

  const PaletteFooter = ({paletteName, emoji}) => {
    const classes = styles()

    return (
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    );
  };



export default PaletteFooter;
