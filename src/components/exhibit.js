import React from "react"

const exhibit = () => (
    <div id="exhibit">
        <a-scene id="scene" embedded background="color: #87ceeb">
            <a-assets>
              <a-mixin id="checkpoint"></a-mixin>
              <a-mixin id="checkpoint-hovered" color="#6CEEB5"></a-mixin>
              <img id="wallTexture" src="https://cdn.jsdelivr.net/gh/mallocivr/Malloci/dist/textures/wall.jpg" />
              <img id="floorTexture" src="https://cdn.jsdelivr.net/gh/mallocivr/Malloci/dist/textures/concrete_floor.jpg" />
              <img id="ceilingTexture" src="https://cdn.jsdelivr.net/gh/mallocivr/Malloci/dist/textures/concrete_floor.jpg" />
            </a-assets>
            <a-light type="ambient" position="0 6 0" rotation="0 0 45"></a-light>
            <a-entity id="rig"
                      movement-controls
                      position="2 0 1" 
                      rotation="0 180 0">
              <a-camera id="camera"
              look-controls="pointerLockEnabled: true">
              <a-cursor></a-cursor>
              </a-camera>
              <a-entity oculus-touch-controls="hand: left" teleport-controls="collisionEntities: .scenery; landingMaxAngle: 45; button: trigger; cameraRig: #rig; teleportOrigin: #camera;"></a-entity>
              <a-entity oculus-touch-controls="hand: right" teleport-controls="collisionEntities: .scenery; landingMaxAngle: 45; button: trigger; cameraRig: #rig; teleportOrigin: #camera;"></a-entity>
            </a-entity>
          </a-scene>
    </div>
)

export default exhibit