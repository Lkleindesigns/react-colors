import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css'

function App() {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    function syncLocalStorage() {
      localStorage.setItem("palettes", JSON.stringify(palettes));
    }

    syncLocalStorage();
  }, [palettes]);

  const findPalette = id => {
    return palettes.find(function(palette) {
      return palette.id === id;
    });
  };

  function savePalette(newPalette) {
    setPalettes([...palettes, newPalette]);
  }

  function removePalette(id) {
    setPalettes(st => st.filter(palette => palette.id !== id));
  }

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={routeProps => (
                  <div className="page">
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                render={routeProps => (
                  <div className="page">
                    <PaletteList
                      palettes={palettes}
                      removePalette={removePalette}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <div className="page">
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
