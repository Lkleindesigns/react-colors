import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import styles from './styles/ColorPickerFormStyles'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

const ColorPickerForm = ({paletteIsFull, addNewColor, colors}) => {
  const [currentColor, setCurrentColor] = useState("teal");
  const [newColorName, setNewColorName] = useState("");
  const classes = styles()

  useEffect(() =>
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    )
  );

  useEffect(() =>
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colors.every(({ color }) => color !== currentColor)
    )
  );

  const updateCurrentColor = newColor => setCurrentColor(newColor.hex);

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    addNewColor(newColor)
    setNewColorName('')
  }

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          value={newColorName}
          className={classes.colorNameInput}
          variant="filled"
          margin="normal"
          placeholder="Color Name"
          onChange={e => setNewColorName(e.target.value)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!"
          ]}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={paletteIsFull}
          className={classes.addColor}
          style={{
            backgroundColor: paletteIsFull ? "lightgrey" : currentColor
          }}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
