import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import Link from 'next/link';
import Image from 'next/image';
import { sampleProperties } from './lib/properties';

export default function Home() {
    // Show only first 3 properties on homepage
    const featuredProperties = sampleProperties.slice(0, 3);

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white">
                {/* Hero Slider */}
                <div className="pt-20">
                    <HeroSlider />
                </div>

                {/* Stats Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                                <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-600 font-medium">Premium Properties</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                                <div className="text-5xl font-bold text-blue-600 mb-2">10K+</div>
                                <div className="text-gray-600 font-medium">Happy Clients</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                                <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
                                <div className="text-gray-600 font-medium">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Properties Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Featured Properties
                            </h2>
                            <p className="text-xl text-gray-600">
                                Handpicked luxury homes just for you
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProperties.map((property) => (
                                <Link
                                    key={property.id}
                                    href={`/properties/${property.id}`}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            className="property-image object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                                        <p className="text-gray-600 mb-4 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {property.location}
                                        </p>
                                        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                                            <span>🛏️ {property.beds} beds</span>
                                            <span>🚿 {property.baths} baths</span>
                                            <span>📐 {property.sqft.toLocaleString()} sqft</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}/mo</span>
                                            <span className="text-blue-600 font-semibold">View Details →</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/properties"
                                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                View All Properties
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                            Why Choose Us
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Properties</h3>
                                <p className="text-gray-600">
                                    Handpicked luxury homes in the most desirable locations. Each property is carefully vetted for quality and comfort.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Support</h3>
                                <p className="text-gray-600">
                                    Our dedicated team is always available to assist you. Get help whenever you need it, day or night.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Secure Process</h3>
                                <p className="text-gray-600">
                                    Your information is protected with industry-leading security. Safe, transparent, and hassle-free rental process.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-12 rounded-2xl text-center text-white shadow-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Find Your Dream Home?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Start your application today and let us help you find the perfect luxury property.
                            </p>
                            <Link
                                href="/application"
                                className="bg-white text-blue-600 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Apply Now →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
