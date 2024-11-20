import Image from "next/image";
import { Hotel } from '@/types/hotel'

interface PropertyDetails {
    hotel: Hotel
  }

export default function Property({ hotel }: PropertyDetails) {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">About this property</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl mb-4">{hotel.title}</h2>
          <p className="text-gray-600 mb-6">
            {hotel.description}
          </p>
        </div>

        <div>
          <p className="mb-2">-- THE PROPERTY --</p>
          <p>CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided</p>
          <p>Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin Bed</p>
          <p>HOME HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer</p>
          <p>KITCHEN: Fridge, stove, coffee maker, microwave, cooking basics, toaster, dishware/flatware, trash bags/paper towels</p>
          <p>GENERAL: Free WiFi, central heating, linens/towels, keyless entry, hair dryer, ceiling fans</p>
          <p>PARKING: Driveway (2 vehicles), RV parking allowed</p>
        </div>

        <div>
          <p className="mb-2">-- THE LOCATION --</p>
          <p>GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles), Glacier Gardens Adventure (10 miles), Glacier (10 miles), Twin Lakes (15 miles)</p>
          <p>THINGS TO DO: Golf (8 miles), Diamond Park Aquatic Center (8 miles), Riverside Rotary Park (9 miles), Alaska State Museum (10 miles), Last Chance Mining Museum (18 miles), AJ Mine Gastineau Mill Tours (20 miles)</p>
          <p>LOCAL FARE: Forbidden Peak Brewery (5 miles), The Grind Coffee Company (7 miles), Four Plates (7 miles), Sandbar & Grill (7 miles), Bistro (8 miles), Donna&apos;s Restaurant (9 miles), Alaskan Brewing Co. (13 miles)</p>
          <p>AIRPORT: Juneau International Airport (9 miles)</p>
        </div>

        <div>
          <p className="mb-2">-- REST EASY WITH US --</p>
          <p>Evolve makes it easy to find and book properties you&apos;ll never want to leave. You can relax knowing that our properties will always be ready for you and that we&apos;ll answer the phone 24/7. Even better, if anything is off about your stay, we&apos;ll make it right. You can count on our homes and our people to make you feel welcome--because we know what vacation means to you.</p>
        </div>

        <div>
          <p className="mb-2">-- POLICIES --</p>
          <p>- No smoking</p>
          <p>- No pets allowed</p>
          <p>- No events, parties, or large gatherings</p>
          <p>- Must be at least 25 years old to book</p>
          <p>- Additional fees and taxes may apply</p>
          <p>- Photo ID may be required upon check-in</p>
          <p>- NOTE: The property requires stairs to access</p>
          <p>- NOTE: The property does not have air conditioning</p>
          <p>- NOTE: The property sleeps 3 guests in 2 beds, with room for 4 total by using the full floor mattress</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Property manager</h3>
          <div className="flex flex-col items-start justify-center gap-2">
            <Image src="/images/card.png" alt="Property Logo" width={120} height={120} />
            <div>
              <div>{hotel?.host?.name}</div>
              <div className="text-sm text-gray-600 mt-1">
                Languages
              </div>
              <div className="text-sm text-gray-600">
                English, French, German, Spanish
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}