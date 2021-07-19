import Sketch from "./classes/Sketch.js"

import DirectionalLight from "./classes/objects/DirectionalLight.js"
import AmbientLight from "./classes/objects/AmbientLight.js"

const sketch = new Sketch({container: document.getElementById("webgl__container")})
sketch.add(new DirectionalLight())
sketch.add(new AmbientLight())