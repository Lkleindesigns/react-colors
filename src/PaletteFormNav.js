import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from './styles/PaletteFormNavStyles'
import clsx from "clsx";

const PaletteFormNav = ({ open, palettes, handleSubmit, handleDrawerOpen }) => {
  const classes = styles();
  const [formShowing, setFormShowing] = React.useState(false);

  function hideForm() {
    setFormShowing(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {[classes.hide]: open})}
          >
            <AddToPhotos />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create a Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Link >
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => setFormShowing(true)}
          >
            Save
          </Button>
        </div>
      </AppBar>

      {formShowing ? (
        <PaletteMetaForm palettes={palettes} hideForm={hideForm} handleSubmit={handleSubmit} />
      ) : null}
    </div>
  );
};

export default PaletteFormNav;
