import React, {useState, useEffect} from "react"
import {database} from "../firebase/firebase"
import { useParams } from 'react-router-dom';
import hljs from "highlight.js"
import Layout from "../components/layout"
import Exhibit from "../components/exhibit"
import { Typography } from 'antd';

import './museum.css'
import ReactMarkdown from "react-markdown"

const Example = () => {

  const { exhibit } = useParams();

  const [museumTree, setMuseumTree] = useState({ theme: {floor: null, walls: null, ceiling: null}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  
  const [md, setMd] = useState('')

    useEffect(() => {
      console.log(exhibit);

      var docRef = database.collection("exhibits").doc(exhibit);

      docRef.get().then(function(doc) {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              setMd(doc.data().md)
              setMuseumTree(doc.data().tree)
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }, [])

    useEffect(()=>{
      document.getElementById("md_article").querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });
    },[md])

    function flatten(text, child) {
      return typeof child === 'string'
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text)
    }
    
    function HeadingRenderer(props) {
      let children = React.Children.toArray(props.children)
      let text = children.reduce(flatten, '')
      let slug = text.toLowerCase().replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\W/g, '-')
      return React.createElement('h' + props.level, {id: slug}, props.children)
    }


  
  return(
  <Layout >
    <Typography>
    <div className="museum">
      {/* <img className="m" src={heroimg}></img> */}
      <div id="md_article" className="museumtext">
        <ReactMarkdown source={md} renderers={{heading: HeadingRenderer}}/>
      </div>
    </div>
    </Typography>
    <Exhibit exhibitId="exhibit" tree= {museumTree} b64={false} debug={true}/>
  </Layout>
)};

export default Example