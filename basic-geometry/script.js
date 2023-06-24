const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'orange'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
camera.position.x = 2
scene.add(camera)

const webglEl = document.getElementById('webgl')

const renderer = new THREE.WebGLRenderer({
  convas: webglEl
})

renderer.setSize(sizes.width, sizes.height)
document.body.appendChild( renderer.domElement );
renderer.render(scene, camera)