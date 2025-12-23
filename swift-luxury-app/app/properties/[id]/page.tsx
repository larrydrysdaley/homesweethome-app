'use client';

import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { sampleProperties } from '../../lib/properties';
import { useState } from 'react';

export default function PropertyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const property = sampleProperties.find(p => p.id === params.id);

    if (!property) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
                        <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
                        <Link href="/properties" className="btn-primary px-6 py-3 rounded-lg inline-block">
                            Back to Properties
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Properties
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Gallery */}
                        <div>
                            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={property.images[currentImageIndex]}
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />

                                {/* Navigation Arrows */}
                                {property.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                        >
                                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                        >
                                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Image Counter */}
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {property.images.length}
                                </div>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="grid grid-cols-3 gap-4">
                                {property.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`relative h-24 rounded-lg overflow-hidden ${currentImageIndex === index ? 'ring-4 ring-blue-600' : 'opacity-70 hover:opacity-100'
                                            } transition-all`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${property.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Property Details */}
                        <div>
                            {property.available && (
                                <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    Available Now
                                </div>
                            )}

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {property.title}
                            </h1>

                            <p className="text-gray-600 mb-6 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {property.location}
                            </p>

                            <div className="text-4xl font-bold text-blue-600 mb-8">
                                ${property.price.toLocaleString()}<span className="text-2xl text-gray-600">/month</span>
                            </div>

                            {/* Property Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                                <div className="text-center">
                                    <div className="text-3xl mb-2">🛏️</div>
                                    <div className="text-2xl font-bold text-gray-900">{property.beds}</div>
                                    <div className="text-gray-600">Bedrooms</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-2">🚿</div>
                                    <div className="text-2xl font-bold text-gray-900">{property.baths}</div>
                                    <div className="text-gray-600">Bathrooms</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-2">📐</div>
                                    <div className="text-2xl font-bold text-gray-900">{property.sqft.toLocaleString()}</div>
                                    <div className="text-gray-600">Sq Ft</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {property.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center text-gray-700">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/application"
                                    className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg text-center flex-1"
                                >
                                    Apply for This Property
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 text-center flex-1"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
