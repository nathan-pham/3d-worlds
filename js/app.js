import Sketch from "./classes/Sketch.js"
import DirectionalLight from "./classes/objects/DirectionalLight.js"

const sketch = new Sketch({container: document.getElementById("webgl__container")})
sketch.add(new DirectionalLight())