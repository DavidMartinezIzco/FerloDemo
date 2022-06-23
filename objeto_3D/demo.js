const canvas = document.getElementById( "renderCanvas" );
const engine = new BABYLON.Engine( canvas, true );
var rutaObjeto = "";
const createScene = function () {
    const scene = new BABYLON.Scene( engine );
    BABYLON.SceneLoader.Append( "../../objeto/", "obj.glb", scene, function ( scene ) {
        // Create a default arc rotate camera and light.
        scene.createDefaultCameraOrLight( true, true, true );
        scene.activeCamera.alpha += Math.PI;
        scene.useRightHandedSystem = true;
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