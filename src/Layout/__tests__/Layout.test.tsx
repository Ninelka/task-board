import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('Layout component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders 3 columns', () => {
    const columns = screen.getAllByTestId('column');
    expect(columns.length).toEqual(3);
  });

  test('One column with title "Нужно"', () => {
    const title = screen.getByRole('heading', { name: 'Нужно' });
    expect(title).toBeInTheDocument();
  });
  test('One column with title "В работе"', () => {
    const title = screen.getByRole('heading', { name: 'В работе' });
    expect(title).toBeInTheDocument();
  });
  test('One column with title "Выполнено"', () => {
    const title = screen.getByRole('heading', { name: 'Выполнено' });
    expect(title).toBeInTheDocument();
  });
  test('First column has btn to create new task', () => {
    const btn = screen.getByRole('button', { name: 'Создать задачу' });
    expect(btn).toBeInTheDocument();
  });
});
