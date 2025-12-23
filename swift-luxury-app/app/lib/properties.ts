export interface Property {
    id: string;
    title: string;
    location: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    description: string;
    images: string[];
    amenities: string[];
    available: boolean;
    createdAt: string;
}

export const sampleProperties: Property[] = [
    {
        id: '1',
        title: 'Ocean View Villa',
        location: 'Kailua-Kona, Hawaii',
        price: 5500,
        beds: 4,
        baths: 3,
        sqft: 3200,
        description: 'Stunning ocean view villa with panoramic views of the Pacific. Features modern amenities, spacious living areas, and a private pool. Perfect for families seeking luxury coastal living.',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
        ],
        amenities: ['Ocean View', 'Private Pool', 'Modern Kitchen', 'Garage', 'Air Conditioning'],
        available: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        title: 'Mountain Retreat',
        location: 'Volcano, Hawaii',
        price: 4200,
        beds: 3,
        baths: 2,
        sqft: 2800,
        description: 'Peaceful mountain retreat surrounded by lush tropical forest. Enjoy cool mountain air and stunning views. Features include a wraparound lanai and modern interior.',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
        ],
        amenities: ['Mountain View', 'Fireplace', 'Deck', 'Garden', 'Quiet Location'],
        available: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '3',
        title: 'Beachfront Paradise',
        location: 'Wailea, Maui',
        price: 8900,
        beds: 5,
        baths: 4,
        sqft: 4500,
        description: 'Luxurious beachfront estate with direct beach access. This spectacular property offers the ultimate in island living with high-end finishes throughout.',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
            'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800'
        ],
        amenities: ['Beach Access', 'Infinity Pool', 'Gourmet Kitchen', 'Wine Cellar', 'Home Theater'],
        available: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '4',
        title: 'Luxury Condo',
        location: 'Honolulu, Oahu',
        price: 3800,
        beds: 2,
        baths: 2,
        sqft: 1800,
        description: 'Modern luxury condo in the heart of Honolulu. Walking distance to beaches, shopping, and dining. Features floor-to-ceiling windows and premium finishes.',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
        ],
        amenities: ['City View', 'Gym', 'Concierge', 'Parking', 'Security'],
        available: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '5',
        title: 'Garden Estate',
        location: 'Hanalei, Kauai',
        price: 6500,
        beds: 4,
        baths: 3,
        sqft: 3600,
        description: 'Tropical garden estate with lush landscaping and serene atmosphere. Features include outdoor living spaces, koi pond, and custom architecture.',
        images: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'
        ],
        amenities: ['Garden', 'Koi Pond', 'Outdoor Kitchen', 'Solar Panels', 'Guest House'],
        available: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '6',
        title: 'Sunset Bungalow',
        location: 'Lahaina, Maui',
        price: 4800,
        beds: 3,
        baths: 2,
        sqft: 2400,
        description: 'Charming bungalow with spectacular sunset views. Recently renovated with modern amenities while maintaining island charm. Perfect for small families.',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
            'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800',
            'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800'
        ],
        amenities: ['Sunset View', 'Renovated', 'Lanai', 'Close to Beach', 'Pet Friendly'],
        available: true,
        createdAt: new Date().toISOString()
    }
];
