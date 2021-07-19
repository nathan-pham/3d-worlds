import * as THREE from "https://esm.sh/three"

export default class Skybox {
    constructor() {
        this.object = this.createSkybox()
    }

    get images() {
        return ['x', 'y', 'z']
            .reduce((acc, cur) => [...acc, "pos" + cur, "neg" + cur], [])
            .map(img => `/js/classes/objects/Skybox/images/${img}.jpg`)
    }

    createSkybox() {
        const loader = new THREE.CubeTextureLoader()
        const texture = loader.load(this.images)
        return texture
    }
}