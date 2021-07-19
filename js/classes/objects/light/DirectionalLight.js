import * as THREE from "https://esm.sh/three"

export default class DirectionalLight {
    constructor() {
        this.object = this.createLight()
    }

    createLight() {
        const light = new THREE.DirectionalLight(0xffffff)
        light.position.set(100, 100, 100)
        light.target.position.set(0, 0, 0)
        light.castShadow = true

        Object.assign(light.shadow, {
            bias: -0.01,
            mapSize: {width: 2048, height: 2048},
            camera: {near: 1, far: 500, left: 200, right: -200, top: 200, bottom: -200}
        })

        return light
    }
}