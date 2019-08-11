import React from 'react'
import styles from './styles/DraggableColorBoxStyles'
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc'

const DraggableColorBox = SortableElement(({color, name, handleClick}) => {
  const classes = styles()

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
      </div>

    </div>
  )
})

export default DraggableColorBox
