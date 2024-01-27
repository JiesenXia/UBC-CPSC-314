/////////////////////////////////////////////////////////////////////////////////////////
//  UBC CPSC 314,  September 2022, Assignment 1 
/////////////////////////////////////////////////////////////////////////////////////////

console.log('CPSC 314 Assignment 1 by Jason Tao');

a=10;  b=3;
       function go() {
vara=14; b=15; }
       go();    console.log("a=",a,"b=",b);

a=5;  
b=2.6;
console.log('a=',a,'b=',b);
myvector = new THREE.Vector3(0,1,2);
console.log('myvector =',myvector)

// SETUP RENDERER & SCENE
var canvas = document.getElementById('canvas');
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
  // set background colour to 0xRRGGBB  where RR,GG,BB are values in [00,ff] in hexadecimal, i.e., [0,255] 
renderer.setClearColor(0xffffff);     
canvas.appendChild(renderer.domElement);

// SETUP CAMERA
var camera = new THREE.PerspectiveCamera(30,1,0.1,1000); // view angle, aspect ratio, near, far
camera.position.set(0,12,20);
camera.lookAt(0,0,0);
scene.add(camera);

// SETUP ORBIT CONTROLS OF THE CAMERA
var controls = new THREE.OrbitControls(camera);
controls.damping = 0.2;
controls.autoRotate = false;

// ADAPT TO WINDOW RESIZE
function resize() {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
}

// EVENT LISTENER RESIZE
window.addEventListener('resize',resize);
resize();

//SCROLLBAR FUNCTION DISABLE
window.onscroll = function () {
     window.scrollTo(0,0);
   }

/////////////////////////////////////	
// ADD LIGHTS  and define a simple material that uses lighting
/////////////////////////////////////	

light = new THREE.PointLight(0xffffff);
light.position.set(0,0,0);
scene.add(light);
ambientLight = new THREE.AmbientLight(0x606060);
scene.add(ambientLight);

var diffuseMaterial0 = new THREE.MeshLambertMaterial( {color: 0xFCE570} );
var diffuseMaterial1 = new THREE.MeshLambertMaterial( {color: 0xe5e5e5} );
var diffuseMaterial2 = new THREE.MeshLambertMaterial( {color: 0xe39e1c} );
var diffuseMaterial3 = new THREE.MeshLambertMaterial( {color: 0x3546A6} );
var diffuseMaterial4 = new THREE.MeshLambertMaterial( {color: 0x9C2E35} );
var diffuseMaterial5 = new THREE.MeshLambertMaterial( {color: 0xD39C7E} );
var diffuseMaterial6 = new THREE.MeshLambertMaterial( {color: 0xead6b8} );
var diffuseMaterial7 = new THREE.MeshLambertMaterial( {color: 0xe1eeee} );
var diffuseMaterial8 = new THREE.MeshLambertMaterial( {color: 0x4b70ff} );
var basicMaterial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var myMaterial = new THREE.MeshBasicMaterial( {color: 0x7fff7f} );

///////////////////////////////////////////////////////////////////////////////////////////
//  OBJECTS
///////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////	
// WORLD COORDINATE FRAME
/////////////////////////////////////	

var worldFrame = new THREE.AxesHelper(5) ;
scene.add(worldFrame);


/////////////////////////////////////	
// FLOOR with texture
/////////////////////////////////////	

floorTexture = new THREE.TextureLoader().load('images/space.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(1, 1);
floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
floorGeometry = new THREE.PlaneBufferGeometry(15, 15);
floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -1.1;
floor.rotation.x = Math.PI / 2;
scene.add(floor);

///////////////////////////////////////////////////////////////////////
//   sphere, representing the light 
///////////////////////////////////////////////////////////////////////
colory = new THREE.MeshBasicMaterial ({color:0xffff33});
sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);    // radius, segments, segments
sphere = new THREE.Mesh(sphereGeometry, colory);
sphere.position.set(0,4,2);

///////////////////////////////////////////////////////////////////////
//   Sun, a big sphere in the center of solar system.
///////////////////////////////////////////////////////////////////////

SunGeometry = new THREE.SphereGeometry( 1, 32, 32 );    // radius, segments, segments
colorsun = new THREE.MeshBasicMaterial ({color:0xFCE570});
sun = new THREE.Mesh(SunGeometry, colorsun);
sun.position.set(0,0,0);
scene.add(sun);

///////////////////////////////////////////////////////////////////////
//  Mercury:  clostest planet to the Sun    
///////////////////////////////////////////////////////////////////////
MerGeometry = new THREE.SphereGeometry( 0.2, 32, 32 );
colorMer = new THREE.MeshBasicMaterial ({color:0xe5e5e5});
mercury = new THREE.Mesh(MerGeometry, diffuseMaterial1);
mercury.position.set(2,0,0.2);
scene.add(mercury);
/////////////////////////////////////////////////////////////////////////
// Venus: second planet
/////////////////////////////////////////////////////////////////////////
VenusGeometry = new THREE.SphereGeometry(0.3, 32, 32 );
colorVe = new THREE.MeshBasicMaterial ({color:0xe39e1c});
venus = new THREE.Mesh(VenusGeometry,diffuseMaterial2);
venus.position.set(-2.5,0,-0.2);
scene.add(venus);

/////////////////////////////////////////////////////////////////////////
// earth: third planet
/////////////////////////////////////////////////////////////////////////
earthGeometry = new THREE.SphereGeometry(0.4, 32, 32 );
colorearth = new THREE.MeshBasicMaterial ({color:0x3546A6});
earth = new THREE.Mesh(earthGeometry,diffuseMaterial3);
earth.position.set(3,0,0);
scene.add(earth);


