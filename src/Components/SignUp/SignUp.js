import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

// firebase.initializeApp(firebaseConfig);


const SignUp = () => {

 
  const [newUser,setNewUser] =useState(false)
  const [userInfo,setUserInfo] =useState(
    {
      issigndIn: false,
      name: '',
      email: '',
      photo: '',
      password: '',
      error:'',
      success: false,
    }
  )
  const [loggedInUser, setLoginUser]=useContext(UserContext)
  console.log(loggedInUser)

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // const provider = new firebase.auth.GoogleAuthProvider();
  const provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
 

  const handleSigned=()=>{
    firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
     
  
      // ...
    })
    .catch((error) => {
     
      var errorCode = error.code;
      var errorMessage = error.message;
      
      var email = error.email;
      
      var credential = error.credential;
      console.log(errorCode,errorMessage,email,credential)
  
      // ...
    });


   
    firebase.auth().signInWithPopup(provider)
  .then((result) => {

   
   const {displayName, email,photoURL}=result.user
   console.log(displayName, email,photoURL)
   const signInuser ={
    issigndIn: true,
    name: displayName,
    email: email,
    photo: photoURL
  }
  setUserInfo(signInuser)
    
  }).catch((error) => {
    
    
  });
  

    
  };
  const handleSignedOut = ()=>{
    console.log('className')
    firebase.auth().signOut().then(res => {

     const signOut= {
        issigndIn: false,
        name: '',
        email: '',
        photo: '',
      
      }
      setUserInfo(signOut)

     
    }).catch((error) => {
      
    });
  }

 
// Email and password validation
  const handleBlur =(e)=>{
    let isFormvalid =true;
  
    if(e.target.name==='email'){

      isFormvalid = /\S+@\S+\.\S+/.test(e.target.value)
     

    }
    if(e.target.name==='password'){

      const passwordLength =e.target.value.length>=8

      const regexPasswordValid = /[0-9]/.test(e.target.value);
      isFormvalid=regexPasswordValid && passwordLength

    }
    if (isFormvalid){
     
      const updateUserInfo ={...userInfo}
      updateUserInfo[e.target.name]=e.target.value
      setUserInfo(updateUserInfo)
    
      
    }

  }
   // handle submit event
   const handleSubmit =(e)=>{
     if(newUser && userInfo.email && userInfo.password){
      firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(res => {
        // Signed in 
        const updateUserInfo ={...userInfo}
        updateUserInfo.photo=res.photoURL;


        updateUserInfo.error = '';
        updateUserInfo.success =true;
        setUserInfo(updateUserInfo)
        userInfoUpdate(userInfo.name,userInfo.photo)
     
        // ...
      })
      .catch((error) => {
        const updateUserInfo ={...userInfo}

        updateUserInfo.error = error.message;
        updateUserInfo.success=false;
        setUserInfo(updateUserInfo)
       
     
        // ..
      });
       console.log('submit')
     }
     if (!newUser && userInfo.email && userInfo.password){
      firebase.auth().signInWithEmailAndPassword(userInfo.email,userInfo.password)
      .then(res => {
        const updateUserInfo ={...userInfo}
        updateUserInfo.error = '';
        updateUserInfo.success =true;
        setUserInfo(updateUserInfo)
        setLoginUser(updateUserInfo)
        history.replace(from);
        console.log(res.user)
        // Signed in
        
        // ...
      })
      .catch((error) => {
        const updateUserInfo ={...userInfo}
        updateUserInfo.error = error.message;
        console.log(updateUserInfo.error)
        updateUserInfo.success=false;
        setUserInfo(updateUserInfo)
      });
     }
     e.preventDefault()


  }

  const userInfoUpdate=(name,photo)=>{
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  photoURL:photo
  
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
  }

  return (
    <div className="App">
     {userInfo.issigndIn?<button onClick={handleSignedOut}>Sign out</button>:<button onClick={handleSigned}>Sign in</button>

     }

     {
      userInfo.issigndIn && <div className="info">
      <h3>name: {userInfo.name}</h3>
     <h3>email: {userInfo.email}</h3>
     <img src={userInfo.photo } alt='info'></img>
     </div>

    }

   
      
      <form onSubmit={handleSubmit}>
       { newUser&&<input type="text" name="name" placeholder="Enter your name" onBlur={handleBlur} required></input>}
        <br></br>
        <input type="email" name="email" placeholder="Enter your email address" onBlur={handleBlur} required></input>
        <br></br>
        <input type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} required></input>
        <br></br>
       { newUser?<input type="submit" value="sign up" placeholder="" ></input>:<input type="submit" value="sign in" placeholder=""></input>}
        <br></br>
        {/* <input type="checkbox" onChange={()=>setNewUser(!newUser)}></input>
        <label>New user please sign up</label> */}
      </form>
      <p>Already have account?<span onClick={()=>setNewUser(!newUser)} style={{
        color:'blue',
        cursor:'pointer'
    
    }}>login</span></p>
     {
       userInfo.success ? <p style={{color:'green'}}>{newUser?"create":'login'}  success</p>: <p style={{color:'red'}}>{userInfo.error}</p>
     }
<button onClick={handleSigned}>fb sign in</button>
     
    

     
    </div>
   
  );
}



export default SignUp;