import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login">
            <div className="login-container text-white p-5 m-5 w-75 mx-auto bg-login rounded-pill">

                <div className="mx-auto py-3">
                    <h4> Just One Google Account, For </h4>
                    <div>
                        <img
                            src="https://i.ibb.co/smrxtD7/Tour-Today-BD.png"
                            width="70"
                            height="70"
                            className="d-inline-block my-4"
                            alt="logo"
                        />
                    </div>

                    <div>
                        <h4 className="brand text-warning">X-PLORING </h4> <h6 className="text-info">BANGLADESH</h6>
                    </div>
                </div>

                <Button onClick={handleGoogleLogin}
                    variant="outline-info"
                    size="lg"
                    className="rounded-pill fw-bold">
                    <img width="30" height="30" className="m-2" src="https://i.ibb.co/QXzZcXK/image.png" alt="" />
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;