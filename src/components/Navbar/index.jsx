import CartWidget from '../CartWidget';
import React from 'react';

export const Navbar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Mi marca</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link"  href="#">Link 1</a>
                    </li>
                    <li>
                        <a className="nav__link"  href="#">Link 2</a>
                    </li>
                    <li>
                        <a className="nav__link"  href="#">Link 3</a>
                    </li>
                    <li>
                        <a className="nav__link"  href="#">
                            <CartWidget></CartWidget>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        );
}

export default Navbar;