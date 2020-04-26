import React, {useState} from "react"
import './App.css'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import { Menu } from 'antd';
import Mallocieditor from "./pages/mallocieditor"
import Home from "./pages/home"
import Gallery from "./pages/gallery"
import About from "./pages/about"


const logo = "logo.svg"

class App extends React.Component {
  // state = {
  //   current: 'home',
  // };

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };

  render() {
    return (
     <div id="navbar">
       <img src={logo} id="logoformatting"></img>

      <div id="mallocititle"><h2>Malloci</h2></div>


    <Router>
      <div id="menualign">
        
            <Menu mode="horizontal">
              <Menu.Item key="home">
                <NavLink to="/">
                  Home
      </NavLink>
              </Menu.Item>
              <Menu.Item key="gallery">
              <NavLink to="gallery">
              Gallery
      </NavLink>
    </Menu.Item>
              <Menu.Item key="mallocieditor">
                <NavLink to="mallocieditor">
                  Demo
      </NavLink>
              </Menu.Item>
              <Menu.Item key="about">
              <NavLink to="about">
                About us
                </NavLink>
    </Menu.Item>
            </Menu>
      </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mallocieditor">
            <Mallocieditor />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      
     </div>
    );
  }
}

export default App
