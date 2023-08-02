import React, {StrictMode, useState} from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/admin/Dashboard";
import PageList from "./pages/admin/page/PageList";
import store from "./store";
import {Provider, useSelector} from "react-redux";
import PageCreate from "./pages/admin/page/PageCreate";
import PageEdit from "./pages/admin/page/PageEdit";
import Login from "./pages/admin/Login";
import "./styles/app.css";
import SignUp from "./pages/admin/SignUp";
import {tokenSelector} from "./state/selectors";

function App() {
    const authenticated = useSelector(tokenSelector);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="/admin/login" element={<Login/>}/>
                <Route path="/admin/signUp" element={<SignUp/>}/>

                { authenticated.length ? (
                    <>
                        <Route path="/admin" element={<Dashboard/>}/>
                        <Route path="/pages" element={<PageList/>}/>
                        <Route path="/pages/create" element={<PageCreate/>}/>
                        <Route path="/pages/:id/edit" element={<PageEdit/>}/>
                    </>
                ) : (
                    <Route path="*" element={<Navigate replace to="/admin/login"/>}/>
                )
                }

                <Route element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

if (document.getElementById('root')) {
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);

    root.render(
        <Provider store={store}>
            <StrictMode>
                <App/>
            </StrictMode>
        </Provider>
    );
}