'use client';

import { use } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { sampleProperties } from '../../lib/properties';
import { siteConfig } from '../../lib/siteConfig';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const property = sampleProperties.find(p => p.id === id);

    if (!property) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-white pt-24 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
                        <Link href="/properties" className="text-blue-600 hover:underline">Return to Properties</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Image */}
                <div className="relative h-[60vh] mt-20">
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                        <div className="max-w-7xl mx-auto text-white animate-fade-in">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 shadow-text">{property.title}</h1>
                            <p className="text-xl md:text-2xl opacity-90 flex items-center shadow-text">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {property.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12 animate-slide-in">
                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Price</p>
                                    <p className="text-3xl font-bold text-blue-600">${property.price.toLocaleString()}<span className="text-lg text-gray-500 font-normal">/mo</span></p>
                                </div>
                                <div className="w-px bg-gray-200 hidden sm:block"></div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Bedrooms</p>
                                    <p className="text-2xl font-bold text-gray-900">{property.beds}</p>
                                </div>
                                <div className="w-px bg-gray-200 hidden sm:block"></div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Bathrooms</p>
                                    <p className="text-2xl font-bold text-gray-900">{property.baths}</p>
                                </div>
                                <div className="w-px bg-gray-200 hidden sm:block"></div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Square Ft</p>
                                    <p className="text-2xl font-bold text-gray-900">{property.sqft.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Property</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {property.description}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {property.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-blue-100 transition-colors">
                                            <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700 font-medium">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Gallery */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {property.images.map((img, index) => (
                                        <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                            <Image
                                                src={img}
                                                alt={`${property.title} - Image ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-110 transition-transform duration-700"
                                                unoptimized
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interested?</h3>
                                <p className="text-gray-500 mb-6">Apply now to secure this property</p>

                                <div className="space-y-4">
                                    <Link
                                        href="/application"
                                        className="btn-primary w-full py-4 text-lg font-bold shadow-lg hover:shadow-xl block text-center"
                                    >
                                        Start Application
                                    </Link>
                                    <button className="w-full bg-white border-2 border-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-200 transition-all">
                                        Schedule Viewing
                                    </button>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 text-center mb-4">Questions? Contact us directly</p>
                                    <p className="text-center font-bold text-gray-900">{siteConfig.contact.phone}</p>
                                    <p className="text-center text-blue-600">{siteConfig.contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
