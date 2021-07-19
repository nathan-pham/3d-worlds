import * as THREE from "https://esm.sh/three"

export default class Sketch {
    constructor({container}={}) {
        this.container = container || document.body
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}

        this.createRenderer()
        this.createCamera()
        this.createScene()

        window.addEventListener("resize", this.resize.bind(this))

        this.objects = []
    }

    add(object) {
        this.objects.push(object)
        this.scene.add(object.object || object)
    }

    resize() {
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}
        this.renderer.setSize(this.dimensions.width, this.dimensions.height)
        this.camera.aspect = this.dimensions.width / this.dimensions.height
        this.camera.updateProjectionMatrix()
    }

    createScene() {
        this.scene = new THREE.Scene()
    }

    createCamera() {
        const fov = 60
        const near = 1
        const far = 1000
        const aspect = this.dimensions.width / this.dimensions.height

        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
        this.camera.position.z = 5
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})

        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

        this.renderer.setSize(this.dimensions.width, this.dimensions.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.container.appendChild(this.renderer.domElement)
    }

    render() {
        this.renderer.render(this.scene, this.camera)
        window.requestAnimationFrame(this.render.bind(this))
    }
}