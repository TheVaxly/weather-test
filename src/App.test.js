import { render, screen } from '@testing-library/react';
import App from './App';

describe('Weather Application tests', () => {
  it('renders Weather Application title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather Application/i);
    expect(linkElement).toBeInTheDocument();
  });
});