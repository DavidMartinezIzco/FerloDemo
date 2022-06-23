    //SOLO RENDER CON FUNCIONES 
    //importa escena completa
    var problema = false;
    var encendido = false;
    webMI.addOnload( function () {
        renderizar();
        webMI.gfx.setText( "txt_info", "---" );

        webMI.addEvent( "btn_on", "click", function ( e ) {
            encendido = true;
            renderizar();
        } );
        webMI.addEvent( "btn_off", "click", function ( e ) {
            encendido = false;
            renderizar();
        } );

        function mostrarProblema() {
            webMI.gfx.setVisible( "estado_bien", false );
            webMI.gfx.setVisible( "estado_mal", false );

            if ( problema == false ) {
                webMI.gfx.setVisible( "estado_bien", true );
                webMI.gfx.setVisible( "estado_mal", false );

            } else {
                webMI.gfx.setVisible( "estado_bien", false );
                webMI.gfx.setVisible( "estado_mal", true );
                setInterval( function ( e ) {
                    webMI.gfx.setVisible( "estado_mal", false );
                    setTimeout( function ( d ) {
                        webMI.gfx.setVisible( "estado_mal", true );
                    }, 250 )
                }, 750 );
            }
        }

        function renderizar() {
            const canvas = document.getElementById( "renderCanvas" );
            mostrarProblema();
            const engine = new BABYLON.Engine( canvas, true );
            var rutaObjeto = "";
            const createScene = function () {
                const scene = new BABYLON.Scene( engine );

                BABYLON.SceneLoader.Append( "../../objeto/", "autoclave_remake.glb", scene, function ( scene ) {
                    scene.createDefaultCameraOrLight( true, true, true );
                    scene.activeCamera.alpha += Math.PI;
                    scene.useRightHandedSystem = true;
                    // Coleccion -> Autoclave

                    //llaves 1
                    var llaves_1 = scene.getMeshByName( 'llaves 1' );
                    llaves_1.actionManager = new BABYLON.ActionManager( scene );
                    llaves_1.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            // console.log( obj_seleccionado );
                            var info = "Nombre componente: llaves 1";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    //llaves 2
                    var llaves_2 = scene.getMeshByName( 'llaves 2' );
                    llaves_2.actionManager = new BABYLON.ActionManager( scene );
                    llaves_2.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            // console.log( obj_seleccionado );
                            var info = "Nombre componente: llaves 2";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    //motor
                    var motor = scene.getMeshByName( 'motor' );
                    motor.actionManager = new BABYLON.ActionManager( scene );
                    motor.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: motor";
                            var estado = "Estado: OK";

                            mostrarProblema();;
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    //porton
                    var puerta = scene.getMeshByName( 'porton' );
                    puerta.actionManager = new BABYLON.ActionManager( scene );
                    puerta.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: compuerta";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    //tuberia
                    var tubos = scene.getMeshByName( 'tuberia' );
                    tubos.actionManager = new BABYLON.ActionManager( scene );
                    tubos.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: tuberia";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    //valvulas 1
                    var valvulas_1 = scene.getMeshByName( 'valvulas 1' );
                    valvulas_1.actionManager = new BABYLON.ActionManager( scene );
                    valvulas_1.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: valvulas 1";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    //valvulas 2
                    var valvulas_2 = scene.getMeshByName( 'valvulas 2' );
                    valvulas_2.actionManager = new BABYLON.ActionManager( scene );
                    valvulas_2.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: valvulas 2";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );


                    var defMaterial = new BABYLON.StandardMaterial( "defMaterial", scene );
                    if ( encendido == true ) {
                        defMaterial.diffuseColor = new BABYLON.Color3.FromHexString( "#2ecc71" );
                    } else {
                        defMaterial.diffuseColor = new BABYLON.Color3.FromHexString( "#c21d11" );
                    }
                    llaves_1.material = defMaterial;
                    llaves_2.material = defMaterial;
                    motor.material = defMaterial;
                    puerta.material = defMaterial;
                    tubos.material = defMaterial;
                    valvulas_1.material = defMaterial;
                    valvulas_2.material = defMaterial;

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
            // window.addEventListener( "resize", function () {
            //     engine.resize();
            // } );

        }

    } );

    //recursos externos 

    //https://preview.babylonjs.com/babylon.js
    //https://preview.babylonjs.com/loaders/babylonjs.loaders.js
    //https://cdn.babylonjs.com/loaders/babylon.glTFFileLoader.js