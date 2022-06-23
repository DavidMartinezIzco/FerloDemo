    //SOLO RENDER CON FUNCIONES 
    //importa escena completa
    var problema = false;
    var encendido = false;
    webMI.addOnload( function () {
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

                BABYLON.SceneLoader.Append( "../../objeto/", "auto_oficial_plano.glb", scene, function ( scene ) {
                    scene.createDefaultCameraOrLight( true, true, true );
                    scene.activeCamera.alpha += Math.PI;
                    scene.useRightHandedSystem = true;
                    // Coleccion -> Autoclave

                    var valvulas_azules_1 = scene.getMeshByName( 'cacharro_1' );
                    var cacharros_rojos = scene.getMeshByName( 'cacharro_2' );
                    var valvulas_azules_2 = scene.getMeshByName( 'cacharro_3' );
                    var motor = scene.getMeshByName( 'motor' );
                    var tubos = scene.getMeshByName( 'tubos' );


                    valvulas_azules_1.actionManager = new BABYLON.ActionManager( scene );
                    valvulas_azules_1.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            // console.log( obj_seleccionado );
                            var info = "Nombre componente: valvulas azules 1";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    valvulas_azules_2.actionManager = new BABYLON.ActionManager( scene );
                    valvulas_azules_2.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: valvulas azules 2";
                            var estado = "Estado: OK";

                            mostrarProblema();;
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    cacharros_rojos.actionManager = new BABYLON.ActionManager( scene );
                    cacharros_rojos.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: cacharros rojos";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    tubos.actionManager = new BABYLON.ActionManager( scene );
                    tubos.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: tubos";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                    motor.actionManager = new BABYLON.ActionManager( scene );
                    motor.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction( BABYLON.ActionManager.OnPickTrigger, function ( e ) {
                            // var obj_seleccionado = e.meshUnderPointer;
                            var info = "Nombre componente: motor";
                            var estado = "Estado: OK";
                            mostrarProblema();
                            webMI.gfx.setText( "txt_info", info );
                            webMI.gfx.setText( "txt_estado", estado );
                        } )
                    );
                } );
                const camera = new BABYLON.ArcRotateCamera( "camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3( 0, 0, 0 ) );
                camera.attachControl( canvas, true );
                const light = new BABYLON.HemisphericLight( "light", new BABYLON.Vector3( 1, 1, -10 ) );
                return scene;
            };


            const scene = createScene();
            console.log( 'entrando el el fetch' );
            for ( var objeto in scene.meshes ) {
                var meshObjeto = scene.meshes[ objeto ];
                if ( meshObjeto.id != 'resto' && meshObjeto.id != '__root__' ) {
                    console.log( encendido );
                    var mat = new BABYLON.StandardMaterial( 'material', scene );
                    if ( encendido == true ) {
                        mat.diffusecolor = BABYLON.Color3.Green();
                    } else {
                        mat.diffusecolor = BABYLON.Color3.Red();
                    }
                    scene.meshes[ objeto ].material = mat;
                }
            }
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