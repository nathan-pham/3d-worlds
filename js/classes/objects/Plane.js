import * as THREE from "https://esm.sh/three"

export default class Plane { 
    constructor() {
        this.object = this.createPlane()
    }

    createPlane() {
        this.geometry = new THREE.PlaneGeometry(100, 100, 1, 1)
        this.material = new THREE.MeshPhongMaterial({color: 0xffffff})

        const plane = new THREE.Mesh(this.geometry, this.material)
        plane.rotation.x = -Math.PI / 2
        plane.receiveShadow = true
        plane.castShadow = true

        return plane
    }
}