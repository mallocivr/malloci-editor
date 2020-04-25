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

const logo = "logo512.png"

class Navbar extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
     <div id="navbar">

      <img src={logo} id="logoformatting"></img>

      <div id="mallocititle"><h3>Malloci</h3></div>

        <div id="menualign">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home">
            <NavLink to="/">
              Home
          </NavLink>
          </Menu.Item>
          <Menu.Item key="gallery">
            Exhibits Gallery
        </Menu.Item>
          <Menu.Item key="mallocieditor">
            <NavLink to="mallocieditor">
              Demo
          </NavLink>
          </Menu.Item>
          <Menu.Item key="about">
            About us
        </Menu.Item>
        </Menu>
        </div>      
     </div>
    );
  }
}

export default Navbar
