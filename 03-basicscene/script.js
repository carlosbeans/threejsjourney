// console.log('Hello Three JS');
// console.log(THREE);

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

//mesh is comprised of geometry and materials
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//store our device width/height for later use
const sizes = {
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)


//renderer - this is where our stuff gets drawn
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)