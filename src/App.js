import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Hero, Features, Programs, Community } from './sections';

const App = () => {
    return (
        <div className="min-h-screen w-full" dir="rtl">
            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main>
                {/* Hero Section - Gradient background */}
                <section className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <Hero />
                </section>

                {/* Features Section - Dark background */}
                <section className="w-full bg-dark text-white">
                    <Features />
                </section>

                {/* Programs Section - Gradient background */}
                <section className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                    <Programs />
                </section>

                {/* Community Section - Dark background */}
                <section className="w-full bg-dark text-white">
                    <Community />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;