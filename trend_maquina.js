webMI.addOnload( function () {
    //	Mi codigo
    var mi_nodo = webMI.query[ "nodo_valor_1" ];
    var mi_titulo = webMI.query[ "titulo" ];
    var mi_intervalo = webMI.query[ "intervalos" ];
    var consig_max = webMI.query[ "consigna_max" ];
    var consig_min = webMI.query[ "consigna_min" ];

    //	consignas
    var config_max = {};
    var config_min = {};
    if ( consig_max != 0 ) {
        config_max = {
            value: consig_max,
            width: 3,
            color: '#eb4034',
            zIndex: 10
        }
    }
    if ( consig_min != 0 ) {
        config_min = {
            value: consig_min,
            width: 3,
            color: '#eb4034',
            zIndex: 10
        }
    }

    //	Filtro
    var filter = {};
    // value changes only
    // values from November 20, 2013 11:00 PM to 11:30 PM
    // month starts with 0=January!
    var to = new Date()
        .getTime();
    var from = to - 24 * 60 * 60 * 1000; // un dia
    filter.timestamp = [ "n:>=" + from + "<" + to ];
    //	Opción uno solo	
    filter.address = [ "g:" + mi_nodo ];
    /*
    //	Opción doble
        filter.address = [];
        filter.address.push("g:"+mi_nodo);
        filter.address.push("g:"+mi_nodo_2);
    */
    //filter.aggregate = ["v:Maximum"];
    filter.type = [ "v:1" ];
    //filter.interval = ["v:1"];
    //filter.unit = ["v:d"];
    webMI.data.queryFilter( filter, function ( e ) {
        //console.log(e);
        var myData = new Array();
        var fechas = new Array();
        //var datos = new Object();
        for ( i = 0; i < e.result.length; i++ ) {
            //alert(e.result[i].value+"<>"+ new Date(e.result[i].timestamp).toGMTString());
            //datos={name:new Date(e.result[i].timestamp).toGMTString(),y:e.result[i].value};

            //			var fecha2=("0"+(fecha1.getMonth()+1)).slice(-2)+" del "+("0"+fecha1.getDate()).slice(-2); //mes/dia
            var fyh = new Date( e.result[ i ].timestamp );
            var horas = "" + fyh.getHours();
            var mins = "" + fyh.getMinutes();
            if ( fyh.getHours() < 10 ) {
                horas = "0" + fyh.getHours();
            }
            if ( fyh.getMinutes() < 10 ) {
                mins = "0" + fyh.getMinutes();
            }
            var fechaYhora = fyh.getDate() + "-" + ( fyh.getMonth() + 1 ) + " a las " + horas + ":" + mins;
            fechas.push( fechaYhora )
            myData.push( e.result[ i ].value );
            //		myData.pusth([new Date(e.result[i].timestamp).toGMTString(),e.result[i].value])
        }; //Fin del bucle FOR
        // Create the chart
        Highcharts.chart( chartDiv, {

            title: {
                text: 'T{' + mi_titulo + '}',
                align: 'left',
                enbaled: false
            },
            subtitle: {
                text: '', //'T{Subtitulo}',
                align: 'left',
                enabled: false
            },
            chart: {
                type: 'line',
            },
            title: {
                text: 'T{' + mi_titulo + '}'
            },
            xAxis: {
                type: 'category',
                labels: {
                    enabled: false,
                    rotation: -45
                }
            },

            yAxis: {
                //title: 'm3',
                tickInterval: mi_intervalo,
                plotLines: [ config_max, config_min ],
            },
            colors: [ "#2a9cff" ],

            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: false,
                        //sacar la fecha en el formatter
                        //formatter: function () {  }
                    }
                },
                line: { marker: { enabled: false } }

            },

            tooltip: {
                valueDecimals: 2,
                formatter: function () {
                    return "<b>Fecha:</b>" + fechas[ this.x ] + "<br><b>Valor:</b>" + parseFloat( myData[ this.x ] )
                        .toFixed( 2 )
                }
            },

            // Inicio series

            series: [ {
                name: 'T{' + mi_titulo.toString() + '}',
                colorByPoint: false,
                data: myData
              } ],

        } ); // Fin del "Create the chart"

    } ); // Fin del "webMI.data.queryFilter"

    var chartDiv = document.getElementById( 'highcharts_container' );

    webMI.gfx.setVisible( 'label', false );
    webMI.gfx.setVisible( 'border', false );

    webMI.gfx.setScaledEvents( chartDiv );

} ); //FIN del OnLoad