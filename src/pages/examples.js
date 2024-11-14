import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
    const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-200';
    const variants = {
        primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:opacity-90',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-dark',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
        {children}
    </div>
);

const GradientText = ({ children, className = '' }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 ${className}`}>
        {children}
    </span>
);

const Container = ({ children, className = '' }) => (
    <div className={`w-full ${className}`}>
        {children}
    </div>
);

const Example = () => (
    <div dir="rtl" className="w-full bg-dark text-white">
        <Container>
            <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold py-8 text-center">
                    ברוכים הבאים ל<GradientText>חדר כושר דניאל</GradientText>
                </h1>
                <Card className="bg-dark/50 backdrop-blur">
                    <h2 className="text-2xl font-semibold mb-4">התחילו את המסע שלכם</h2>
                    <p className="mb-6">הצטרפו לאימונים הקהילתיים שלנו</p>
                    <Button>להתחיל עכשיו</Button>
                </Card>
            </div>
        </Container>
    </div>
);

export default Example;