/////////////////////////////////////////////////////////////////////////
// mars : forth planet
/////////////////////////////////////////////////////////////////////////
marsGeometry = new THREE.SphereGeometry(0.3, 32, 32 );
colormars = new THREE.MeshBasicMaterial ({color:0x9C2E35});
mars = new THREE.Mesh(marsGeometry,diffuseMaterial4);
mars.position.set(3.5,0,-2.7);
scene.add(mars);


/////////////////////////////////////
//  Jupiter: fifth planet
////////////////////////////////////
JuGeometry = new THREE.SphereGeometry(0.6, 32, 32 );
colorJu = new THREE.MeshBasicMaterial ({color:0xD39C7E});
Jupiter = new THREE.Mesh(JuGeometry,diffuseMaterial5);
Jupiter.position.set(5.5,0,-1);
scene.add(Jupiter);

/////////////////////////////////////
//  Saturn: Sixth planet
////////////////////////////////////
SaGeometry = new THREE.SphereGeometry(0.5, 32, 32 );
colorSa = new THREE.MeshBasicMaterial ({color:0xead6b8});
saturn = new THREE.Mesh(SaGeometry,diffuseMaterial6);
saturn.position.set(6.5,0,4);
scene.add(saturn);

/////////////////////////////////////
//  Uranus : seventh planet
////////////////////////////////////
UrGeometry = new THREE.SphereGeometry(0.45, 32, 32 );
colorUr = new THREE.MeshBasicMaterial ({color:0xe1eeee});
uranus = new THREE.Mesh(UrGeometry,diffuseMaterial7);
uranus.position.set(7,0,-6);
scene.add(uranus);

/////////////////////////////////////
//  Neptune : eighth planet
////////////////////////////////////
NeGeometry = new THREE.SphereGeometry(0.48, 32, 32 );
colorNe = new THREE.MeshBasicMaterial ({color:0x4b70ff});
neptune = new THREE.Mesh(NeGeometry,diffuseMaterial8);
neptune.position.set(8,0,1);
scene.add(neptune);

//


/////////////////////////////////////////////////////////////////////////////////////
//  create my material
/////////////////////////////////////////////////////////////////////////////////////

var myMaterial = new THREE.ShaderMaterial( {
//	uniforms: uniforms,
        uniforms: { textureSampler: {type: 't', value: floorTexture}},
	vertexShader: document.getElementById( 'myVertexShader' ).textContent,
	fragmentShader: document.getElementById( 'myFragmentShader' ).textContent
} );

var ctx = renderer.context;
ctx.getShaderInfoLog = function () { return '' };   // stops shader warnings, seen in some browsers

/////////////////////////////////////////////////////////////////////////////////////
//  Object loaded from OBJ file, rendered using myMaterial
/////////////////////////////////////////////////////////////////////////////////////

var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
	console.log( item, loaded, total );
};

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete, 2) + '% downloaded' );
	}
};
var onError = function ( xhr ) {
};
var loader = new THREE.OBJLoader( manager );
loader.load( 'obj/teapot.obj', function ( object ) {
	object.traverse( function ( child ) {
		if ( child instanceof THREE.Mesh ) {
			child.material = myMaterial;
		}
	} );
	scene.add( object );
}, onProgress, onError );

///////////////////////////////////////////////////////////////////////////////////////
// LISTEN TO KEYBOARD
///////////////////////////////////////////////////////////////////////////////////////
let m = 0.1;
let v = 3.3;
let e = 0.1;
let ma = 5.62;
let j = -0.1;
let s = 0.6;
let u = 5.5;
let n = 0.2;
var keyboard = new THREEx.KeyboardState();
function checkKeyboard() {
  if (keyboard.pressed("W") ) {
    console.log('W pressed');
    m -= 0.083;
    v -= 0.032;
    e -= 0.020;
    ma -= 0.011;
    j -= 0.0017;
    s -= 0.00093;
    u -= 0.00024;
    n -= 0.00012;}
   else if (keyboard.pressed("S")){
    m += 0.083;
    v += 0.032;
    e += 0.020;
    ma += 0.011;
    j += 0.0017;
    s += 0.00093;
    u += 0.00024;
    n += 0.00012;}
  if (keyboard.pressed("A")){
    m -= 0.083;
    v -= 0.032;
    e -= 0.020;
    ma -= 0.011;
    j -= 0.0017;
    s -= 0.00093;
    u -= 0.00024;
    n -= 0.00012;}
  else if (keyboard.pressed("D")){
    m += 0.083;
    v += 0.032;
    e += 0.020;
    ma += 0.011;
    j += 0.0017;
    s += 0.00093;
    u += 0.00024;
    n += 0.00012;
    }
  mercury.position.set(Math.cos(m)*2,0,Math.sin(m)*2);
  venus.position.set(Math.cos(v)*2.5,0,Math.sin(v)*2.5);
  earth.position.set(Math.cos(e)*3, 0, Math.sin(e)*3);
  mars.position.set(Math.cos(ma)*4.4, 0, Math.sin(ma)*5);
  Jupiter.position.set(Math.cos(j)*5.5, 0, Math.sin(j)*5.5);
  saturn.position.set(Math.cos(s)*7.6, 0, Math.sin(s)*7.6);
  uranus.position.set(Math.cos(u)*9.2, 0, Math.sin(u)*9.2);
  neptune.position.set(Math.cos(n)*8,0,Math.sin(n)*8);
  
}

///////////////////////////////////////////////////////////////////////////////////////
// UPDATE CALLBACK
///////////////////////////////////////////////////////////////////////////////////////

function update() {
  checkKeyboard();
  requestAnimationFrame(update);      // requests the next update call;  this creates a loop
  renderer.render(scene, camera);
}

update();

