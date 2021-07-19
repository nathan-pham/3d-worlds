import Sketch from "./classes/Sketch.js"

import DirectionalLight from "./classes/objects/DirectionalLight.js"
import AmbientLight from "./classes/objects/AmbientLight.js"
import Skybox from "./classes/objects/Skybox/Skybox.js"

const sketch = new Sketch({container: document.getElementById("webgl__container"), controls: true})
sketch.add(new DirectionalLight())
sketch.add(new AmbientLight())

sketch.scene.background = (new Skybox()).object

console.log(sketch)

sketch.render()