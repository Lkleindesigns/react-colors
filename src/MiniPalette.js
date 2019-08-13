import React from "react";
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

const MiniPalette = React.memo(({ paletteName, emoji, colors, goToPalette, openDeleteDialog, id }) => {
  const classes = styles();
  const renders = React.useRef(0)

  function deletePalette(e) {
    e.stopPropagation()
    openDeleteDialog(id)
  }

  function handleClick() {
    goToPalette(id)
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
        {paletteName} {renders.current++} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}, (prevProps, nextProps) => {
  if(prevProps.goToPalette !== nextProps.goToPalette && prevProps.openDeleteDialog !== nextProps.openDeleteDialog) {
    return true
  }

  return false
});

export default MiniPalette;
