import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";

function App() {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    function syncLocalStorage() {
      localStorage.setItem("palettes", JSON.stringify(palettes))
    }
    
    syncLocalStorage()
  }, [palettes])

  const findPalette = id => {
    return palettes.find(function(palette) {
      return palette.id === id;
    });
  };

  function savePalette(newPalette) {
    setPalettes([...palettes, newPalette]);

  }



  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={routeProps => (
          <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>

    // <div >
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
