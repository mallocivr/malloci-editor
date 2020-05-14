import React, {useState} from "react"
import Layout from "../components/layout"
import "./gallery.css"
import { Card } from 'antd';
import Masha from '../images/Masha.png'
import Michael from '../images/Michael.png'
import Yejun from '../images/Yejun.png'
import Jennifer from '../images/Jennifer.png'
import Sharanya from '../images/Sharanya.png'

import Header from "../components/header";

const { Meta } = Card;

const About = () => (
    <Layout >
     <Header siteTitle={"About us"} ></Header>
    <div className="description">
        <p>The team behind Malloci</p>
    </div>
    <div className="mastercard" style={{textAlign: 'center'}}>
<Card className="card-space"
    hoverable
    style={{ width: 300, padding: 20 }}
    cover={<img alt="Michael" src={Michael} />}
  >
    <Meta title="Michael Gutensohn" description="An AR/VR Developer and amateur photographer" style={{ textAlign: 'center' }}/>
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 300, padding: 20 }}
    cover={<img alt="Michael" src={Masha} />}
  >
    <Meta title="Masha Belyi" description="An NLP engineer, constantly trying to understand language" style={{ textAlign: 'center'}}/>
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 300, padding: 20 }}
    cover={<img alt="Yejun" src={Yejun} />}
  >
    <Meta title="Yejun Wu" description="An art historian turned UX Designer and product enthusiast" style={{ textAlign: 'center'}}/>
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 300, padding: 20 }}
    cover={<img alt="Jennifer" src={Jennifer} />}
  >
    <Meta title="Jennifer Momoh" description="A data scientist with a passion for social research" style={{ textAlign: 'center' }}/>
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 300, padding: 20 }}
    cover={<img alt="Sharanya" src={Sharanya} />}
  >
    <Meta title="Sharanya Soundararajan" description="A rabbit" style={{ textAlign: 'center' }}/>
  </Card>


  </div>
  </Layout>
);


export default About