'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';
import { sampleProperties } from '../lib/properties';

export default function PropertiesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <div className="pt-20">
                    <PageHeader
                        title="Available Properties"
                        subtitle="Explore our collection of premium rental homes"
                        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sampleProperties.map((property) => (
                            <Link
                                key={property.id}
                                href={`/properties/${property.id}`}
                                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={property.images[0]}
                                        alt={property.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        unoptimized
                                    />
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        ${property.price.toLocaleString()}/mo
                                    </div>
                                    {!property.available && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-white text-xl font-bold border-2 border-white px-6 py-2 rounded-lg transform -rotate-12">LEASED</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">{property.title}</h3>
                                    <p className="text-gray-600 mb-4 flex items-center text-sm">
                                        <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {property.location}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
                                        <span className="flex items-center">
                                            <span className="font-bold text-gray-900 mr-1">{property.beds}</span> Beds
                                        </span>
                                        <span className="flex items-center">
                                            <span className="font-bold text-gray-900 mr-1">{property.baths}</span> Baths
                                        </span>
                                        <span className="flex items-center">
                                            <span className="font-bold text-gray-900 mr-1">{property.sqft.toLocaleString()}</span> Sqft
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
