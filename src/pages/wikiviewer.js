import React, {useState, useEffect} from "react"
import hljs from "highlight.js"
import Layout from "../components/layout"
import Exhibit from "../components/exhibit"
import { AutoComplete, Typography } from 'antd';

import WikiParser from "../malloci/wiki-parser"
import VRMD from "../malloci/vrmd-parser"
import './wiki.css'

const WikiViewer = () => {

  const [museumTree, setMuseumTree] = useState({ theme: {floor: null, walls: null, ceiling: null}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  

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
    wikiParser.parseFull(data.replace(/ /g, "_"), null, null, async function(markDown){
        
        let tree = vrmdParser.parse(markDown, 10, 3)
        tree.maxPerRoom = 4
        console.log(JSON.stringify(tree));

        const response = await fetch("https://malloci.uc.r.appspot.com/generate", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(tree) // body data type must match "Content-Type" header
        })
        if (!response.ok) {
        console.error("bad response, loading user defined tree")

        setMuseumTree(tree)
        }
        else
        {
        tree = await response.json()
        
        setMuseumTree(tree)
        }

    })
  };

  const onChange = data => {
    setValue(data);
  };
  
  return(
  <Layout >
    <Typography>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: '70vw',
          margin: '10px auto',
          position: 'absolute',
          left: '26px',
          zIndex: '2',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Search Wikipedia"
      />
    </Typography>
    <Exhibit exhibitId="wiki-exhibit" tree={museumTree} b64={false} debug={true}/>
  </Layout>
)};

export default WikiViewer