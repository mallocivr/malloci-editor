import React, {useState, useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom'

import firebase, {database} from "../firebase/firebase"
import FileDict from '../firebase/FileDictionary'

import ExhibitText from "../components/exhibittext"
import ImageFiles from "../components/imagefiles"
import { Button, Tooltip, Modal } from 'antd';
import { Row, Col, Tabs } from 'antd';
import Header from "../components/header";
import { DeleteOutlined } from '@ant-design/icons';

import Layout from "../components/layout"

import VRMD from "../malloci/vrmd-parser"

import ExhibitDocument from "../components/exhibitdocument"
import Exhibit from "../components/exhibit"

import "./editor.css"


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function FileDictConcat(o2) {
  for (var key in o2) {
   FileDict[key] = o2[key];
  }
  console.log(FileDict);
  
 }

const Mallocieditor = () => {

  const { id } = useParams();


  const [museumTree, setMuseumTree] = useState({ theme: {floor: null, walls: null, ceiling: null, sky: "135, 206, 235"}, rooms: [{name:"1", artifacts: []}, {name:"2", artifacts:[]}]})  
  const [md, setMd] = useState('')
  const [rawMD, setRawMD] = useState("# Hello world! \n\n> Welcome to the world! \n\n## Hello continent \n\nThis is a starter exhibit. Hit build to view it in VR. The name of the museum is Hello world!. There is one room, Hello Continent. There's some wall art about baby elephants and a picture of a baby elephant in a bucket. \n\n> Baby elephants are endangered \n\n![baby elephants are endangered!](https://i.imgur.com/SnolApK.jpg)")  
  const [owner, setOwner] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const [redirect, setRedirect] = useState('')

  const updateExhibit = async () => {
    const vrmdParser = new VRMD()
    const editor = document.getElementById('editor')
    let tree = vrmdParser.parse(editor.value, null, null, FileDict)
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
    setMd(vrmdParser.cleanedMD)
  }

  useEffect(() => {
    if(id)
    {
      let docRef = database.collection("exhibits").doc(id);

      docRef.get().then((doc) => {
          if (doc.exists) {
            if(!firebase.auth().currentUser || firebase.auth().currentUser.uid !== doc.data().authorID)
            {
              setRedirect(`/Exhibits/${docRef.id}`)
            }
            console.log("success!!!!");

            FileDictConcat(JSON.parse(doc.data().fileDict))
            setOwner(true)
            setRawMD(doc.data().rawMD)
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              setRedirect(`/Exhibits/${docRef.id}`)

          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
          setRedirect(`/Exhibits/${docRef.id}`)
      });
    }
    updateExhibit()
  },[])
  
  const uploadExhibit = () => {
    console.log(Object.keys(FileDict));
    if(id)
    {
      let docRef = database.collection("exhibits").doc(id);
      docRef.update({
        preview: Object.keys(FileDict).length !== 0 ? FileDict[Object.keys(FileDict)[0]] : 'img/Maria.jpg',
        title: museumTree.name,
        rawMD: document.getElementById('editor').value,
        fileDict: JSON.stringify(FileDict),
        md: md,
        tree: museumTree
      })
      .then(function() {
          console.log("Document successfully updated!");
          setRedirect(`/Exhibits/${docRef.id}`)
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }
    else
    {
      database.collection("exhibits").add({
        author: firebase.auth().currentUser.displayName,
        authorID: firebase.auth().currentUser.uid,
        preview: Object.keys(FileDict).length !== 0 ? FileDict[Object.keys(FileDict)[0]] : 'img/Maria.jpg',
        title: museumTree.name,
        rawMD: document.getElementById('editor').value,
        fileDict: JSON.stringify(FileDict),
        md: md,
        tree: museumTree
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        setRedirect(`/Exhibits/${docRef.id}`)
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  }

  const RedirectRenderer = () => {
    if(redirect !== '') return <Redirect to={redirect} push/>
    
  }

  const deleteExhibit = () => {
      database.collection("exhibits").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        setRedirect(`/`)

    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

  const DeleteButton = () => {
    if(owner)
    {
      return(
      <div>
        <Tooltip title="Delete This Exhibit"><Button type="danger" shape="circle" onClick={() => setModalVisible(true)} icon={<DeleteOutlined />} /></Tooltip>
        <Modal
        title="Basic Modal"
        visible={modalVisible}
        onOk={() => deleteExhibit()}
        onCancel={() => setModalVisible(false)}
        okText="Yes, delete this Exhibit."
        okButtonProps = {{ type:"danger" }}
        cancelText="Cancel"
      >
        <p>This will permanently delete your exhibit, Would you like to continue?</p>

      </Modal>
      </div>
        
      )
    }
  }
  
  return (
   <Layout >
     <Header siteTitle={"Create a New Exhibit"}></Header>
     <div id="alertstyle">
     {/* <Alert 
      message="Online only!"
      description="This is an online editor: museums you create using this tool will not be saved! Please copy your text from the Markdown panel before you close your session."
      type="info"
      showIcon closable
    /> */}
    </div>
     <Row>
     <Col classname="gutter-col">
        <div className="description">
            <p>A web editor to view museums written in markdown.<br></br>      
            Create your exhibit in the panel on the left; there's a guide detailing the markdown syntax you should use. View your exhibit space in the "Exhibit" tab of panel on the right. The "Document" tab will contain an article of your exhibit instead.<br></br>
            The editor area in the "Markdown" panel contains basic buttons to help you with the markdown syntax. You can click on the H icon to add a header, the link icon to link images, the blockquote icon to add a quote, and so on. In the event that you're using images from the internet in your exhibit via links, make sure that you're using images which are marked for reuse (they'll be blocked by your browser and won't show up, otherwise).
            </p>
        </div>
    </Col>
     </Row>
    <Row>
      <Col className="gutter-col" span={12}>
          <div className="gutter-row" id="exhibittext">
            <ExhibitText value={rawMD} />
          </div>

          <div className="gutter-row">
            <Button onClick={() => {updateExhibit()}} id="build-exhibit" type="primary">Build</Button>
          </div>
        
          <div className="gutter-row" id="imageupload">
            <ImageFiles></ImageFiles>
          </div>
        
      </Col>
      <Col className="gutter-col" span={12}>
      <div className="gutter-row" id="exhibitmaster">
          <div className="card-container">
            <Tabs onChange={callback} type="card">
                <TabPane id="exhibit_pane" tab="Exhibit" key="1">
                    <Exhibit exhibitId="preview" tree={museumTree} editor={true} debug={true}/>
                </TabPane>
        
                <TabPane tab="Document" key="2">
                    <ExhibitDocument md={md} />
                </TabPane>
          </Tabs>
          </div>
        </div>
        <div className="gutter-row">
            {DeleteButton()}
            <Button onClick={() => {uploadExhibit()}} id="create-exhibit" type="primary">Publish</Button>
          </div>
      </Col>
    </Row>
    {RedirectRenderer()}
  </Layout>
  );
}

export default Mallocieditor;
