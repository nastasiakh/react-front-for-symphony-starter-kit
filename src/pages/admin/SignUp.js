import React, {useState} from 'react'
import Layout from "../../components/admin/Layout";
import Header from "../../components/admin/Header";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../state/actions/auth";
import Input from "../../components/base_elements/Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

function SignUp() {
    library.add(faEye, faEyeSlash);
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [visiblePassword, setPasswordVisible] = useState(false)

    const errors = useSelector(state => state.errors)
    const userCreated = useSelector(state => state.auth.userCreated)
    const handleCredentials = (e, field) => {
        setCredentials({...credentials, [field]: e.target.value})
    }
    const dispatch = useDispatch();

    const handleSignUp = () => {
        dispatch(signUp(credentials))
    };

    return (
        <Layout>
            <Header/>
            <div className="container">
                <div className="d-flex col-10 flex-column container position-relative">
                    <div className="text-center mt-5 mb-3">
                        <h2 className="text-center mt-5 mb-3">Sign Up</h2>
                        <span>Already have an account? <a href={'/admin/login'}>Log in</a></span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="w-100 d-flex justify-content-center">
                            <Input name="firstName" value={credentials.firstName} label="First name" placeholder="Enter your name"
                                   changeAction={(e) => handleCredentials(e, 'firstName')} style={{width: "100%"}}/>
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.name}</div>
                                : ''}
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                            <Input name="lastName" value={credentials.lastName} label="Last name" placeholder="Enter your lastname"
                                   changeAction={(e) => handleCredentials(e, 'lastName')} style={{width: "100%"}}/>
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.name}</div>
                                : ''}
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                            <Input name="email" value={credentials.email} label="Email" placeholder="Enter email"
                                   changeAction={(e) => handleCredentials(e, 'email')} style={{width: "100%"}}/>
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.name}</div>
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
                        <div className="form_group field mb-2">
                            <input type={visiblePassword ? "text" : "password"} className="form_field" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" required
                                   onChange={(e) => handleCredentials(e, 'confirmPassword')}
                                   value={credentials.confirmPassword}/>
                            <label htmlFor="confirmPassword" className="form_label">Password</label>
                            <button className="visibility-button password" onClick={() => setPasswordVisible(!visiblePassword)}>
                                <FontAwesomeIcon icon={visiblePassword ? faEyeSlash : faEye}></FontAwesomeIcon>
                            </button>
                        </div>
                        <div className="d-flex col-5">
                            <button className="app-button" onClick={handleSignUp}>Sign up</button>
                        </div>
                        { userCreated &&
                            <div className="text-center mt-5 mb-3">
                                <h3>User successfully signed up! <a href={'/admin/login'}>Log in</a> to continue work.</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SignUp;