import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white">
                <div className="pt-20">
                    <PageHeader
                        title="Contact Us"
                        subtitle="Get in touch with our luxury property experts"
                        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
                    />
                </div>

                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Contact Info */}
                            <div className="space-y-12 animate-fade-in">
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Talk</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Interested in one of our properties or have a general inquiry? We're here to help you every step of the way.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Office</h4>
                                            <p className="text-gray-600 font-medium">92-8489 Macadamia Dr, Ocean View, HI 96737</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                                            <p className="text-gray-600 font-medium">info@swiftluxuryhomes.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                                            <p className="text-gray-600 font-medium">+1 808 437 5965</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                                            <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                                            <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Subject</label>
                                        <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                                        <textarea rows={5} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Your message..."></textarea>
                                    </div>
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Placeholder */}
                <section className="h-[500px] w-full bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-500 font-bold text-xl uppercase tracking-widest">Interactive Property Map Coming Soon</p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
