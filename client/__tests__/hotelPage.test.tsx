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
  images: ['/images/hotel1.jpg'],
};

global.fetch = jest.fn();

const setupTest = (mockData = mockHotel) => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockData),
  });
};

describe('HotelDetailsPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetches and displays hotel data', async () => {
    setupTest();
    render(await HotelDetailsPage({ params: { id: '1' } }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Grand Hotel', level: 1 })).toBeInTheDocument();
    });

    expect(screen.getByText('Luxurious stay in the heart of the city')).toBeInTheDocument();
  });

  it('generates correct metadata when hotel data is fetched', async () => {
    setupTest();
    const metadata = await generateMetadata({ params: { id: '1' } });

    expect(metadata).toEqual({
      title: 'Grand Hotel - Hotel Booking',
      description: 'Discover details about Grand Hotel, a premier choice for accommodation.',
    });
  });
});