import HotelDetailsPage, { generateMetadata } from '@/app/hotel-details/[slug]/[id]/page';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  notFound: jest.fn(),
}));

const mockHotel = {
  id: '1',
  title: 'Grand Hotel',
  description: 'Luxurious stay in the heart of the city',
  address: '123 Main Street, City Center',
  rooms: [
    { id: 'room1', type: 'Deluxe Room', price: 200 },
    { id: 'room2', type: 'Suite', price: 400 },
  ],
  images: ['/images/hotel1.jpg'], // Assuming you are testing with an image array
};

// Mock fetch to prevent API calls during testing
global.fetch = jest.fn();

describe('HotelDetailsPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and displays hotel data', async () => {
    // Mock the API response for successful fetch
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockHotel),
    });

    // Render the page component
    render(await HotelDetailsPage({ params: { id: '1' } }));

    // Wait for the hotel title to appear on the page
    await waitFor(() => {
      expect(screen.getByText('Grand Hotel')).toBeInTheDocument();
    });

    // Check for other specific hotel data
    expect(screen.getByText('Luxurious stay in the heart of the city')).toBeInTheDocument();
    expect(screen.getByText('123 Main Street, City Center')).toBeInTheDocument();
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument();
    expect(screen.getByText('Suite')).toBeInTheDocument();
  });

  it('generates correct metadata when hotel data is fetched', async () => {
    // Mock a successful fetch response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockHotel),
    });

    // Call generateMetadata to check the returned metadata
    const metadata = await generateMetadata({ params: { id: '1' } });

    // Check if metadata matches the expected values
    expect(metadata).toEqual({
      title: 'Grand Hotel - Hotel Booking',
      description: 'Discover details about Grand Hotel, a premier choice for accommodation.',
    });
  });
});
