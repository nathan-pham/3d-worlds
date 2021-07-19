import Sketch from "./classes/Sketch.js"

import DirectionalLight from "./classes/objects/light/DirectionalLight.js"
import AmbientLight from "./classes/objects/light/AmbientLight.js"
import Skybox from "./classes/objects/skybox/Skybox.js"
import Plane from "./classes/objects/Plane.js"

const sketch = new Sketch({container: document.getElementById("webgl__container"), controls: true})

sketch.scene.background = (new Skybox()).object

sketch.add(new DirectionalLight())
sketch.add(new AmbientLight())
sketch.add(new Plane())


sketch.render()