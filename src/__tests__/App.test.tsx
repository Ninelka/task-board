import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('App renders successfully', () => {
  render(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
