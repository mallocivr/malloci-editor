import React, {useState, useEffect} from "react"
import firebase from "./firebase/firebase"
import './App.css'
import {
  HashRouter as Router,
  Redirect,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import { Menu } from 'antd';
import Mallocieditor from "./pages/mallocieditor"
import Playground from "./pages/playground"
import Museum from "./pages/museum"
import Gallery from "./pages/gallery"
import Home from "./pages/Home"
import Example from "./pages/example"
import About from "./pages/about"
import WikiViewer from "./pages/wikiviewer"


const logo = "./logo192.png"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [redirectOnLogOut, setRedirectOnLogout] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      }
      else
      {
        setLoggedIn(false)
      }
   });
  },[])

  const editor = () => {
    if (loggedIn && firebase.auth().currentUser.email.match(".*berkeley[.]edu"))
    {
      return(
        <NavLink to="/Editor">
                  Create
        </NavLink>
      )
    }
    else
    {
      return(
        <NavLink to="/Playground">
                  Playground
        </NavLink>
      )
    }
  } 

  const logout = () => {
    firebase.auth().signOut()
    setRedirectOnLogout(true)
  }

  const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    setRedirectOnLogout(false)
  }

  const signInOut = () => {
    if (loggedIn)
    {
      return(
        <a onClick={() => {logout()}}>
                  Sign Out
        </a>
      )
    }
    else
    {
      return(
        <a onClick={() => {login()}}>
                  Sign In
        </a>
      )
    }
  }
  
  const RedirectRenderer = () => {
    if(redirectOnLogOut) return <Redirect to='/' push/> 
  }
    return (
     <div id="navbar">
       <a href="/"><img src={logo} id="logoformatting"></img></a>

      <div id="mallocititle"><h2><a href="/">Malloci</a></h2></div>


    <Router>
      <div id="menualign">
        
            <Menu mode="horizontal">
              <Menu.Item key="gallery">
                <NavLink to="/Gallery">
                  Gallery
                </NavLink>
              </Menu.Item>
              <Menu.Item key="museum">
                <NavLink to="/Malloci">
                About Malloci
                </NavLink>
              </Menu.Item>
              <Menu.Item key="mallocieditor">
                {editor()}
              </Menu.Item>
              

              {/* <Menu.Item key="about">
              <NavLink to="/TheTeam">
                The team
                </NavLink>
    </Menu.Item> */}
            </Menu>
            
      </div>
      <div id="signInOut">
        <Menu>
          <Menu.Item key="signin">
            {signInOut()}
          </Menu.Item>
        </Menu>
      </div>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
          <Route exact path="/Playground">
            <Playground />
          </Route>
          <Route exact path="/Editor">
            <Mallocieditor />
          </Route>
          <Route exact path="/Malloci">
            <Museum />
          </Route>
          <Route path="/exhibits/:exhibit">
            <Example/>
          </Route>
          <Route path="/Editor/:id">
            <Mallocieditor />
          </Route>
          <Route exact path="/TheTeam">
            <About />
          </Route>
          <Route exact path="/WikiViewer">
            <WikiViewer />
          </Route>
          {/* <Route exact path="/SignIn">
            <SignIn />
          </Route> */}
        </Switch>
        {RedirectRenderer()}

      </Router>
     </div>
    );
}

export default App
