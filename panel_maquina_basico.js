//SOLO RENDER CON FUNCIONES 
//importa escena completa

const canvas = document.getElementById( "renderCanvas" );
const engine = new BABYLON.Engine( canvas, true );
var rutaObjeto = "";
const createScene = function () {
    const scene = new BABYLON.Scene( engine );

    BABYLON.SceneLoader.Append( "../../objeto/", "auto_oficial_OPT.glb", scene, function ( scene ) {
        scene.createDefaultCameraOrLight( true, true, true );
        scene.activeCamera.alpha += Math.PI;
        scene.useRightHandedSystem = true;

        // NOTAS VARIAS
        // hover con enfasis en los bordes: https://playground.babylonjs.com/#J19GYK#0
        // evento click con output fuera del canvas: hecho
        // controles fuera con respuesta dentro del canvas: demo de atvise

        var cacharros_1 = scene.getMeshByName( 'cacharro_1' );
        var cacharros_2 = scene.getMeshByName( 'cacharro_2' );
        var tubos = scene.getMeshByName( 'tubos_1' );
        cacharros_1.actionManager = new BABYLON.ActionManager( scene );
        cacharros_1.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                var obj_seleccionado = e.meshUnderPointer;
                alert( 'cacharros azules' );
            } )
        );
        cacharros_2.actionManager = new BABYLON.ActionManager( scene );
        cacharros_2.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                var obj_seleccionado = e.meshUnderPointer;
                alert( "cacharros rojos" );
            } )
        );
        tubos.actionManager = new BABYLON.ActionManager( scene );
        tubos.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                var obj_seleccionado = e.meshUnderPointer;
                alert( "tubos" );
            } )
        );

    } );
    const camera = new BABYLON.ArcRotateCamera( "camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3( 0, 0, 0 ) );
    camera.attachControl( canvas, true );
    const light = new BABYLON.HemisphericLight( "light", new BABYLON.Vector3( 1, 1, -10 ) );
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