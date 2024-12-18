export interface Room {
    hotelSlug: string;
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }
  
  export interface Host {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface Location {
    latitude: number;
    longitude: number;
  }
  
  export interface Hotel {
    id: string;
    hotelId: number;
    slug: string;
    title: string;
    description: string;
    images: string[];
    guestCount: number;
    bedroomCount: number;
    bathroomCount: number;
    amenities: string[];
    host: Host;
    address: string;
    location: Location;
    rooms: Room[];
    createdAt: string;
    updatedAt: string;
  }
  
  export type Hotels = Hotel[];