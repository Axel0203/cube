import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const app = document.querySelector('#app')
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
app.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshNormalMaterial()
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


//scroll animation

const moveCamera = () =>{
  const t = document.body.getBoundingClientRect().top
  cube.rotation.x = t * 0.002;
  cube.rotation.y = t* 0.002;
}

document.body.onscroll = moveCamera

const list  =  document.querySelector("#app > main > ul")

for (let index = 0; index < 100; index++) {
  const elem = document.createElement("li")
  elem.innerHTML = "<h1>.</h1>"
  list.appendChild(elem)
}
const elem = document.createElement("li")
  elem.innerHTML = "<h1>. Nice</h1>"
  list.appendChild(elem)
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();