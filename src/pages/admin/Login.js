import React, {useState} from 'react'
import Layout from "../../components/admin/Layout";
import Header from "../../components/admin/Header";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/auth";

function Dashboard() {
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
                <div className="row">
                    <h1>Login</h1>
                </div>
                <div className="row">
                    <div className="three columns">

                        <div>
                            <label htmlFor="name">username</label>
                            <input
                                className="u-full-width"
                                type="text"
                                id="name"
                                onChange={(e) => handleCredentials(e, 'username')}
                                value={credentials.username}
                            />
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.name}</div>
                                : ''}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                className="u-full-width"
                                type="text"
                                id="password"
                                onChange={(e) => handleCredentials(e, 'password')}
                                value={credentials.password}
                            />
                            {errors && errors.password ?
                                <div style={{color: 'red'}}>{errors.password}</div>
                                : ''}
                        </div>

                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;