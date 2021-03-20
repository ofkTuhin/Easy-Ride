import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './signUp.css'

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

// firebase.initializeApp(firebaseConfig);


const SignUp = () => {


  const [newUser, setNewUser] = useState(false)
  const [userInfo, setUserInfo] = useState(
    {
      issigndIn: false,
      name: '',
      email: '',
      photo: '',
      password: '',
      error: '',
      success: false,
    }
  )
  const [loggedInUser, setLoginUser] = useContext(UserContext)
  console.log(loggedInUser)

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // const provider = new firebase.auth.GoogleAuthProvider();
  const provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();


  const handleSigned = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {


        console.log(result)

      }).catch((error) => {


      });



  };



  // Email and password validation
  const handleBlur = (e) => {
    let isFormvalid = true;

    if (e.target.name === 'email') {

      isFormvalid = /\S+@\S+\.\S+/.test(e.target.value)


    }
    if (e.target.name === 'password') {

      const passwordLength = e.target.value.length >= 8

      const regexPasswordValid = /[0-9]/.test(e.target.value);
      isFormvalid = regexPasswordValid && passwordLength

    }
    if (isFormvalid) {

      const updateUserInfo = { ...userInfo }
      updateUserInfo[e.target.name] = e.target.value
      setUserInfo(updateUserInfo)


    }

  }
  // handle submit event
  const handleSubmit = (e) => {
    if (newUser && userInfo.email && userInfo.password) {
      firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(res => {
          // Signed in 
          const updateUserInfo = { ...userInfo }
          updateUserInfo.photo = res.photoURL;


          updateUserInfo.error = '';
          updateUserInfo.success = true;
          setUserInfo(updateUserInfo)
          userInfoUpdate(userInfo.name, userInfo.photo)

          // ...
        })
        .catch((error) => {
          const updateUserInfo = { ...userInfo }

          updateUserInfo.error = error.message;
          updateUserInfo.success = false;
          setUserInfo(updateUserInfo)


          // ..
        });
      console.log('submit')
    }
    if (!newUser && userInfo.email && userInfo.password) {
      firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(res => {
          const updateUserInfo = { ...userInfo }
          updateUserInfo.error = '';
          updateUserInfo.success = true;
          setUserInfo(updateUserInfo)
          setLoginUser(updateUserInfo)
          history.replace(from);
          console.log(res.user)
          // Signed in

          // ...
        })
        .catch((error) => {
          const updateUserInfo = { ...userInfo }
          updateUserInfo.error = error.message;
          console.log(updateUserInfo.error)
          updateUserInfo.success = false;
          setUserInfo(updateUserInfo)
        });
    }
    e.preventDefault()


  }

  const userInfoUpdate = (name, photo) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: photo

    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (
    <div className="SignUp">







      <div className="container">
        
          <div className="form shadow-lg p-3 mb-5 bg-body rounded">

            {newUser ? <h2>SignUp Here</h2> : <h2>Login Here</h2>}
            <form onSubmit={handleSubmit} >
              {newUser && <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Enter your name" onBlur={handleBlur} required></input></div>}
             

              <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Enter your email" onBlur={handleBlur} required></input></div>
              
              <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} required></input></div>
              <br></br>
              {newUser ? <div className="form-group"><input type="submit" className="signUp form-control " value="Create new account" placeholder="" ></input></div> : <div className="form-group"><input type="submit" className="signIn form-control btn col-12" value="sign in" placeholder=""></input></div>}
              <br></br>
          
            </form>
            {newUser ? <p>Already have account?<span onClick={() => setNewUser(!newUser)} style={{
              color: 'blue',
              cursor: 'pointer'

            }}>login</span></p> : <p>create an account?<span onClick={() => setNewUser(!newUser)} style={{
              color: 'blue',
              cursor: 'pointer'

            }}> Sign up Here</span></p>}

          </div>

          {
            userInfo.success ? <p style={{ color: 'green' }}>{newUser ? "create" : 'login'}  success</p> : <p style={{ color: 'red' }}>{userInfo.error}</p>
          }
          <p>or</p>
          <button className="fb-button btn col-12 " onClick={handleSigned} style={{ color: 'white' }}>Login With Google</button>




        
      </div>

    </div>

  );
}



export default SignUp;