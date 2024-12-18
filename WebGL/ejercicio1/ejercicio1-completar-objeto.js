// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
    
        var migeometria = new THREE.Geometry();
		// Definir los vértices del triángulo
	migeometria.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0)); 
	migeometria.vertices.push(new THREE.Vector3(2.0, 0.0, 0.0)); 
	migeometria.vertices.push(new THREE.Vector3(1.0, 2.0, 0.0)); 


	migeometria.faces.push(new THREE.Face3(0, 1, 2));
	migeometria.faces.push(new THREE.Face3(0, 2, 1));
	// migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.3, 0.3, 0.0 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, -0.3 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, 0.0 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	// migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );

	// migeometria.vertices.push( new THREE.Vector3( 0.3, 0.3, 0.3 ) ); 

	//migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	// migeometria.faces.push( new THREE.Face3( 0, 2, 5 ) );
	//migeometria.faces.push( new THREE.Face3( 0, 2, 1 ) );
	// migeometria.faces.push( new THREE.Face3( 0, 5, 2 ) );

	// migeometria.faces.push( new THREE.Face3( 0, 3, 6 ) );
	// migeometria.faces.push( new THREE.Face3( 0, 6, 1 ) );
	// migeometria.faces.push( new THREE.Face3( 0, 1, 6 ) );
	// migeometria.faces.push( new THREE.Face3( 0, 6, 3 ) );

	// migeometria.faces.push( new THREE.Face3( 0, 3, 5 ) );
	// migeometria.faces.push( new THREE.Face3( 5, 3, 4 ) );
	// migeometria.faces.push( new THREE.Face3( 0, 5, 3 ) );
	// migeometria.faces.push( new THREE.Face3( 5, 4, 3 ) );

	// migeometria.faces.push( new THREE.Face3( 1, 6, 2 ) );
	 //migeometria.faces.push( new THREE.Face3( 1, 2, 6 ) );
	//migeometria.faces.push( new THREE.Face3( 6, 7, 2 ) );
	//migeometria.faces.push( new THREE.Face3( 6, 2, 7 ) );


    //var material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } ); // Material de color rojo
	migeometria.faces[0].vertexColors[0] = new THREE.Color(0xff0000); 
	migeometria.faces[0].vertexColors[1] = new THREE.Color(0x00ff00); 
	migeometria.faces[0].vertexColors[2] = new THREE.Color(0x0000ff); 

	migeometria.faces[1].vertexColors[0] = new THREE.Color(0xff0000); 
	migeometria.faces[1].vertexColors[1] = new THREE.Color(0x00ff00); 
	migeometria.faces[1].vertexColors[2] = new THREE.Color(0x0000ff); 

	var material = new THREE.MeshBasicMaterial({
	vertexColors: THREE.VertexColors, 
	});

    var miobjeto = new THREE.Mesh (migeometria, material); 

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add( miobjeto );

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}



// Rojo: 0xff0000
// Verde: 0x00ff00
// Azul: 0x0000ff
// Blanco: 0xffffff
// Negro: 0x000000
// Amarillo: 0xffff00
// Cian (Aqua): 0x00ffff
// Magenta: 0xff00ff
// Gris: 0x808080
// Naranja: 0xffa500
// Morado: 0x800080
// Rosa: 0xffc0cb
// Marrón: 0x8b4513