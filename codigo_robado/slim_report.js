var result = new Array();

var query = history.query( {
    type: [ "v:1" ], // data values
    timestamp: [ "n:>=" + timeStampFrom + "<" + timeStampTo ],
    address: [ "g:" + BaseNode + "" ],
    numrows: [ 'v:1000' ]
} );
const Baseadress = BaseNode.split( '.' );
const SeriesName = Baseadress[ Baseadress.length - 1 ]
result = result.concat( query.result );

/*while(query.More == true){

    query = history.queryNext(query.continuationpoint);
	result = result.concat(query.result);

}*/

const chartData = [];
const tableData1 = [ [ { type: 'text', data: { text: 'time', fillColor: '#575757', color: 'white' } }, { type: 'text', data: { text: 'value', fillColor: '#575757', color: 'white' } } ] ];
const tableData2 = [ [ { type: 'text', data: { text: 'time', fillColor: '#575757', color: 'white' } }, { type: 'text', data: { text: 'value', fillColor: '#575757', color: 'white' } } ] ];
const tableData3 = [ [ { type: 'text', data: { text: 'time', fillColor: '#575757', color: 'white' } }, { type: 'text', data: { text: 'value', fillColor: '#575757', color: 'white' } } ] ];

let i = 0;

for ( const e of result ) {
    chartData.push( [ e.servertimestamp, e.value ] );

    var date = new Date( e.servertimestamp );

    var day = date.getDate();
    var months = date.getMonth() + 1;
    var year = date.getYear() + 1900;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    date = day + '.' + months + '.' + year;
    if ( seconds < 10 ) { seconds = '0' + seconds.toString(); }
    if ( minutes < 10 ) { minutes = '0' + minutes.toString(); }
    if ( day < 10 ) { day = '0' + day.toString(); }
    if ( months < 10 ) { months = '0' + months.toString(); }

    const timeStamp = date + ' ' + hour + ':' + minutes + ':' + seconds;

    if ( i == 0 ) {
        tableData1.push( [ timeStamp, e.value ] );
        i = 1;
    } else if ( i == 1 ) {
        tableData2.push( [ timeStamp, e.value ] );
        i = 2;
    } else if ( i == 2 ) {
        tableData3.push( [ timeStamp, e.value ] );
        i = 0;
    }

}

const doc = [
    { type: "setPageMargins", data: { margins: [ 40, 60, 40, 60 ] } }
];

var date = new Date();

var day = date.getDate();
var months = date.getMonth() + 1;
var year = date.getYear() + 1900;

var hour = date.getHours();
var minutes = date.getMinutes();

date = day + '.' + months + '.' + year;

if ( minutes < 10 ) { minutes = '0' + minutes.toString(); }
if ( day < 10 ) { day = '0' + day.toString(); }
if ( months < 10 ) { months = '0' + months.toString(); }

const titlePageHeader = [
    {
        type: 'columns',
        data: {
            margin: [ 0, 20, 0, 0 ],
            body: [
                [ { type: 'text', data: { text: 'COLUMNA 1', style: { fontSize: 12 }, alignment: 'center' } } ],
                [ { type: 'text', data: { text: 'COLUMNA 2', style: { fontSize: 12 }, alignment: 'center' } } ],
                [ { type: 'text', data: { text: 'COLUMNA 3', style: { fontSize: 12 }, alignment: 'center' } } ]
            ]
        },
    }
];
const titlePageContent = [
    { type: 'text', data: { text: 'atvise®', margin: [ 75, 315, 0, 0 ], style: { fontSize: 18 } } },
    { type: 'text', data: { text: 'Slim Reporting example', margin: [ 75, 0 ], style: { fontSize: 26 } } },
    { type: 'text', data: { text: 'Generated: ' + day + "." + months + "." + year, margin: [ 75, 10 ], style: { fontSize: 12 } } },
];
const titlePageFooter = [];
const titlePageBackground = [ { type: 'image', data: { image: 'atvise.jpg', width: 600 } } ];


const int_1 = Ua.findNode( "AGENT.OBJECTS.Simulated.int_1" );
const int_2 = Ua.findNode( "AGENT.OBJECTS.Simulated.int_2" );
const int_3 = Ua.findNode( "AGENT.OBJECTS.Simulated.int_3" );

