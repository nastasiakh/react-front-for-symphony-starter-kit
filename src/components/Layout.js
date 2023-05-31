import React from 'react';
import "../styles/app.css";

const Layout = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Layout;