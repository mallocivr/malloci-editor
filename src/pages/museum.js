import React, {useState, useEffect} from "react"
import "react-markdown"
import hljs from "highlight.js"
import VRMD from "../malloci/vrmd-parser"
import Layout from "../components/layout"
import Exhibit from "../components/exhibit"
import './museum.css'
import { Typography } from 'antd';
import ReactMarkdown from "react-markdown"

// const heroimg = '../logo.svg'
const Museum = () => {

  let [museumTree, setMuseumTree] = useState({ theme: {floor: null, walls: null, ceiling: null}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  
  let[md, setMd] = useState('')

  const vrmdParser = new VRMD()

    useEffect(() => {
      fetch("https://raw.githubusercontent.com/mallocivr/mallocivr.github.io/master/markDown/home.md")
      .then(res => res.text())
      .then(post => {
        vrmdParser.parse(post)
        setMd(vrmdParser.cleanedMD)
        setMuseumTree(vrmdParser.tree)
      })
      .catch((err) => console.error(err));
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
      let slug = text.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"").replace(/\W/g, '-')
      return React.createElement('h' + props.level, {id: slug}, props.children)
    }


  
  return(
  <Layout >
    <Typography >
    {/* <Header siteTitle={"Malloci"}></Header> */}
    {/* <Row id="hero">
      <Col className="heroimg" span={12}>
        
      </Col>
      <Col className="herotext" span={12}>
        <h1>Malloci</h1>
      </Col>
    </Row> */}

    <div className="museum">
      {/* <img className="heroimg" src={heroimg}></img> */}
      <div id="md_article" className="museumtext">
        <ReactMarkdown source={md} renderers={{heading: HeadingRenderer}}/>
      </div>
    </div>
    <Exhibit exhibitId="exhibit" tree= {museumTree} b64={false} debug={true}/>
    </Typography>
  </Layout>
)};

export default Museum