import React, {useState, useEffect} from "react"
import {database} from "../firebase/firebase"
import {Link} from 'react-router-dom';
import Layout from "../components/layout"
import "./gallery.css"
import { Card } from 'antd';

import Header from "../components/header";

const { Meta } = Card;

const Home = () => {
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
                cover={<img alt="example" src={doc.data().preview} />}
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
     <Header siteTitle={"Malloci - VR you can understand"} ></Header>
    <div className="description">
        <p>Malloci makes creating VR experiences for the web fast and easy.</p>
    </div>
    <div className="mastercard">
    <Link to={`/WikiViewer`}>
      <Card className="card-space"
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikipedia-logo-en-big.png/627px-Wikipedia-logo-en-big.png" />}
      >
      <Meta title="Explore Wikipedia with Malloci"/>
      </Card>     
    </Link>
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


export default Home