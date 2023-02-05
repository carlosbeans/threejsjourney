import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

//instantiate material and geometry inside the mesh
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)


//Axes Helper
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/* Clock */
const clock = new THREE.Clock()

/* Animations */
gsap.to(cube1.position, {duration: 1, delay: 1, x:2})

//call function to use on next frame
// let time = Date.now()
const tick = () => {

//     //use clock
//     const elapsedTime = clock.getElapsedTime

//     //Time - compensate for variable frame rates
//     // const currentTime = Date.now()
//     // const deltaTime = currentTime - time
//     // time = currentTime
//     // console.log(time)

//     //Update Object - rotation
//     cube1.rotation.x += 0.001
//     cube1.rotation.y += 0.01

//     cube1.scale.x += 0.01
//     cube1.scale.y += 0.01

//     //Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()