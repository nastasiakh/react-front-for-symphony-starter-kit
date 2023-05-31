import React, {useState} from 'react'
import Layout from "../../components/admin/Layout";
import Header from "../../components/admin/Header";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/auth";
import Input from "../../components/base_elements/Input";

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    const errors = useSelector(state => state.errors)

    const handleCredentials = (e, field) => {
        setCredentials({...credentials, [field]: e.target.value})
    }

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login(credentials))
    }

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
                            <Input name="username" value={credentials.username} label="Username" placeholder="Enter username or email"
                                   changeAction={(e) => handleCredentials(e, 'username')} style={{width: "100%"}}/>
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.name}</div>
                                : ''}
                        </div>
                        <div className="form_group field mb-2">
                            <input type="password" className="form_field" placeholder="Enter password" name="password" id="password" required
                                   onChange={(e) => handleCredentials(e, 'password')}
                                   value={credentials.password}/>
                            <label htmlFor="password" className="form_label">Password</label>
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