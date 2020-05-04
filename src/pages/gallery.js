import React, {useState, useEffect} from "react"
import {database} from "../firebase/firebase"
import {Link} from 'react-router-dom';
import Layout from "../components/layout"
import "./gallery.css"
import { Card } from 'antd';

import Header from "../components/header";

const { Meta } = Card;

const Gallery = () => {
  const [tiles, setTiles] = useState([])

  useEffect(function() {
    database.collection("exhibits").get().then((querySnapshot) => {
      let exhibits = querySnapshot.docs.map((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          return(
            <Link to={`/Exhibits/${doc.id}`}>
              <Card className="card-space"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src="/img/Maria.jpg" />}
              >
              <Meta title={doc.data().title}/>
              </Card>     
            </Link>
          )
      });

      setTiles(exhibits)
    });
  },[])    

  
  return(
    <Layout >
     <Header siteTitle={"The Malloci Gallery"} ></Header>
    <div className="description">
        <p>A curation of VR museums generated using Malloci.</p>
    </div>
    <div className="mastercard">
    {tiles}
  {/* <Card className="card-space"
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Northern_lights_%289997815384%29.jpg" />}
  >
    <Meta title="The Other Auroras" description="Northern lights over Iceland" />
  </Card> */}
  </div>
  </Layout>
)};


export default Gallery