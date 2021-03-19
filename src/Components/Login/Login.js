import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from'./firebase.config'

if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}

const Login = () => {
    return (
        <div>
            <h3>this login</h3>
        </div>
    );
};

export default Login;