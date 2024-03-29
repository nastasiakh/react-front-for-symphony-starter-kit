import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/app.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";


function Header() {
    library.add(faRightToBracket)
    const location = useLocation();
    const pageLinks = [
        {
            "name": "Home",
            "url": "/",
        },
        {
            "name": "Blog",
            "url": "/blog",
        },
        {
            "name": "About",
            "url": "/about",
        },
        {
            "name": "Contact",
            "url": "/contact",
        },
        {
            "name": "Admin Panel",
            "url": "/admin",
        },

    ];

    useEffect(() => {
        pageLinks.map((page) => {
            if (page.url === location.pathname) {
                document.title = page.name;
            }
            return document;
        });
    }, [])

    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand">Symfony react spa</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        pageLinks.map((page, key) => {
                            return (
                                <li key={key} className={`nav-item me-2 ${location.pathname === page.url ? 'active' : ''}`}>
                                    <Link to={page.url} className="nav-link">{page.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Link to="/admin/login"  className={'nav-link me-2 '}>Log In
                <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
        </nav>
    );
}

export default Header;