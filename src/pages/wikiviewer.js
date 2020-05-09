import React, {useState, useEffect} from "react"
import hljs from "highlight.js"
import Layout from "../components/layout"
import Exhibit from "../components/exhibit"
import { AutoComplete, Typography } from 'antd';

import WikiParser from "../malloci/wiki-parser"
import VRMD from "../malloci/vrmd-parser"

import './museum.css'
import ReactMarkdown from "react-markdown"

const WikiViewer = () => {

  const [museumTree, setMuseumTree] = useState({ theme: {floor: null, walls: null, ceiling: null}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  
  const [md, setMd] = useState('')

  const wikiParser = new WikiParser()
  const vrmdParser = new VRMD()

  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const formatOptions = (vals) => {
    return vals.map((val) => {
        return {value: val}
    })
  };

  const onSearch = searchText => {
    wikiParser.search(searchText, 10, function(resp){       
        setOptions(formatOptions(resp[1]));
    })
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
    wikiParser.parseFull(data.replace(/ /g, "_"), async function(markDown){
        console.log(markDown);
        
        // let tree = vrmdParser.parse(markDown)
        // const response = await fetch("https://malloci.uc.r.appspot.com/generate", {
        // method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // include, *same-origin, omit
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *client
        // body: JSON.stringify(tree) // body data type must match "Content-Type" header
        // })
        // if (!response.ok) {
        // console.error("bad response, loading user defined tree")
        // setMuseumTree(tree)
        // }
        // else
        // {
        // tree = await response.json()
        // setMuseumTree(tree)
        // }
        // setMd(vrmdParser.cleanedMD)

    })
  };

  const onChange = data => {
    setValue(data);
  };


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
  
  return(
  <Layout >
    <Typography>
    <div className="museum">
      <div id="md_article" className="museumtext">
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Search Wikipedia"
      />
        <ReactMarkdown source={md} renderers={{heading: HeadingRenderer, image: ImageRenderer}}/>
      </div>
    </div>
    </Typography>
    <Exhibit exhibitId="exhibit" tree= {museumTree} b64={false} debug={true}/>
  </Layout>
)};

export default WikiViewer