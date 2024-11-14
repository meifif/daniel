// src/components/Navigation.js
import React, { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 64; // height of your navigation bar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsOpen(false); // Close mobile menu after clicking
    };

    const navItems = [
        { id: 'home', text: 'ראשי' },
        { id: 'about', text: 'אודות' },
        { id: 'programs', text: 'תוכניות אימון' },
        { id: 'contact', text: 'צור קשר' },
    ];

    return (
        <nav className="bg-dark text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 md:justify-center md:space-x-8 md:space-x-reverse">
                    {/* Mobile Menu Button */}
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

                    {/* Logo */}
                    <div className="flex-shrink-0 md:absolute md:right-4">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text hover:opacity-90"
                        >
                            דניאל | אימון אישי
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-center space-x-8 space-x-reverse">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-primary-400 transition-colors cursor-pointer"
                            >
                                {item.text}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block md:absolute md:left-4">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                        >
                            קבע אימון ניסיון
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 text-right">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-right px-3 py-2 hover:text-primary-400"
                                >
                                    {item.text}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full text-right bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 mt-4"
                            >
                                קבע אימון ניסיון
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;