import { render, screen, waitFor } from '@testing-library/react';
import { createMockServer } from './createMockServer';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { within } from '@testing-library/react';
import WeatherCard from './components/WeatherCard';

let server;
  beforeEach(() => {
    server = createMockServer();
  });
  afterEach(() => {
    server.shutdown();
  });

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
  it('shows city search result details', async () => {
    render(<App />);
  
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');
  
    const button = screen.getByTestId('search-button');
    userEvent.click(button);
  
    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5));
    
    const searchResults = screen.getAllByText(/Melbourne/i);
    const melbourneResult = searchResults[0].closest('.search-result');
  
    expect(melbourneResult).toBeInTheDocument();
    expect(within(melbourneResult).getByText(/-37.8142454/i)).toBeInTheDocument();
    expect(within(melbourneResult).getByText(/144.9631732/i)).toBeInTheDocument();
  });  
  it('add search result to my weather list', async () => {
    render(<App />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5));

    const selected = screen.getAllByText(/Melbourne/i)[3];
    act(() => {
      userEvent.click(selected);
    });

    expect(within(screen.getByTestId('my-weather-list')).getByText(/Melbourne/i)).toBeInTheDocument();

    expect(screen.queryByTestId('search-results')).not.toBeInTheDocument();
  });
});

describe('WeatherCard component tests', () => {
  it('renders city component', () => {
    const city = {
      name: 'Melbourne',
      country: 'Australia',
      state: 'Victoria',
      lat: 0,
      lon: 0,
    };

    render(<WeatherCard city={city} />);
    expect(screen.getByText(12.59)).toBeInTheDocument();
  });
});