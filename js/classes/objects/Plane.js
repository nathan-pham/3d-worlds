import * as THREE from "https://esm.sh/three"

export default class Plane { 
    constructor(config=[100, 100, 1, 1]) {
        this.object = this.createPlane(config)
    }

    createPlane(config) {
        this.geometry = new THREE.PlaneGeometry(...config)
        this.material = new THREE.MeshPhongMaterial({color: 0xffffff})

        const plane = new THREE.Mesh(this.geometry, this.material)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        plane.castShadow = true

        return plane
    }
}