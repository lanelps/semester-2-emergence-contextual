// //Add Renderer
// renderer = new THREE.WebGLRenderer({antialias: true});
// var container = document.getElementById('mainScene');
// var w = 983;
// var h = container.offsetHeight;
// renderer.setClearColor(0x000000);
// renderer.setSize(w, h-3);
// container.appendChild(renderer.domElement);

// //Add Camera
// camera = new THREE.PerspectiveCamera( 35, w / h, 0.1, 3000 );

// //Create Scene with geometry, material-> mesh
// scene = new THREE.Scene();

// var light = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(light);

// var light1 = new THREE.PointLight(0xffffff, 0.5);
// scene.add(light1);

// geometry = new THREE.SphereGeometry(82.96, 100, 100);
// material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0,0,-1000);

// scene.add(mesh);

// requestAnimationFrame(render);

// function render(){
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01;
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }
