import React, {useState, useEffect} from "react"
import firebase, {database} from "../firebase/firebase"
import {Link, useParams } from 'react-router-dom';
import hljs from "highlight.js"
import Layout from "../components/layout"
import Exhibit from "../components/exhibit"
import {Tooltip, Button, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
  
import './museum.css'
import ReactMarkdown from "react-markdown"

const Example = () => {

  const { exhibit } = useParams();

  const [museumTree, setMuseumTree] = useState({ theme: {floor: null, frames: null, walls: null, ceiling: null, sky: '255,0,0'}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  
  const [md, setMd] = useState('')

  const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
      var docRef = database.collection("exhibits").doc(exhibit);

      docRef.get().then(function(doc) {
          if (doc.exists) {
            if(firebase.auth().currentUser && firebase.auth().currentUser.uid === doc.data().authorID)
            {
              setIsOwner(true)
            }
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
      let slug = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=_`~()?]/g,"").replace(/[ ’]/g, '-')
      return React.createElement('h' + props.level, {id: slug}, props.children)
    }

    function ImageRenderer(props) {
      return <p><img {...props} /></p>
    }

    function checkOwnerShip(){
      if(isOwner)
      {
        return <Link to={`/Editor/${exhibit}`}><Tooltip title="Edit This Exhibit"><Button type="default" shape="circle" icon={<EditOutlined />} /></Tooltip></Link>
      }
    }
  
  return(
  <Layout >
    <Typography>
    <div className="museum">
      {/* <img className="m" src={heroimg}></img> */}
      <div id="md_article" className="museumtext">
        {checkOwnerShip()}
        <ReactMarkdown source={md} renderers={{heading: HeadingRenderer, image: ImageRenderer}}/>
      </div>
    </div>
    </Typography>
    <Exhibit exhibitId="exhibit" tree= {museumTree} b64={false} debug={true}/>
  </Layout>
)};

export default Example