import * as THREE from "https://esm.sh/three"

export default class Box {
    constructor() {
        this.object = this.createBox()
    }

    createBox() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
        this.material = new THREE.MeshPhongMaterial({color: 0x808080})

        const box = new THREE.Mesh(this.geometry, this.material)
        box.position.set(0, 1, 0)
        box.receiveShadow = true
        box.castShadow = true

        return box
    }
}