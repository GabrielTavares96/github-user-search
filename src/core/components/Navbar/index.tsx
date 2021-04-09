import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className="main-nav">
        <Link to="/" className="nav-text">
            <div >
                Bootcamp DevSuperior
            </div>
        </Link>
    </nav>
);

export default Navbar;