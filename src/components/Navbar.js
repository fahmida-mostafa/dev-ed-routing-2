import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>PokeList App</h1></Link>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pokelist/1">PokeList</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;