'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Property, sampleProperties } from '../lib/properties';

export default function AdminPage() {
    const [properties, setProperties] = useState<Property[]>(sampleProperties);
    const [showAddForm, setShowAddForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        beds: '',
        baths: '',
        sqft: '',
        description: '',
        imageUrls: ['', '', ''],
        amenities: [''],
        available: true
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleImageUrlChange = (index: number, value: string) => {
        const newImageUrls = [...formData.imageUrls];
        newImageUrls[index] = value;
        setFormData(prev => ({ ...prev, imageUrls: newImageUrls }));
    };

    const addImageUrl = () => {
        setFormData(prev => ({
            ...prev,
            imageUrls: [...prev.imageUrls, '']
        }));
    };

    const removeImageUrl = (index: number) => {
        setFormData(prev => ({
            ...prev,
            imageUrls: prev.imageUrls.filter((_, i) => i !== index)
        }));
    };

    const handleAmenityChange = (index: number, value: string) => {
        const newAmenities = [...formData.amenities];
        newAmenities[index] = value;
        setFormData(prev => ({ ...prev, amenities: newAmenities }));
    };

    const addAmenity = () => {
        setFormData(prev => ({
            ...prev,
            amenities: [...prev.amenities, '']
        }));
    };

    const removeAmenity = (index: number) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const newProperty: Property = {
                id: Date.now().toString(),
                title: formData.title,
                location: formData.location,
                price: parseInt(formData.price),
                beds: parseInt(formData.beds),
                baths: parseInt(formData.baths),
                sqft: parseInt(formData.sqft),
                description: formData.description,
                images: formData.imageUrls.filter(url => url.trim() !== ''),
                amenities: formData.amenities.filter(a => a.trim() !== ''),
                available: formData.available,
                createdAt: new Date().toISOString()
            };

            setProperties(prev => [newProperty, ...prev]);

            // Reset form
            setFormData({
                title: '',
                location: '',
                price: '',
                beds: '',
                baths: '',
                sqft: '',
                description: '',
                imageUrls: ['', '', ''],
                amenities: [''],
                available: true
            });

            setShowAddForm(false);
            alert('Property added successfully!');
        } catch (error) {
            console.error('Error adding property:', error);
            alert('Failed to add property');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = (id: string) => {
        if (!confirm('Are you sure you want to delete this property?')) {
            return;
        }
        setProperties(prev => prev.filter(p => p.id !== id));
        alert('Property deleted successfully!');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Admin Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-8 rounded-2xl shadow-sm">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Control Panel</h1>
                            <p className="text-gray-600">Inventory Management & Property Listings</p>
                        </div>
                        <button
                            onClick={() => setShowAddForm(!showAddForm)}
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {showAddForm ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                )}
                            </svg>
                            {showAddForm ? 'Close Editor' : 'Add New Property'}
                        </button>
                    </div>

                    {/* Add Property Form Container */}
                    <div className={`transition-all duration-500 overflow-hidden ${showAddForm ? 'max-h-[2000px] mb-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Create New Listing</h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Property Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                                            placeholder="e.g. Modern Cliffside Villa"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            required
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                                            placeholder="e.g. Kailua-Kona, HI"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Monthly Rent ($)</label>
                                        <input
                                            type="number"
                                            name="price"
                                            required
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider text-center block">Beds</label>
                                            <input type="number" name="beds" required value={formData.beds} onChange={handleInputChange} className="w-full px-3 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all text-center" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider text-center block">Baths</label>
                                            <input type="number" name="baths" required value={formData.baths} onChange={handleInputChange} className="w-full px-3 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all text-center" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider text-center block">Sq Ft</label>
                                            <input type="number" name="sqft" required value={formData.sqft} onChange={handleInputChange} className="w-full px-3 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all text-center" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Property Description</label>
                                    <textarea
                                        name="description"
                                        required
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider block">Image Gallery URLs</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {formData.imageUrls.map((url, index) => (
                                            <div key={index} className="relative group">
                                                <input
                                                    type="url"
                                                    value={url}
                                                    onChange={(e) => handleImageUrlChange(index, e.target.value)}
                                                    className="w-full pl-5 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all"
                                                    placeholder="https://images.unsplash.com/..."
                                                />
                                                {formData.imageUrls.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImageUrl(index)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <button type="button" onClick={addImageUrl} className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                        Add Image URL
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider block">Key Amenities</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {formData.amenities.map((amenity, index) => (
                                            <div key={index} className="relative group">
                                                <input
                                                    type="text"
                                                    value={amenity}
                                                    onChange={(e) => handleAmenityChange(index, e.target.value)}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all"
                                                    placeholder="e.g. WiFi"
                                                />
                                                {formData.amenities.length > 1 && (
                                                    <button type="button" onClick={() => removeAmenity(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={addAmenity} className="border-2 border-dashed border-gray-300 rounded-xl px-4 py-3 text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all flex items-center justify-center font-bold">
                                            + Add
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                                    <input
                                        type="checkbox"
                                        id="available"
                                        name="available"
                                        checked={formData.available}
                                        onChange={handleInputChange}
                                        className="w-6 h-6 text-blue-600 rounded-lg focus:ring-blue-500 border-gray-300"
                                    />
                                    <label htmlFor="available" className="ml-3 font-bold text-blue-900">
                                        Immediately Available for Rent
                                    </label>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl transition-all disabled:opacity-50"
                                    >
                                        {isLoading ? 'Processing...' : 'Publish Listing'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddForm(false)}
                                        className="px-10 py-5 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Properties List Header */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Current Inventory ({properties.length})
                            </h2>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {properties.map((property) => (
                                <div key={property.id} className="p-8 hover:bg-blue-50/30 transition-colors flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                                    <div className="relative w-full lg:w-48 h-48 lg:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h3 className="text-2xl font-bold text-gray-900">{property.title}</h3>
                                            <div className="text-3xl font-black text-blue-600">${property.price.toLocaleString()}<span className="text-sm font-medium text-gray-400">/mo</span></div>
                                        </div>
                                        <p className="text-gray-500 flex items-center font-medium">
                                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {property.location}
                                        </p>
                                        <div className="flex gap-6 text-sm font-bold text-gray-600 pt-2">
                                            <span className="flex items-center"><span className="text-blue-500 mr-1">🛏️</span> {property.beds} Beds</span>
                                            <span className="flex items-center"><span className="text-blue-500 mr-1">🚿</span> {property.baths} Baths</span>
                                            <span className="flex items-center"><span className="text-blue-500 mr-1">📐</span> {property.sqft.toLocaleString()} Sq Ft</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                                        <Link href={`/properties/${property.id}`} className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl text-center hover:bg-gray-50 transition-colors">
                                            View
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(property.id)}
                                            className="px-6 py-3 bg-red-50 text-red-600 font-bold rounded-xl text-center hover:bg-red-600 hover:text-white transition-all"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
