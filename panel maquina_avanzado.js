var canvas = document.getElementById( 'renderCanvas' );

var delayCreateScene = function ( engine ) {
    var scene = new BABYLON.Scene( engine );

    var light0 = new BABYLON.PointLight( 'Omni', new BABYLON.Vector3( 0, 2, 8 ), scene );
    var light = new BABYLON.HemisphericLight( 'hemiLight', new BABYLON.Vector3( -1, 1, 0 ), scene );

    light.diffuse = new BABYLON.Color3( 1, 0, 0 );
    light.specular = new BABYLON.Color3( 0, 1, 0 );
    light.groundColor = new BABYLON.Color3( 0, 1, 0 );

    scene.imageProcessingConfiguration.contrast = 1;
    scene.imageProcessingConfiguration.exposure = 0.6;
    scene.imageProcessingConfiguration.toneMappingEnabled = true;

    var camera = new BABYLON.FreeCamera( 'FreeCamera', new BABYLON.Vector3( 0, 0, 5 ), scene );
    camera.rotation = new BABYLON.Vector3( 0, Math.PI, 0 );

    camera.attachControl( canvas, true );

    BABYLON.SceneLoader.Append( '../../objeto/', 'obj.glb', scene, function ( meshes ) {
        scene.createDefaultCameraOrLight( true, true, true );

        scene.activeCamera.alpha = 2.5;
        scene.activeCamera.beta = 1.5;
        scene.activeCamera.useAutoRotationBehavior = false;
        scene.activeCamera.setPosition( new BABYLON.Vector3( 10000, 5000, 0 ) );

        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI( "UI" );

        var helper = scene.createDefaultEnvironment();
        helper.setMainColor( BABYLON.Color3.Gray() );

        //Autoclave_cabeza
        //Autoclave_cuerpo
        //Autoclave_patas


        //     var wall = scene.getMeshByName( 'Box003' );
        //     //wall.visibility=false;
        //     //Box1
        //     var box1 = scene.getMeshByName( 'Layer_012' );

        //     //Glow Layer for Box1
        //     var gl1 = new BABYLON.GlowLayer( 'glow', scene );
        //     gl1.customEmissiveColorSelector = function ( mesh, subMesh, material, result ) {
        //         if ( mesh.name === 'Layer_012' ) {
        //             result.set( 1, 0, 0, 1 );
        //         } else {
        //             result.set( 0, 0, 0, 0 );
        //         }
        //     };

        //     //data for Box1
        //     var interval1 = null;
        //     webMI.data.subscribe( 'AGENT.OBJECTS.PumpStation.AlarmValve1', function ( e ) {
        //         if ( e.value ) {
        //             clearInterval( interval1 );
        //             interval1 = setInterval( function ( e ) {
        //                 gl1.isEnabled = !gl1.isEnabled;
        //             }, 250 );
        //         } else {
        //             clearInterval( interval1 );
        //             gl1.isEnabled = false;
        //         }
        //     } );


        //     //Glow Layer for predefined - Pump

        //     var pumpId = 'Layer_equipment025';

        //     var gl3 = new BABYLON.GlowLayer( 'glow', scene );
        //     gl3.customEmissiveColorSelector = function ( mesh, subMesh, material, result ) {
        //         if ( mesh.name === pumpId ) {
        //             result.set( 0, 1, 0, 1 );
        //         } else {
        //             result.set( 0, 0, 0, 0 );
        //         }
        //     };
        //     gl3.intensity = 1;

        //     webMI.data.subscribe( 'AGENT.OBJECTS.PumpStation.HeatPump', function ( e ) {
        //         gl3.isEnabled = e.value;
        //     } );


        //     var heatPump = scene.getMeshByName( pumpId );

        //     heatPump.actionManager = new BABYLON.ActionManager( scene );

        //     heatPump.actionManager.registerAction(
        //         new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( event ) {
        //             var pickedMesh = event.meshUnderPointer;

        //             webMI.display.openWindow( {
        //                 display: 'AGENT.OBJECTS.PumpStation.HeatPumpDialog',
        //                 query: {
        //                     base: 'AGENT.OBJECTS.PumpStation.HeatPump',
        //                     titel: 'Heat Pump'
        //                 },
        //                 extern: false,
        //                 height: 350,
        //                 menubar: false,
        //                 modal: false,
        //                 movable: true,
        //                 resizable: false,
        //                 scrollbars: false,
        //                 status: false,
        //                 title: '',
        //                 toolbar: false,
        //                 width: 400,
        //             } );
        //         } )
        //     );


    } );

    return scene;
};
__createScene = delayCreateScene;

var engine = new BABYLON.Engine( canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
} );
var scene = delayCreateScene();

engine.runRenderLoop( function () {
    if ( scene ) {
        scene.render();
    }
} );

// Resize
window.addEventListener( 'resize', function () {
    engine.resize();
} );