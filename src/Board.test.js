
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Board from './Board';
import renderer from 'react-test-renderer';

// Mock Math.random to return 0 (all lights off) to make the board predictable
beforeEach(() => {
  jest.spyOn(Math, 'random').mockReturnValue(0);
});

afterEach(() => {
  Math.random.mockRestore();
});

// Smoke Test and rendering the starter Board
it('renders Board without crashing and matches snapshot', () => {
  const { container } = render(<Board />);
  expect(container).toBeInTheDocument();
  const tree = renderer.create(<Board />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Handling cell-clicking
it('flips the correct cells when a cell is clicked', () => {
  const { getAllByRole } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
  const cells = getAllByRole('button');
  // Click the center cell
  fireEvent.click(cells[4]);

  // The center cell and its adjacent cells should now be lit
  expect(cells[1]).toHaveStyle('backgroundColor: white'); // top
  expect(cells[3]).toHaveStyle('backgroundColor: white'); // left
  expect(cells[4]).toHaveStyle('backgroundColor: white'); // center
  expect(cells[5]).toHaveStyle('backgroundColor: white'); // right
  expect(cells[7]).toHaveStyle('backgroundColor: white'); // bottom
});

/* Checking for a win and showing a "You won!" message */
it('displays "You Won!" message when all cells are unlit', () => {
    jest.spyOn(Math, 'random').mockReturnValue(1); // Start with all lights on
    render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
  const cells = screen.getAllByRole('cell'); // or getByClassName, etc.

  // Click to flip all cells to off
  cells.forEach((cell) => {
    fireEvent.click(cell);
  });
  // The "You Won!" message should be displayed
  expect(screen.getByText('You Won!')).toBeInTheDocument();
});


