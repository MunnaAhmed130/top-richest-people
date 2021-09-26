import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h3>Billionaire Club</h3>
            <h3>Total Budget : <span className="budget">1000 Billion</span> </h3>
        </div>
    );
};

export default Header;