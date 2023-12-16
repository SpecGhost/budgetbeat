import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Contact me: 
                <a className="text-dark" href="mailto:chinaor2@gmail.com">My Email </a> | 
                <a className="text-dark" href="https://www.linkedin.com/in/chinazor-agummadu-bb06b5284/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;