import React, {useEffect, useState} from 'react'
import Layout from "../../components/admin/Layout";
import Header from "../../components/admin/Header";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../state/actions/auth";
import Input from "../../components/base_elements/Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import {errorSelector, tokenSelector} from "../../state/selectors";


const Login = (props) => {
    library.add(faEye, faEyeSlash);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [visiblePassword, setPasswordVisible] = useState(false)

    const loggedIn = useSelector(tokenSelector);
    const errors = useSelector(errorSelector);

    const handleCredentials = (e, field) => {
        setCredentials({...credentials, [field]: e.target.value})
    }
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleLogin = () => {
        dispatch(login(credentials))
    };

    useEffect(() => {
        if (loggedIn && loggedIn.length){
            navigateTo('/admin');
        }
    }, [loggedIn]);


    return (
        <Layout>
            <Header/>
            <div className="container">
                <div className="d-flex col-10 flex-column container position-relative">
                    <div className="">
                        <h2 className="text-center mt-5 mb-3">Authorisation</h2>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="w-100 d-flex justify-content-center">
                            <Input name="email" value={credentials.email} label="Email" placeholder="Enter username or email"
                                   changeAction={(e) => handleCredentials(e, 'email')} style={{width: "100%"}}/>
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.email}</div>
                                : ''}
                        </div>
                        <div className="form_group field mb-2">
                            <input type={visiblePassword ? "text" : "password"} className="form_field" placeholder="Enter password" name="password" id="password" required
                                   onChange={(e) => handleCredentials(e, 'password')}
                                   value={credentials.password}/>
                            <label htmlFor="password" className="form_label">Password</label>
                            <button className="visibility-button password" onClick={() => setPasswordVisible(!visiblePassword)}>
                                <FontAwesomeIcon icon={visiblePassword ? faEyeSlash : faEye}></FontAwesomeIcon>
                            </button>
                        </div>
                        <div className="d-flex col-5">
                            <button className="app-button" onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;