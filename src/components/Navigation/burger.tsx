import React from 'react';

interface BurgerProps {
    isOpen: boolean;
    onClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ isOpen, onClick }) => {
    return (
        <button className={`burger ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </button>
    );
};

export default Burger;
