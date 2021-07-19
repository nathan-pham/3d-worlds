import * as THREE from "https://esm.sh/three"

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default class Box {
    constructor(position=[0, 1, 0]) {
        this.object = this.createBox(position)
        this.minY = random(10, 20)
        this.speed = random(100, 200) / 100
    }

    generateSize(min, max) {
        return [random(min, max), random(min, max), random(min, max)]
    }
    createBox(position) {
        this.geometry = new THREE.BoxGeometry(...this.generateSize(2, 5))
        this.material = new THREE.MeshPhongMaterial({color: 0x808080})

        const box = new THREE.Mesh(this.geometry, this.material)
        box.position.set(...position)
        box.receiveShadow = true
        box.castShadow = true

        return box
    }

    update({ time }) {
        this.object.position.y = Math.sin(time * this.speed) + this.minY
    }
}