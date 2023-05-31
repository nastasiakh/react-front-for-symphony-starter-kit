import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import "../../styles/app.css";

function Header() {
    const location = useLocation();
    const pageLinks = [
        {
            "name": "Pages",
            "url": "/pages",
        },
    ];

    useEffect(() => {
        pageLinks.map((page) => {
            if (page.url === location.pathname) {
                document.title = page.name;
            }
        });
    }, [])

    return (
        <aside className="d-flex col-2 position-relative">
            <nav className="navbar navbar-expand-lg d-flex flex-column">
                <Link to="/" className="navbar-brand">Symfony react spa (Admin)</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse align-items-start" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            pageLinks.map((page, key) => {
                                return (
                                    <li key={key}
                                        className={`nav-item mb-2 ${location.pathname === page.url ? 'active' : ''}`}>
                                        <Link to={page.url} className="nav-link">{page.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

export default Header;