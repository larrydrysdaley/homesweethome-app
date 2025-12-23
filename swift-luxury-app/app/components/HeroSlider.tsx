'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920',
        title: 'Modern Luxury Living',
        subtitle: 'Premium homes for discerning clients',
        cta: 'Explore Now'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
        title: 'Exclusive Beachfront Villas',
        subtitle: 'Wake up to ocean views every day',
        cta: 'View Listings'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920',
        title: 'Find Your Dream Home',
        subtitle: 'Luxury properties in Hawaii paradise',
        cta: 'Browse Properties'
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return <div className="h-[600px] md:h-[700px] bg-gray-900" />;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-black">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="text-center text-white px-4 max-w-5xl">
                            <h2 className="text-sm md:text-lg font-black uppercase tracking-[0.3em] mb-4 text-blue-400 drop-shadow-md">
                                Featured Collection
                            </h2>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 drop-shadow-2xl leading-tight">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-3xl mb-12 drop-shadow-xl font-medium opacity-90 max-w-3xl mx-auto">
                                {slide.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link
                                    href="/properties"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1.5 transition-all duration-300 w-full sm:w-auto"
                                >
                                    {slide.cta}
                                </Link>
                                <Link
                                    href="/application"
                                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300 w-full sm:w-auto"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-6 z-20 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-lg p-5 rounded-full transition-all duration-300 group hover:scale-110 active:scale-95"
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-lg p-5 rounded-full transition-all duration-300 group hover:scale-110 active:scale-95"
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full ${index === currentSlide
                                ? 'bg-blue-500 w-12 h-3'
                                : 'bg-white/30 hover:bg-white/60 w-3 h-3'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
