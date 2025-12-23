import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Image from 'next/image';
import { siteConfig } from '../lib/siteConfig';

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white">
                <div className="pt-20">
                    <PageHeader
                        title="Our Story"
                        subtitle="Redefining luxury living in Hawaii since 2010"
                        image="https://images.unsplash.com/photo-1600585154526-990dcea4fc4a?w=1920"
                    />
                </div>

                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 animate-fade-in">
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Excellence in <span className="text-blue-600">Luxury Housing</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {siteConfig.name} was founded with a simple yet ambitious goal: to provide the most exceptional living experiences in the most beautiful locations.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We specialize in premium rentals that combine breathtaking views with modern amenities and unparalleled service. Our team of local experts is dedicated to helping you find not just a house, but a home that reflects your lifestyle.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-8">
                                    <div>
                                        <h4 className="text-3xl font-bold text-blue-600">15+</h4>
                                        <p className="text-gray-500 font-medium">Years of Excellence</p>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-blue-600">500+</h4>
                                        <p className="text-gray-500 font-medium">Homes Managed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-slide-in">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
                                    alt="Luxury Interior"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16 text-gray-900">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                                <p className="text-gray-600">We maintain the highest standards of professional and personal integrity in everything we do.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                                <p className="text-gray-600">We strive for excellence in every interaction, ensuring our clients receive world-class service.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Client Focus</h3>
                                <p className="text-gray-600">Our clients' dreams and requirements are at the center of our business and decision making.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
