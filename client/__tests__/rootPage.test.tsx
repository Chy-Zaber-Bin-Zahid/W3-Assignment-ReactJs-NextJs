import { render, screen, waitFor } from '@testing-library/react';
import HotelsPage from '@/app/page';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

// Mock `notFound` function while keeping other parts of the module intact
jest.mock('next/navigation', () => {
  // Get the actual implementation
  const actualNavigation = jest.requireActual('next/navigation');
  
  // Return a new object by merging actualNavigation with the mocked notFound function
  return Object.assign({}, actualNavigation, {
    notFound: jest.fn(), // Mocks only the notFound function
  });
});

const notFound = require('next/navigation').notFound;

// Mock data
const mockHotels = [
  {
    id: 1,
    slug: 'hotel-1',
    hotelId: '123',
    title: 'Hotel One',
    address: '123 Street, City',
    rooms: [{ id: 'room1' }, { id: 'room2' }],
  },
  {
    id: 2,
    slug: 'hotel-2',
    hotelId: '456',
    title: 'Hotel Two',
    address: '456 Avenue, City',
    rooms: [{ id: 'room1' }],
  },
];

describe('HotelsPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders hotels fetched from API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockHotels),
        status: 200,
        statusText: 'OK',
        headers: new Headers(),
        redirected: false,
      } as Response)
    );

    render(await HotelsPage());

    await waitFor(() => {
      expect(screen.getByText('Our Hotels')).toBeInTheDocument();
    });

    expect(screen.getByText('Hotel One')).toBeInTheDocument();
    expect(screen.getByText('Hotel Two')).toBeInTheDocument();
  });

  it('renders error state when API fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        headers: new Headers(),
        redirected: false,
      } as Response)
    );

    render(await HotelsPage());

    await waitFor(() => {
      expect(notFound).toHaveBeenCalled();
    });
  });

  it('generates correct links for hotels', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockHotels),
        status: 200,
        statusText: 'OK',
        headers: new Headers(),
        redirected: false,
      } as Response)
    );

    render(await HotelsPage());

    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links[0]).toHaveAttribute('href', '/hotel-details/hotel-1/123');
      expect(links[1]).toHaveAttribute('href', '/hotel-details/hotel-2/456');
    });
  });
});
