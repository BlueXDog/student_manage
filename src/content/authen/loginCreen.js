import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase/app"
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

function getEmailSignInMethod() {
  var config = parseQueryString(window.location.hash);
  return config['emailSignInMethod'] === 'password' ?
      'password' : 'emailLink';
}

function getDisableSignUpStatus() {
  var config = parseQueryString(window.location.hash);
  return config['disableEmailSignUpStatus'] === 'true';
}

function parseQueryString(queryString) {
  // Remove first character if it is ? or #.
  if (queryString.length &&
      (queryString.charAt(0) === '#' || queryString.charAt(0) === '?')) {
    queryString = queryString.substring(1);
  }
  var config = {};
  var pairs = queryString.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    if (pair.length === 2) {
      config[pair[0]] = pair[1];
    }
  }
  return config;
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl:'test.html',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  callbacks : {
    // Called when the user has been successfully signed in.
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      if (authResult.user) {
        handleSignedInUser(authResult.user);
        // redirect to web        
      }
      if (authResult.additionalUserInfo) {
        document.getElementById('is-new-user').textContent =
            authResult.additionalUserInfo.isNewUser ?
            'New User' : 'Existing User';
      }
      // Do not redirect.
      return false;
    }
  }, 
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // Required to enable ID token credentials for this provider.
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // Whether the display name should be displayed in Sign Up page.
      requireDisplayName: true,
      signInMethod: getEmailSignInMethod(),
      disableSignUp: {
        status: getDisableSignUpStatus()
      }
    },
  ],
};

var handleSignedInUser = function(user) {
  if (user.photoURL) {
    var photoURL = user.photoURL;
    // Append size to the photo URL for Google hosted images to avoid requesting
    // the image with its original resolution (using more bandwidth than needed)
    // when it is going to be presented in smaller size.
    if ((photoURL.indexOf('googleusercontent.com') !== -1) ||
        (photoURL.indexOf('ggpht.com') !== -1)) {
      photoURL = photoURL + '?sz=' +
          document.getElementById('photo').clientHeight;
    }
    document.getElementById('photo').src = photoURL;
    document.getElementById('photo').style.display = 'block';
  } else {
    document.getElementById('photo').style.display = 'none';
  }
};

function Login() {
  return (
    <div >
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <div id="photo-container">
          <img id="photo" alt="this is user's profile"></img>
          <div id="is-new-user"></div>
      </div>
    </div>
  );
}

export default Login;
