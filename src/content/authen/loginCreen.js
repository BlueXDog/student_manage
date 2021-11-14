import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase/app"
import { Redirect } from 'react-router';
import "firebase/auth"
// Configure Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCy4QeLW_-hqdZllXl_1mBd-kXtZAveCOU",
  authDomain: "student-management-9251d.firebaseapp.com",
  databaseURL: "https://student-management-9251d.firebaseio.com",
  projectId: "student-management-9251d",
  storageBucket: "student-management-9251d.appspot.com",
  messagingSenderId: "844035353761",
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      {/* <h1>My App</h1> */}
      {/* <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p> */}
      {/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
      <Redirect to="/dash1" />
    </div>
  );
}

export default SignInScreen;