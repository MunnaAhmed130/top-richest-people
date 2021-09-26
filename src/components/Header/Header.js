import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <div className="header-info">
                <h3 className="billionaire">Billionaire Club</h3>
                <h3>Total Budget : <span className="budget">1000 Billion</span> </h3>
            </div>
        </div>
    );
};

export default Header;