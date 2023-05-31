import React from 'react';
import "../../styles/app.css";

const Layout = ({children}) => {
    return (
        <div className="d-flex flex-row align-content-center justify-content-end">
            {children}
        </div>
    )
}

export default Layout;