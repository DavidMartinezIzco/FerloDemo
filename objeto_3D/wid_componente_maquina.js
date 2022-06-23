webMI.addOnload( function () {

    var estado = webMI.query[ "problema" ];
    webMI.gfx.setVisible( "estado_bien", false );
    webMI.gfx.setVisible( "estado_mal", true );
    webMI.gfx.setFill( "txt_valor", "#cf0000" );
    if ( estado == 'false' ) {
        webMI.gfx.setVisible( "estado_bien", true );
        webMI.gfx.setVisible( "estado_mal", false );
        webMI.gfx.setFill( "txt_valor", "#000000" );

    } else {
        webMI.gfx.setVisible( "estado_bien", false );
        webMI.gfx.setVisible( "estado_mal", true );
        webMI.gfx.setFill( "txt_valor", "#cf0000" );
        setInterval( function ( e ) {
            webMI.gfx.setVisible( "estado_mal", false );
            setTimeout( function ( d ) {
                webMI.gfx.setVisible( "estado_mal", true );
            }, 250 )
        }, 750 );
    }

    webMI.data.subscribe( webMI.query[ "nombre" ], function ( e ) {
        var value = e.value;
        //webMI.data.write( [ webMI.query[ "valor" ] ], [ value ] );
        webMI.gfx.setText( "txt_nombre", value );
    } );

} );