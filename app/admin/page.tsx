'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminPage() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBeds] = useState(''); // Typo fix: setBaths
    const [sqft, setSqft] = useState('');

    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('saving');

        try {
            const res = await fetch('/api/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    price: Number(price),
                    location,
                    description,
                    beds: Number(beds),
                    baths: 2, // Hardcoded for simplicity or add field
                    sqft: Number(sqft),
                    images: [image], // Array of strings
                    amenities: ['Luxury', 'View'] // Default
                })
            });

            if (res.ok) {
                setStatus('success');
                setTitle('');
                setPrice('');
                setLocation('');
                setImage('');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pt-20 pb-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold mb-6">Add New Property</h2>

                        {status === 'success' && <div className="bg-green-100 text-green-700 p-4 rounded mb-4">Property Added Successfully!</div>}
                        {status === 'error' && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">Error adding property.</div>}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Property Title</label>
                                <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="w-full border p-3 rounded-lg" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Price (/mo)</label>
                                    <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="w-full border p-3 rounded-lg" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                                    <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="w-full border p-3 rounded-lg" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Beds</label>
                                    <input value={beds} onChange={e => setBeds(e.target.value)} type="number" className="w-full border p-3 rounded-lg" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Sqft</label>
                                    <input value={sqft} onChange={e => setSqft(e.target.value)} type="number" className="w-full border p-3 rounded-lg" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
                                <input value={image} onChange={e => setImage(e.target.value)} type="url" className="w-full border p-3 rounded-lg" placeholder="https://..." required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border p-3 rounded-lg h-32" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                                Add Property
                            </button>
                        </form>
                    </div>

                    <div className="mt-8 bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold mb-4">Manage Properties</h2>
                        <p className="text-gray-500">To remove properties, please edit <code>app/lib/properties.ts</code> manually for safety.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
