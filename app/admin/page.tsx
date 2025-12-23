'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Access</h1>
                    <p className="text-gray-600 mb-8">This area is restricted to authorized personnel only.</p>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <p className="text-sm text-gray-500">Please contact the system administrator for credentials.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
