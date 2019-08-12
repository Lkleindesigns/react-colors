import React from "react";
import MiniPalette from "./MiniPalette";
import Avatar from '@material-ui/core/Avatar';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import styles from "./styles/PaletteListStyles";
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";

const PaletteList = ({ palettes, history, removePalette }) => {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [deletingId, setDeletingId] = React.useState("")
  const classes = styles();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  function openDeleteDialog(id) {
    setOpenDialog(true)
    setDeletingId(id)
  }

  function closeDeleteDialog() {
    setOpenDialog(false)
    setDeletingId("")
  }

  function handleDelete() {
    removePalette(deletingId)
    setOpenDialog(false)
    setDeletingId("")
  }

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
                openDeleteDialog={openDeleteDialog}
                handleClick={() => goToPalette(palette.id)}
                key={palette.id}
                id={palette.id}
              />
              </CSSTransition>
            ))}
          </TransitionGroup>
      </div>
      <Dialog open={openDialog} aria-labelledby="delete-dialog-title" onClose={closeDeleteDialog}>
        <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDeleteDialog}> 
            <ListItemAvatar>
            <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default PaletteList;
