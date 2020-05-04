import React from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../firebase/firebase"
import Layout from "../components/layout"
import { Typography } from 'antd';

import './museum.css'

const SignIn = () => {

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
    };

  return(
  <Layout >
    <Typography>
    <div className="museum">
      {/* <img className="m" src={heroimg}></img> */}
      <div id="md_article" className="museumtext">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    </div>
    </Typography>
  </Layout>
)};

export default SignIn