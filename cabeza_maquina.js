webMI.addOnload( function () {

    var problema = webMI.query[ "problema" ];
    var encendido = webMI.query[ "encendido" ];

    //encendido
    webMI.gfx.setVisible( "encendido_si", false );
    webMI.gfx.setVisible( "encendido_no", true );

    if ( encendido == 'true' ) {
        webMI.gfx.setVisible( "encendido_si", true );
        webMI.gfx.setVisible( "encendido_no", false );
    } else {
        webMI.gfx.setVisible( "encendido_si", false );
        webMI.gfx.setVisible( "encendido_no", true );
    }

    //estado
    webMI.gfx.setVisible( "problema_no", false );
    webMI.gfx.setVisible( "problema_si", true );
    if ( problema == 'true' ) {
        webMI.gfx.setVisible( "problema_si", true );
        webMI.gfx.setVisible( "problema_no", false );
        setInterval( function ( e ) {
            webMI.gfx.setVisible( "problema_si", false );
            setTimeout( function ( d ) {
                webMI.gfx.setVisible( "problema_si", true );
            }, 250 )
        }, 750 );

    } else {
        webMI.gfx.setVisible( "problema_si", false );
        webMI.gfx.setVisible( "problema_no", true );
    }


} );