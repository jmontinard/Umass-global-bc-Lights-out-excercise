import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  // Decide on initial configuration
  const nrows = 5;
  const ncols = 5;
  const chanceLightStartsOn = 0.25;

  return (
    <div className="App">
      <Board nrows={nrows} ncols={ncols} chanceLightStartsOn={chanceLightStartsOn} />
    </div>
  );
}

export default App;
