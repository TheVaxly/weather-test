import { render, screen, waitFor } from '@testing-library/react';
import { createMockServer } from './creatMockServer';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Weather Application tests', () => {
  let server;
  beforeEach(() => {
    server = createMockServer();
  });
  afterEach(() => {
    server.shutdown();
  });
  it('renders Weather Application title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather Application/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('shows city search result', async () => {
    render(<App />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5));
  });
});