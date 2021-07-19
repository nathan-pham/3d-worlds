import THREE from "https://esm.sh/three"

export default class AmbientLight {
    constructor() {
        this.light = this.createLight()
    }
    
    createLight() {
        const light = new THREE.AmbientLight(0x404040)
        return light
    }
}