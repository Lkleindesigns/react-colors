import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.2s ease-in-out"
  }
})

const DraggableColorBox = ({color, name, handleClick}) => {
  const classes = styles()

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
      </div>

    </div>
  )
}

export default DraggableColorBox
