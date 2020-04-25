import React, {useState} from "react"
import Layout from "../components/layout"
import './home.css'

const heroimg = '../logo512.png'
const home = () => (
  <Layout >
    {/* <Header siteTitle={"Malloci"}></Header> */}
    {/* <Row id="hero">
      <Col className="heroimg" span={12}>
        
      </Col>
      <Col className="herotext" span={12}>
        <h1>Malloci</h1>
      </Col>
    </Row> */}

    <div className="hero">
      <img className="heroimg" src={heroimg}></img>
      <div className="herotext">
        <h1>Malloci</h1>
        <h2>A web editor to create web based VR content using MarkDown.</h2>
      </div>
    </div> 
  </Layout>
);

export default home