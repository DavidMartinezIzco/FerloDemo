webMI.addOnload( function () {

    const canvas = document.getElementById( "renderCanvas" ); // Get the canvas element
    const engine = new BABYLON.Engine( canvas, true ); // Generate the BABYLON 3D engine

    // Add your code here matching the playground format
    const createScene = function () {
        const scene = new BABYLON.Scene( engine );

        //escena de habitacion
        // BABYLON.SceneLoader.ImportMesh(
        //     "",
        //     "https://models.babylonjs.com/CornellBox/",
        //     "cornellBox.babylon",
        //     scene,
        //     function ( meshes ) {
        //         scene.createDefaultCameraOrLight( true, true, true );
        //         scene.createDefaultEnvironment();
        //     } );

        // const camera = new BABYLON.ArcRotateCamera( "camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3( 0, 0, 0 ) );
        // camera.attachControl( canvas, true );
        // const light = new BABYLON.HemisphericLight( "light", new BABYLON.Vector3( 1, 1, 0 ) );


        //escena de avioncito
        // BABYLON.SceneLoader.ImportMesh( "", "https://models.babylonjs.com/", "aerobatic_plane.glb", scene, function ( meshes ) {
        //     scene.createDefaultCameraOrLight( true, true, true );
        //     scene.createDefaultEnvironment();

        // } );

        // const camera = new BABYLON.ArcRotateCamera( "camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3( 0, 0, 0 ) );
        // camera.attachControl( canvas, true );
        // const light = new BABYLON.HemisphericLight( "light", new BABYLON.Vector3( 1, 1, 0 ) );


        //intento de importar autoclaves de blender
        BABYLON.SceneLoader.Append( "https://drive.google.com/file/d/1usFMtduFuTnhNUQjUhq0RY4CM-93d3_N/view?usp=sharing", "Autoclave_v1.obj", scene, function ( scene ) {
            scene.createDefaultCameraOrLight( true, true, true );
            scene.activeCamera.alpha += Math.PI;
        } );
        const camera = new BABYLON.ArcRotateCamera( "camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3( 0, 0, 0 ) );
        camera.attachControl( canvas, true );
        const light = new BABYLON.HemisphericLight( "light", new BABYLON.Vector3( 1, 1, 0 ) );

        return scene;
    };

    const scene = createScene(); //Call the createScene function

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop( function () {
        scene.render();
    } );

    // Watch for browser/canvas resize events
    window.addEventListener( "resize", function () {
        engine.resize();
    } );

} );

//autoclave en 3D