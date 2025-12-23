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
                        title="Our Properties"
                        subtitle="Explore our curated collection of elite luxury rentals"
                        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Exclusive Listings</h2>
                            <p className="text-gray-600">Finding the perfect home for your lifestyle</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm">All Regions</span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-full font-bold text-sm">Available Now</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {sampleProperties.map((property) => (
                            <Link
                                key={property.id}
                                href={`/properties/${property.id}`}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={property.images[0]}
                                        alt={property.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        unoptimized
                                    />
                                    {property.available && (
                                        <div className="absolute top-6 right-6 bg-green-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                            Available
                                        </div>
                                    )}
                                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
                                        <span className="text-xl font-black text-blue-600">${property.price.toLocaleString()}</span>
                                        <span className="text-xs font-bold text-gray-500 ml-1">/mo</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center text-gray-500 mb-6 font-medium">
                                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {property.location}
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 mt-auto">
                                        <div className="text-center">
                                            <div className="text-sm font-black text-gray-900">{property.beds}</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Beds</div>
                                        </div>
                                        <div className="text-center border-x border-gray-100 px-2">
                                            <div className="text-sm font-black text-gray-900">{property.baths}</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Baths</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm font-black text-gray-900">{property.sqft.toLocaleString()}</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Sq Ft</div>
                                        </div>
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
