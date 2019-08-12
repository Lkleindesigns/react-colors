import React from "react";
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

const MiniPalette = ({ paletteName, emoji, colors, handleClick, openDeleteDialog, id }) => {
  const classes = styles();

  function deletePalette(e) {
    e.stopPropagation()
    openDeleteDialog(id)
  }

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette}/>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default MiniPalette;
