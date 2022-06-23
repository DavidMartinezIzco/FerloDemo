webMI.addOnload( function () {

    var estado = webMI.query[ "estado" ];
    var problema = webMI.query[ "problema" ];

    webMI.gfx.setVisible( "estado_on", false );
    webMI.gfx.setVisible( "estado_off", true );
    if ( estado == 'true' ) {
        webMI.gfx.setVisible( "estado_on", true );
        webMI.gfx.setVisible( "estado_off", false );
    }
    webMI.gfx.setVisible( "problema_si", false );
    webMI.gfx.setVisible( "problema_no", true );
    if ( problema == 'true' ) {
        webMI.gfx.setVisible( "problema_si", true );
        webMI.gfx.setVisible( "problema_no", false );
        setInterval( function ( e ) {
            webMI.gfx.setVisible( "problema_si", false );
            setTimeout( function ( d ) {
                webMI.gfx.setVisible( "problema_si", true );
            }, 250 )
        }, 750 );
    }


    var id = "fondo";
    var value = webMI.query[ "seleccionado" ];
    if ( value == 'true' ) {
        webMI.gfx.setFill( id, "#0082aa" );
        webMI.gfx.setFill( "txt_nombre", "#f5f5f5" );
    }

    if ( value == 'false' ) {
        webMI.gfx.setFill( id, "#f5f5f5" );
        webMI.gfx.setFill( "txt_nombre", "#6f6f6f" );
        webMI.gfx.setFillOpacity( id, "0.5" );
        webMI.addEvent( id, "mouseover", function ( e ) {
            webMI.gfx.setFillOpacity( id, "1" );

        } );
        webMI.addEvent( id, "mouseout", function ( e ) {
            webMI.gfx.setFillOpacity( id, "0.5" );
        } );
        webMI.addEvent( "txt_nombre", "mouseover", function ( e ) {
            webMI.gfx.setFillOpacity( id, "1" );

        } );
        webMI.addEvent( "txt_nombre", "mouseout", function ( e ) {
            webMI.gfx.setFillOpacity( id, "0.5" );
        } );
        webMI.addEvent( "problema_si", "mouseover", function ( e ) {
            webMI.gfx.setFillOpacity( id, "1" );

        } );
        webMI.addEvent( "problema_si", "mouseout", function ( e ) {
            webMI.gfx.setFillOpacity( id, "0.5" );
        } );
        webMI.addEvent( "problema_no", "mouseover", function ( e ) {
            webMI.gfx.setFillOpacity( id, "1" );

        } );
        webMI.addEvent( "problema_no", "mouseout", function ( e ) {
            webMI.gfx.setFillOpacity( id, "0.5" );
        } );
        webMI.addEvent( "estado_on", "mouseover", function ( e ) {
            webMI.gfx.setFillOpacity( id, "1" );

        } );
        webMI.addEvent( "estado_off", "mouseout", function ( e ) {
            webMI.gfx.setFillOpacity( id, "0.5" );
        } );
        webMI.addEvent( "estado_on", "mouseover", function ( e ) {
            webMI.gfx.setFillOpacity( id, "1" );

        } );
        webMI.addEvent( "estado_on", "mouseout", function ( e ) {
            webMI.gfx.setFillOpacity( id, "0.5" );
        } );
    }

    //clicks
    webMI.addEvent( "fondo", "click", function ( e ) {
        webMI.display.openDisplay( webMI.query[ "destino" ], webMI.query, "content" );
    } );
    webMI.addEvent( "txt_nombre", "click", function ( e ) {
        webMI.display.openDisplay( webMI.query[ "destino" ], webMI.query, "content" );
    } );
    webMI.addEvent( "problema_si", "click", function ( e ) {
        webMI.display.openDisplay( webMI.query[ "destino" ], webMI.query, "content" );
    } );
    webMI.addEvent( "problema_no", "click", function ( e ) {
        webMI.display.openDisplay( webMI.query[ "destino" ], webMI.query, "content" );
    } );
    webMI.addEvent( "estado_on", "click", function ( e ) {
        webMI.display.openDisplay( webMI.query[ "destino" ], webMI.query, "content" );
    } );
    webMI.addEvent( "estado_off", "click", function ( e ) {
        webMI.display.openDisplay( webMI.query[ "destino" ], webMI.query, "content" );
    } );

} );