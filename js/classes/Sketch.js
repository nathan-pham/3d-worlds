import * as THREE from "https://esm.sh/three"

export default class Sketch {
    constructor({container}={}) {
        this.container = container
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}

        this.initialize()
    }

    initialize() {
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})

        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

        this.renderer.setSize(this.dimensions.width, this.dimensions.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.container.appendChild(this.renderer.domElement)
    }
}