const contentPageHeader = [
    {
        type: 'columns',
        data: {
            margin: [ 0, 20, 0, 0 ],
            body: [
                [ { type: 'text', data: { text: '', style: { fontSize: 8 }, alignment: 'center' } } ],
                [ { type: 'text', data: { text: 'Slim Reporting example', style: { fontSize: 8 }, alignment: 'center' } } ],
                [ { type: 'text', data: { text: '', style: { fontSize: 8 }, alignment: 'center' } } ]
            ]
        },
    },
    {
        type: 'svg',
        data: {
            svg: '<svg width="520" height="10" viewBox="0 0 520 10"><line x1="-100%" y1="0" x2="100%" y2="0" stroke="black" /></svg>',
            margin: [ 40, 5, 0, 0 ]
        }
    },
];
const contentPageContent = [
    { type: 'text', data: { text: 'Generate reports as PDF with atvise®', style: { fontSize: 14, bold: true } } },
    { type: 'text', data: { text: 'Including support for rendering trend diagrams.', style: { fontSize: 14, bold: true } } },
    {
        type: "chart",
        data: {
            chart: {
                width: 2000,
                options: {
                    "time": {
                        "timezone": "America/New_York",
                        "useUTC": false
                    },
                    "chart": {
                        "type": "line"
                    },
                    "title": {
                        "text": "Trend chart"
                    },
                    "series": [
                        {
                            "name": SeriesName,
                            "stacking": "normal",
                            "data": chartData
         },

      ],
                    "xAxis": {
                        "type": "datetime",
                        "dateTimeLabelFormats": {
                            "hour": "%e. %b %H:%M",
                            "month": "%e. %b",
                            "year": "%b"
                        },
                        "title": {
                            "text": "Time of day"
                        }
                    }
                }
            },
            image: { fit: [ 500, 500 ] }
        }
    },
    { type: 'columns', data: { body: [ [ { type: 'table', data: { layout: 'blackTable', body: tableData1 } } ], [ { type: 'table', data: { layout: 'blackTable', body: tableData2 } } ], [ { type: 'table', data: { layout: 'blackTable', body: tableData3 } } ] ] } },
    { type: 'text', data: { text: '', pageBreak: 'after' } },
    {
        type: "chart",
        data: {
            chart: {
                width: 2000,
                options: {
                    "time": {
                        "timezone": "America/New_York",
                        "useUTC": false
                    },
                    "chart": {
                        "type": "pie"
                    },
                    "title": {
                        "text": "Pie chart"
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [ {
                        name: 'Brands',
                        colorByPoint: true,
                        data: [ {
                            name: 'int_1',
                            y: int_1.result.value
        }, {
                            name: 'int_2',
                            y: int_2.result.value
        }, {
                            name: 'int_3',
                            y: int_3.result.value
        } ]
    } ],
                }
            },
            image: { fit: [ 500, 500 ] }
        }
    },
    { type: 'qrcode', data: { qr: 'https://www.atvise.com/', margin: [ 20, 75, 0, 0 ] } },
];

const contentPageFooter = [
    {
        type: 'columns',
        data: {
            body: [
                [ {
                    type: 'table',
                    data: {
                        margin: [ 30, -7, 0, 15 ],
                        layout: 'blackTable',
                        widths: [ 60, 105 ],
                        body: [
                            [
                                {
                                    type: 'text',
                                    data: {
                                        text: 'Generated',
                                        border: [ true, true, true, true ],
                                        borderColor: [ "#DDDDDD", "#DDDDDD", "#DDDDDD", "#DDDDDD" ],
                                        margin: [ 0, 0, 0, 0 ],
                                        alignment: 'center'
                                    }
                                },
                                {
                                    type: 'text',
                                    data: {
                                        text: date + ", " + hour + ":" + minutes,
                                        border: [ true, true, true, true ],
                                        borderColor: [ "#DDDDDD", "#DDDDDD", "#DDDDDD", "#DDDDDD" ],
                                        margin: [ 0, 0, 0, 0 ],
                                        alignment: "center",
                                        style: {
                                            fontSize: 10
                                        }
                                    }
                                },
                            ]
                        ]
                    }
                } ],
                [ {
                    type: 'table',
                    data: {
                        heights: [ 2 ],
                        widths: [ 80 ],
                        alignment: 'left',
                        margin: [ -190, 20, 0, 0 ],
                        body: [
                            [
                                {
                                    type: 'text',
                                    data: {
                                        "text": "",
                                        "border": [ false, false, false, false ],
                                        "style": {
                                            "fillColor": "#f2d600"
                                        }
                                    }

                                }
                            ]
                        ]
                    }
                } ],
                [ {
                    type: 'text',
                    data: {
                        "alignment": 'center',
                        "margin": [ -50, 8, 0, 0 ],
                        "text": [
                            { text: '{currentPage}', italics: true },
                            ' of ',
                            { text: '{pageCount}', italics: true }
                        ]
                    }
                } ],
            ]
        }
    }
];
var contentPageBackground = [];

var titlePage = [ titlePageHeader, titlePageContent, titlePageFooter, titlePageBackground ];
var contentPage = [ contentPageHeader, contentPageContent, contentPageFooter, contentPageBackground ];


var http = new HTTPClient();

var res = http.request( {
    hostname: "localhost",
    port: 5000,
    path: "/report",
    method: "POST",
    data: "doc=" + JSON.stringify( doc ) + "&" +
        "titlePage=" + JSON.stringify( titlePage ) + "&" +
        "contentPage=" + JSON.stringify( contentPage ),

} );

if ( SavePDF == true ) {
    var date = new Date();
    var day = date.getDate();
    var months = date.getMonth() + 1;
    var year = date.getYear() + 1900;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    date = year + '-' + months + '-' + day;
    if ( seconds < 10 ) { seconds = '0' + seconds.toString(); }
    if ( minutes < 10 ) { minutes = '0' + minutes.toString(); }
    if ( day < 10 ) { day = '0' + day.toString(); }
    if ( months < 10 ) { months = '0' + months.toString(); }

    const timeStamp = date + '-' + hour + '-' + minutes + '-' + seconds + "-" + milliseconds;

    var ofs = new OutputFileStream( "Reports/" + timeStamp + ".pdf", "binary", "append" );
    ofs.open();
    ofs.write( res.data );
    ofs.close();
}
return res.data;