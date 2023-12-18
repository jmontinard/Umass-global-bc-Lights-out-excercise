import React from "react";
import { Box } from "@mui/material";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

// function Cell({ flipCellsAroundMe, isLit }) {
//   const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
//   return <td className={classes} onClick={flipCellsAroundMe} />;
// }

// export default Cell;


function Cell({ flipCellsAroundMe, isLit }) {
  const cellStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: isLit ? "white" : "darkgray",
    cursor: "pointer",
    borderRadius: "8px", // Add rounded corners
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <Box style={cellStyle} onClick={flipCellsAroundMe} />;
}

export default Cell;