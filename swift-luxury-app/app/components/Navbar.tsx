'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                            <span className="text-white font-bold text-2xl">S</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-gray-900">Swift Luxury</span>
                            <span className="text-xl font-light text-gray-600 ml-1">Homes</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="relative group py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link
                            href="/about"
                            className="relative group py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link
                            href="/properties"
                            className="relative group py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Properties
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link
                            href="/contact"
                            className="relative group py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link
                            href="/admin"
                            className="relative group py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Admin
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link
                            href="/application"
                            className="ml-4 btn-primary px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Apply Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                                Home
                            </Link>
                            <Link href="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                                About
                            </Link>
                            <Link href="/properties" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                                Properties
                            </Link>
                            <Link href="/contact" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                                Contact
                            </Link>
                            <Link href="/admin" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                                Admin
                            </Link>
                            <Link href="/application" className="mx-4 btn-primary px-6 py-2.5 rounded-lg font-semibold text-center">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
