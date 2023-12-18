// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Cell from "./Cell";

// test("renders a Cell properly", () => {
//   const { container } = render(<Cell />);
//   expect(container.firstChild).toBeInTheDocument();

//   // Snapshot test
//   expect(container).toMatchSnapshot();
// });

// test("handles click event properly", () => {
//   const mockClickHandler = jest.fn();
//   const { container } = render(<Cell flipCellsAroundMe={mockClickHandler} />);

//   // Find the cell (you may need to adjust this based on your component structure)
//   const cell = container.querySelector(".MuiBox-root");

//   // Click the cell
//   fireEvent.click(cell);

//   // Add assertions to ensure that the click handler is called
//   expect(mockClickHandler).toHaveBeenCalledTimes(1);

//   // Snapshot test
//   expect(container).toMatchSnapshot();
// });

// // Smoke test
// test("renders without errors", () => {
//   const mockClickHandler = jest.fn();
//   render(<Cell flipCellsAroundMe={mockClickHandler} />);
// });

import React from 'react';
import { render } from '@testing-library/react';
import Cell from './Cell';
import renderer from 'react-test-renderer';

// Smoke Test
it('renders Cell without crashing', () => {
  render(<Cell isLit={false} flipCellsAroundMe={() => {}} />);
});

// Snapshot Test
it('matches snapshot for lit cell', () => {
  const tree = renderer.create(<Cell isLit={true} flipCellsAroundMe={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot for unlit cell', () => {
  const tree = renderer.create(<Cell isLit={false} flipCellsAroundMe={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Test rendering a Cell properly
it('renders lit Cell correctly', () => {
  const { container } = render(<Cell isLit={true} flipCellsAroundMe={() => {}} />);
  expect(container.firstChild).toHaveStyle(`backgroundColor: white`);
});

it('renders unlit Cell correctly', () => {
  const { container } = render(<Cell isLit={false} flipCellsAroundMe={() => {}} />);
  expect(container.firstChild).toHaveStyle(`backgroundColor: darkgray`);
});
