import * as THREE from 'three';

import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

var container,
    renderer,
    scene,
    camera,
    material,
    geo,
    mesh,
    start = Date.now(),
    fov = 30;


container = document.getElementById("drowrange");

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    1,
    10000
);
camera.position.z = 27;
camera.noZoom = false;
camera.zoomSpeed = 1.5;

const uniforms = {
    u_resolution: {
        type: 'v2',
        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
    },
    u_time: {
        type: 'f',
        value: 0.0
    }
}

material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
});

geo = new THREE.IcosahedronGeometry(4, 20)
mesh = new THREE.Mesh(
    geo, material
);
scene.add(mesh);
mesh.material.wireframe = true

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

render();


function render() {

    renderer.render(scene, camera);
    requestAnimationFrame(render);

}