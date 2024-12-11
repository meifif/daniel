import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Hero, Features, Programs, Community, Powerlifting } from './sections';

const App = () => {
    return (
        <div className="min-h-screen w-full" dir="rtl">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section id="home" className="w-full bg-gradient-primary text-white">
                    <Hero />
                </section>

                {/* Features Section */}
                <section id="about" className="w-full bg-dark text-white">
                    <Features />
                </section>

                {/* Programs Section */}
                <section id="programs" className="w-full bg-gradient-primary text-white">
                    <Programs />
                </section>

                {/* Powerlifting Section */}
                <section id="powerlifting" className="w-full bg-dark text-white">
                    <Powerlifting />
                </section>

                {/* Community Section */}
                <section id="contact" className="w-full bg-gradient-primary text-white">
                    <Community />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;