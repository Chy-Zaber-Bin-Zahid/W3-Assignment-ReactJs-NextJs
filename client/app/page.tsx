import { Hotels } from '@/types/hotel'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "This is a hotel booking website",
};

async function getHotels(): Promise<Hotels> {
  const res = await fetch('http://localhost:3001/api/hotel', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch hotels')
  }
  return res.json()
}

export default async function HotelsPage() {
  let hotels: Hotels

  try {
    hotels = await getHotels()
  } catch (error) {
    console.error('Error fetching hotels:', error)
    notFound()
  }

  return (
    <div className="py-12 px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 text-center w-full">Our Hotels</h1>
        </div>
        <ul className="bg-blue-50 shadow overflow-hidden sm:rounded-md">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="border-b border-gray-200 last:border-b-0">
              <Link href={`/hotel-details/${hotel.slug}/${hotel.hotelId}`} className="block hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium text-indigo-600 truncate">{hotel.title}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {hotel.rooms.length} room{hotel.rooms.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {hotel.address}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}