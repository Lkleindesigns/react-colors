import React from 'react'
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
  }
})

const DraggableColorBox = ({color, name}) => {
  const classes = styles()

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name}
    </div>
  )
}

export default DraggableColorBox
