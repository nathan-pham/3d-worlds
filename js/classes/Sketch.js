import {OrbitControls} from "https://esm.sh/three/examples/jsm/controls/OrbitControls"
import * as THREE from "http://esm.sh/three"

export default class Sketch {
    constructor({container=document.body, controls}={}) {
        this.container = typeof container == "string" ? document.querySelector(container) : container
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}

        this.createScene()
        this.createCamera()
        this.createRenderer()

        if(controls) {
            this.createControls()
        }

        this.objects = []
        this.time = 0

        window.addEventListener("resize", this.resize.bind(this))
    }

    add(...objects) {
        for(const object of objects) {
            this.objects.push(object)
            this.scene.add(object.object || object)
        }
    }

    resize() {
        this.dimensions = {width: this.container.offsetWidth, height: this.container.offsetHeight}

        this.camera.aspect = this.dimensions.width / this.dimensions.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.dimensions.width, this.dimensions.height)
    }

    createControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.target.set(0, 0, 0)
        this.controls.update()
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
        this.camera.position.set(75, 20, 0)
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
        this.time += 0.05
        this.renderer.render(this.scene, this.camera)

        for(const object of this.objects) {
            if(typeof object?.update == "function") {
                object.update(this)
            }
        }

        window.requestAnimationFrame(this.render.bind(this))
    }
}