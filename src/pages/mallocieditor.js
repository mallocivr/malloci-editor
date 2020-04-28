import React, {useState} from 'react';
// import './App.css';

import ExhibitText from "../components/exhibittext"
import ImageFiles from "../components/imagefiles"
import { Button } from 'antd';
import { Row, Col, Tabs } from 'antd';
import Header from "../components/header";
import { Alert } from 'antd';
import Layout from "../components/layout"

import VRMD from "../malloci/vrmd-parser"

import ExhibitDocument from "../components/exhibitdocument"
import Exhibit from "../components/exhibit"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


function Mallocieditor() {

  const [museumTree, setMuseumTree] = useState({ theme: {floor: null, walls: null, ceiling: null}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  

  const updateExhibit = () => {
  
    const vrmdParser = new VRMD()
    const editor = document.getElementById('editor')
  
    let tree = vrmdParser.parse(editor.value)
    setMuseumTree(tree)
  }
  
  return (
    
   <Layout >
     <Header siteTitle={"Malloci Editor"}></Header>
     <div id="alertstyle">
     <Alert 
      message="Online only!"
      description="This is an online editor: museums you create using this tool will not be saved! Please copy your text from the Markdown panel before you close your session."
      type="info"
      showIcon closable
    />
    </div>
     <Row>
     <Col classname="gutter-col">
        <div className="description">
            <p>A web editor to view museums written in markdown.<br></br>      
              Use the panel on the left to create your exhibit; there's a guide detailing the markdown syntax you should use. View your exhibit space in the "Exhibit" tab of panel on the right. The "Document" tab will contain an article of your exhibit instead.</p>
        </div>
    </Col>
     </Row>
    <Row>
      <Col className="gutter-col" span={12}>
          <div className="gutter-row" id="exhibittext">
            <ExhibitText />
          </div>

          <div className="gutter-row">
            <Button onClick={() => {updateExhibit()}} id="build-exhibit" type="primary">Build</Button>
          </div>
        
          <div className="gutter-row" id="imageupload">
            <ImageFiles></ImageFiles>
          </div>
        
      </Col>
      <Col className="gutter-col" span={12}>
      <div id="exhibitmaster">
          <div className="card-container">
            <Tabs onChange={callback} type="card">
                <TabPane id="exhibit_pane" tab="Exhibit" key="1">
                    <Exhibit exhibitId="preview" tree={museumTree} b64={true} debug={true}/>
                </TabPane>
        
                <TabPane tab="Document" key="2">
                    <ExhibitDocument />
                </TabPane>
          </Tabs>
          </div>
        </div>
      </Col>
    </Row>

  </Layout>
  );
}

export default Mallocieditor;
