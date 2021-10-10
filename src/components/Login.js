import React from "react"; 
import{ GoogleOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';
const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                 <h2>Welcome to chatApp2.0</h2>

                 <div
                   className="login-button google"
                   onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                 >
                     <GoogleOutlined /> Sign In with Google
                 </div>
                 <br/><br/>
                 <div
                   className="login-button facebook"
                   onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                   >
                     <FacebookOutlined /> Sign In with Facebook
                 </div>
                     <br/><br/>
                 <div
                   className="login-button instagram"
                 >
                     <InstagramOutlined /> Sign In with Instagram
                 </div>

            </div>
        </div>
    );
}

export default Login;