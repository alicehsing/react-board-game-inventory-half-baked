import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Email', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders Email', () => {
//   const linkElement = true;
//   expect(linkElement).toBeTruthy();
// });