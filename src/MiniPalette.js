import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  main: {
    backgroundColor: "purple",
    border: '3px solid teal',
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "white",
      "& span": {
        backgroundColor: "yellow"
      }
    }
  }
})

const MiniPalette = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>Mini Palette<span>flkajlfkja</span></h1>
      </section>
      <span>Not inside</span>
    </div>
  )
}

export default MiniPalette
