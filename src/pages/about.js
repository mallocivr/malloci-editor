import React, {useState} from "react"
import Layout from "../components/layout"
import "./gallery.css"
import { Card } from 'antd';

import Header from "../components/header";

const { Meta } = Card;

const About = () => (
    <Layout >
     <Header siteTitle={"About us"} ></Header>
    <div className="description">
        <p>The team behind Malloci</p>
    </div>
    <div className="mastercard">
<Card className="card-space"
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="Masha Belyi" description="NLP Engineer" />
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="Michael Gutensohn" description="Product Owner + VR Software Engineer" />
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="Jennifer Momoh" description="Quantitative UX Researcher" />
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="Sharanya Soundararajan" description="Rabbit" />
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="Yejun Wu" description="VR Experience Designer" />
  </Card>
  </div>
  </Layout>
);


export default About