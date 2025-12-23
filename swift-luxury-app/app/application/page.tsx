'use client';

import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export default function ApplicationPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

        if (!webhookUrl || webhookUrl === 'your_discord_webhook_url_here') {
            setErrorMessage('Discord webhook is not configured. Please check SETUP.md.');
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        const discordMessage = {
            embeds: [{
                title: '🏠 New Rental Application Submitted',
                color: 0x0066ff,
                fields: Object.entries(data).map(([key, value]) => ({
                    name: key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                    value: value || 'N/A',
                    inline: true
                })),
                timestamp: new Date().toISOString(),
                footer: { text: 'Swift Luxury Homes Application System' }
            }]
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(discordMessage),
            });

            if (response.ok) {
                setSubmitStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error('Failed to send application');
            }
        } catch (error) {
            setErrorMessage('Failed to submit application. Please try again.');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white">
                <div className="pt-20">
                    <PageHeader
                        title="Rental Application"
                        subtitle="Start your journey to a new luxury home today"
                        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
                    />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />

                        {submitStatus === 'success' && (
                            <div className="mb-10 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-green-800 flex items-center gap-4 animate-fade-in">
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h4 className="font-bold text-lg">Application Success!</h4>
                                    <p>We've received your application and will review it shortly.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-10 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-red-800 flex items-center gap-4 animate-fade-in">
                                <span className="text-3xl">❌</span>
                                <div>
                                    <h4 className="font-bold text-lg">Submission Error</h4>
                                    <p>{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">1</span>
                                    Personal Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Full Name</label>
                                        <input type="text" name="full-name" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Email</label>
                                        <input type="email" name="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Phone</label>
                                        <input type="tel" name="phone-number" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Current Address</label>
                                        <input type="text" name="current-address" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">2</span>
                                    Rental Details
                                </h3>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Property Address You're Applying For</label>
                                        <input type="text" name="property-address" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Rent</label>
                                            <input type="text" name="monthly-rent" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" placeholder="$0,000" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Occupants</label>
                                            <input type="number" name="occupants" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" min="1" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Lease (Mo)</label>
                                            <input type="number" name="lease-duration" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" min="1" placeholder="12" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Annual Inc</label>
                                            <input type="text" name="annual-income" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" placeholder="$000,000" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">3</span>
                                    Emergency Contact
                                </h3>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Contact Name</label>
                                            <input type="text" name="emergency-contact-full-name" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Contact Phone/Email</label>
                                            <input type="text" name="phone-or-email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Contact Address</label>
                                        <input type="text" name="emergency-contact-address" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-blue-500/2 transition-all transform hover:-translate-y-1 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Submitting Application...' : 'Submit Application Now'}
                                </button>
                                <p className="text-center text-gray-400 mt-6 text-sm font-bold uppercase tracking-wider">Secure Encryption Applied</p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
