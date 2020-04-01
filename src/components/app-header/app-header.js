import React from 'react';
import './app-header.css';

const Header = () => {
    return (
        <div className="app-header d flex">
            <h3>
                <a href="#">
                    Start Db
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">StarShips</a>
                </li>
            </ul>
        </div>
    )
}    


export default Header;


