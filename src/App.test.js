import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const title = screen.getByText(/mini dictionary/i);
  expect(title).toBeInTheDocument();
});
