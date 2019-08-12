import React, { useState, useEffect } from "react";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const PaletteMetaForm = ({ palettes, handleSubmit, hideForm }) => {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [stage , setStage] = useState("form")

  useEffect(() =>
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  );

  function savePalette(emoji) {
    const newPalette = {paletteName: newPaletteName, emoji: emoji.native}
    handleSubmit(newPalette)
    setStage("")
  }

  return (
    <>
    <Dialog open={stage === 'emoji'} onClose={hideForm}>
      <DialogTitle id="form-emoji-title">Pick a Palette Emoji</DialogTitle>
      <Picker title="Pick a Palette Emoji" onSelect={savePalette} />
    </Dialog>
    <Dialog open={stage === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => setStage('emoji')}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. Make sure it's unique!
          </DialogContentText>
        

          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            onChange={e => setNewPaletteName(e.target.value)}
            fullWidth
            margin="normal"
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter Palette Name", "Name already used"]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
    </>
  );
};

export default PaletteMetaForm;
