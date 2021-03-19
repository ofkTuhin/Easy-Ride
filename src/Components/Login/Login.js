import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './firebase.config'

if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}

const Login = () => {
    return (
        <div>
            
        </div>
    );
};

export default Login;