import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Home</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/card">Card</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/onchange">Onchange</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/counter/class/component">CC Counter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/counter/functional/component">FC Counter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/form">Form</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;