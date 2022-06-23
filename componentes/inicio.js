//clicks
webMI.addEvent( "btn_controles", "click", function ( e ) {
    webMI.display.openDisplay( "AGENT.DISPLAYS.pantallas.control.controles_demo_1", webMI.query, "content" );
} );
webMI.addEvent( "btn_histo", "click", function ( e ) {
    webMI.display.openDisplay( "AGENT.DISPLAYS.pantallas.demo_histo", webMI.query, "content" );
} );
webMI.addEvent( "btn_ala", "click", function ( e ) {
    webMI.display.openDisplay( "AGENT.DISPLAYS.pantallas.demo_ala", webMI.query, "content" );
} );
webMI.addEvent( "btn_inf", "click", function ( e ) {
    webMI.display.openDisplay( "AGENT.DISPLAYS.pantallas.demo_inf", webMI.query, "content" );
} );

//opacidad inicial
webMI.gfx.setFillOpacity( "btn_controles", "0.5" );
webMI.gfx.setFillOpacity( "btn_histo", "0.5" );
webMI.gfx.setFillOpacity( "btn_ala", "0.5" );
webMI.gfx.setFillOpacity( "btn_inf", "0.5" );

//hovers

webMI.addEvent( "btn_controles", "mouseover", function ( e ) {
    var id = "btn_controles";
    webMI.gfx.setFillOpacity( id, "1" );
} );
webMI.addEvent( "btn_controles", "mouseout", function ( e ) {
    var id = "btn_controles";
    webMI.gfx.setFillOpacity( id, "0.5" );
} );
webMI.addEvent( "btn_histo", "mouseover", function ( e ) {
    var id = "btn_histo";
    webMI.gfx.setFillOpacity( id, "1" );
} );
webMI.addEvent( "btn_histo", "mouseout", function ( e ) {
    var id = "btn_histo";
    webMI.gfx.setFillOpacity( id, "0.5" );
} );
webMI.addEvent( "btn_ala", "mouseover", function ( e ) {
    var id = "btn_ala";
    webMI.gfx.setFillOpacity( id, "1" );
} );
webMI.addEvent( "btn_ala", "mouseout", function ( e ) {
    var id = "btn_ala";
    webMI.gfx.setFillOpacity( id, "0.5" );
} );
webMI.addEvent( "btn_inf", "mouseover", function ( e ) {
    var id = "btn_inf";
    webMI.gfx.setFillOpacity( id, "1" );
} );
webMI.addEvent( "btn_inf", "mouseout", function ( e ) {
    var id = "btn_inf";
    webMI.gfx.setFillOpacity( id, "0.5" );
} );