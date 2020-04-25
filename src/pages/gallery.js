import React, {useState} from "react"
import Layout from "../components/layout"
import "./gallery.css"
import { Card } from 'antd';

import Header from "../components/header";

const { Meta } = Card;

const Gallery = () => (
    <Layout >
     <Header siteTitle={"Gallery"} ></Header>
    <div className="description">
        <p>A curation of VR museums generated using Malloci.</p>
    </div>
    <div className="mastercard">
<Card className="card-space"
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="The Auroras" description="Northern lights over Iceland" />
  </Card>

  <Card className="card-space"
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="The Other Auroras" description="Northern lights over Iceland" />
  </Card>
  </div>
  </Layout>
);


export default Gallery