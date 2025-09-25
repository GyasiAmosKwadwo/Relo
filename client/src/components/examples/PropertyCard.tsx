import PropertyCard from '../PropertyCard';
import apartmentImage from "@assets/generated_images/Featured_apartment_interior_15574472.png";
import hostelImage from "@assets/generated_images/Student_hostel_room_0c5d0447.png";
import hotelImage from "@assets/generated_images/Hotel_room_showcase_869cb115.png";

export default function PropertyCardExample() {
  //todo: remove mock functionality
  const mockProperties = [
    {
      id: "1",
      title: "Modern 2BR Apartment in East Legon",
      location: "East Legon, Accra",
      price: 2500,
      rating: 4.8,
      reviewCount: 24,
      imageUrl: apartmentImage,
      propertyType: "apartment" as const,
      amenities: ["wifi", "parking", "security"],
      bedrooms: 2,
      bathrooms: 2,
      isAvailable: true
    },
    {
      id: "2", 
      title: "University of Ghana Hostel Bed",
      location: "Legon, Accra",
      price: 800,
      period: "semester",
      rating: 4.2,
      reviewCount: 156,
      imageUrl: hostelImage,
      propertyType: "hostel" as const,
      amenities: ["wifi", "study_room", "cafeteria"],
      isAvailable: true
    },
    {
      id: "3",
      title: "Luxury Hotel Suite Downtown",
      location: "Osu, Accra", 
      price: 350,
      period: "night",
      rating: 4.9,
      reviewCount: 89,
      imageUrl: hotelImage,
      propertyType: "hotel" as const,
      amenities: ["wifi", "breakfast", "gym"],
      bedrooms: 1,
      bathrooms: 1,
      isAvailable: false
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Property Card Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
            onFavorite={(id) => console.log('Favorited:', id)}
            onClick={(id) => console.log('Clicked:', id)}
          />
        ))}
      </div>
    </div>
  );
}