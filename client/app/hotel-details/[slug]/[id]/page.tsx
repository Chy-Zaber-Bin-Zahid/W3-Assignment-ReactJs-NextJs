import { notFound } from 'next/navigation';
import { Hotel } from '@/types/hotel';
import ClientHotelDetails from '@/components/hotelDetails/ClientHotelDetails';

// Fetch hotel data
async function getHotel(id: string): Promise<Hotel> {
  const res = await fetch(`http://localhost:3001/api/hotel/${id}`, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error('Failed to fetch hotel data');
  }

  return res.json();
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const hotel = await getHotel(params.id);
    return {
      title: `${hotel.title} - Hotel Booking`,
      description: `Discover details about ${hotel.title}, a premier choice for accommodation.`,
    };
  } catch {
    return {
      title: 'Hotel Not Found - Hotel Booking',
      description: 'The requested hotel does not exist or is currently unavailable.',
    };
  }
}

export default async function HotelDetailsPage({ params }: { params: { id: string } }) {
  let hotel: Hotel;

  try {
    hotel = await getHotel(params.id);
  } catch (error) {
    console.error('Error fetching hotel data:', error);
    notFound();
  }

  return <ClientHotelDetails hotel={hotel} />;
}
