import React from "react"
import {Scene, Entity} from "aframe-react"

const exhibit = (props) => {
  
  let treeString = JSON.stringify(props.tree)

  return(
  <div>
      <Scene id="exhibit" embedded background="color: #87ceeb">
        <a-assets>
            <a-mixin id="checkpoint"></a-mixin>
            <a-mixin id="checkpoint-hovered" color="#6CEEB5"></a-mixin>
            <img id="wallTexture" src="https://cdn.jsdelivr.net/gh/mallocivr/Malloci/dist/textures/wall.jpg"/>
            <img id="floorTexture" src="https://cdn.jsdelivr.net/gh/mallocivr/Malloci/dist/textures/concrete_floor.jpg"/>
            <img id="ceilingTexture" src="https://cdn.jsdelivr.net/gh/mallocivr/Malloci/dist/textures/concrete_floor.jpg"/>
          </a-assets>
          <a-light type="ambient" position="0 6 0" rotation="0 0 45"></a-light>
          <Entity id="rig"
                    movement-controls="enabled: true; controls: keyboard"
                    position="2 0 1" 
                    rotation="0 180 0">
            <a-camera id="camera"
            look-controls="pointerLockEnabled: true">
            <a-cursor></a-cursor>
            </a-camera>
          <Entity oculus-touch-controls="hand: left" teleport-controls="collisionEntities: .scenery; landingMaxAngle: 45; button: trigger; cameraRig: #rig; teleportOrigin: #camera;"></Entity>
          <Entity oculus-touch-controls="hand: right" teleport-controls="collisionEntities: .scenery; landingMaxAngle: 45; button: trigger; cameraRig: #rig; teleportOrigin: #camera;"></Entity>
        </Entity>
        <Entity id="museum" 
                malloci={{
                  tree: treeString,
                  hallWidth: 8,
                  wallHeight: 5,
                  base64Mode: true,
                  debug: true}}></Entity>
      </Scene>
  </div>
)}

export default exhibit