// src/components/Navigation.js
import React, { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-dark text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 md:justify-center md:space-x-8 md:space-x-reverse">
                    {/* Mobile Menu Button - Only visible on mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-primary-400"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Logo - Always visible */}
                    <div className="flex-shrink-0 md:absolute md:right-4">
            <span className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
              Daniel Ben Chetrit
            </span>
                    </div>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex items-center justify-center space-x-8 space-x-reverse">
                        <a href="#" className="hover:text-primary-400 transition-colors">בית</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">אודות</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">תוכניות</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">מאמנים</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">צור קשר</a>
                    </div>

                    {/* CTA Button - Positioned to the left */}
                    <div className="hidden md:block md:absolute md:left-4">
                        <button className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                            התחל עכשיו
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 text-right">
                            <a href="#" className="block px-3 py-2 hover:text-primary-400">בית</a>
                            <a href="#" className="block px-3 py-2 hover:text-primary-400">אודות</a>
                            <a href="#" className="block px-3 py-2 hover:text-primary-400">תוכניות</a>
                            <a href="#" className="block px-3 py-2 hover:text-primary-400">מאמנים</a>
                            <a href="#" className="block px-3 py-2 hover:text-primary-400">צור קשר</a>
                            <button className="w-full text-right bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 mt-4">
                                התחל עכשיו
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;