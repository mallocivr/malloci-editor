import React from "react"
import {Scene, Entity} from "aframe-react"
import { OmitProps } from "antd/lib/transfer/renderListBody"

const exhibit = (props) => {
  
  let treeString = JSON.stringify(props.tree)  

  let cursor = null

  if(props.editor) cursor =  <a-cursor></a-cursor>


  return(
      <Scene id={props.exhibitId} vr-mode-ui="enabled: false" embedded background="color: #87ceeb">
        <a-assets>
            <a-mixin id="checkpoint"></a-mixin>
            <a-mixin id="checkpoint-hovered" color="#6CEEB5"></a-mixin>
            <img id="wallTexture" src="/textures/wall.jpg"/>
            <img id="floorTexture" src="/textures/concrete_floor.jpg"/>
            <img id="ceilingTexture" src="/textures/concrete_floor.jpg"/>
            <img id="frameTexture" src="/textures/frame.jpg"/>
          </a-assets>
          <a-light type="ambient" position="0 6 0" rotation="0 0 45"></a-light>
          <Entity id="rig"
                    movement-controls={{enabled: true}}
                    position="2 0 1" 
                    rotation="0 180 0">
            <a-camera id="camera"
            look-controls="pointerLockEnabled: true">
            <a-sound  id ="ambient-track" src="src: url(/audio/light-piano-noodling-in-b.mp3)" autoplay="false" volume="0.4" loop ="true" position="0 4 0"></a-sound>
              {cursor}
            </a-camera>
          <Entity laser-controls={{hand: 'left'}} raycaster={{objects: '.clickable', far: 3}} teleport-controls={{collisionEntities: '.scenery', drawForAllCollisions: false, landingMaxAngle: 45, button: 'trigger', cameraRig: '#rig', teleportOrigin: '#camera'}}></Entity>
          <Entity laser-controls={{hand: 'right'}} raycaster={{objects: '.clickable', far: 3}} teleport-controls={{collisionEntities: '.scenery', drawForAllCollisions: false, landingMaxAngle: 45, button: 'trigger', cameraRig: '#rig', teleportOrigin: '#camera'}}></Entity>
        </Entity>
        <Entity id="museum" 
                malloci={{
                  tree: treeString,
                  hallWidth: 8,
                  wallHeight: 5,
                  base64Mode: props.b64,
                  debug: props.debug}}></Entity>
      </Scene>
)}

export default exhibit