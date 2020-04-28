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
import Museum from "./pages/museum"
import Gallery from "./pages/gallery"
import Example from "./pages/example"
import About from "./pages/about"


const logo = "./logo192.png"

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
              <Menu.Item key="gallery">
                <NavLink to="/">
                  Gallery
      </NavLink>
              </Menu.Item>
              <Menu.Item key="museum">
              <NavLink to="museum">
              About Malloci
      </NavLink>
    </Menu.Item>
              <Menu.Item key="mallocieditor">
                <NavLink to="mallocieditor">
                  Editor
      </NavLink>
              </Menu.Item>
              <Menu.Item key="about">
              <NavLink to="about">
                The team
                </NavLink>
    </Menu.Item>
            </Menu>
      </div>
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route exact path="/mallocieditor">
            <Mallocieditor />
          </Route>
          <Route path="/museum">
            <Museum />
          </Route>
          <Route path="/exhibits/:exhibit">
            <Example/>
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
