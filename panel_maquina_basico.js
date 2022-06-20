//SOLO RENDER CON FUNCIONES 
//importa escena completa

const canvas = document.getElementById( "renderCanvas" );
const engine = new BABYLON.Engine( canvas, true );
var rutaObjeto = "";
const createScene = function () {
    const scene = new BABYLON.Scene( engine );
    //BABYLON.SceneLoader.Append( "../../objeto/", "Autoclave.obj", scene, function ( scene ) {
    BABYLON.SceneLoader.Append( "../../objeto/", "Autoclave.glb", scene, function ( scene ) {
        scene.createDefaultCameraOrLight( true, true, true );
        scene.activeCamera.alpha += Math.PI;
        scene.useRightHandedSystem = true;
        // Coleccion -> AutoclaveFull

        var a_cabeza = scene.getMeshByName( 'Autoclave_cabeza' );
        var a_cuerpo = scene.getMeshByName( 'Autoclave_cuerpo' );
        var a_patas = scene.getMeshByName( 'Atoclave_patas' );

        a_cabeza.actionManager = new BABYLON.ActionManager( scene );
        a_cabeza.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                var obj_seleccionado = e.meshUnderPointer;
                console.log( "cabeza" );

            } )
        );

        a_cuerpo.actionManager = new BABYLON.ActionManager( scene );
        a_cuerpo.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                var obj_seleccionado = e.meshUnderPointer;
                console.log( "cuerpo" );

            } )
        );

        a_patas.actionManager = new BABYLON.ActionManager( scene );
        a_patas.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                var obj_seleccionado = e.meshUnderPointer;
                console.log( "cuerpo" );

            } )
        );



    } );
    const camera = new BABYLON.ArcRotateCamera( "camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3( 0, 0, 0 ) );
    camera.attachControl( canvas, true );
    const light = new BABYLON.HemisphericLight( "light", new BABYLON.Vector3( 1, 1, 0 ) );
    return scene;
};
const scene = createScene();
engine.runRenderLoop( function () {
    scene.render();
    engine.resize();
} );
window.addEventListener( "resize", function () {
    engine.resize();
} );

//recursos externos 

//https://preview.babylonjs.com/babylon.js
//https://preview.babylonjs.com/loaders/babylonjs.loaders.js
//https://preview.babylonjs.com/inspector/babylon.inspector.bundle.
//https://preview.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js
//https://preview.babylonjs.com/serializers/babylonjs.serializers.min.js
//https://cdn.babylonjs.com/loaders/babylon.glTFFileLoader.js


//NOTAS:
//las animaciones y los ids de los objetos pasan de blender a babylon sin problemas
//el elementp camara de blender da totalmente igual
//los ids son importantes para captar eventos desde babylon
//se pueden intercalar funciones de atvise y babylon 
//necesitamos un PC mas potente para blender eso si
//falta saber porque leches nos sale siempre una resolucion de mierda