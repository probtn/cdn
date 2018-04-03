/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ball1',
                            symbolName: 'ball1',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '49px', '500', '500', 'auto', 'auto'],
                            transform: [[],[],[],['0.7','0.7']]
                        },
                        {
                            id: 'logo',
                            symbolName: 'logo',
                            display: 'none',
                            type: 'rect',
                            rect: ['75', '124px', '350', '350', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '500px', '500px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '500px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2459,
                    autoPlay: true,
                    labels: {
                        "Ball": 0,
                        "Circle": 2042
                    },
                    data: [
                        [
                            "eid68",
                            "display",
                            2042,
                            0,
                            "easeOutBack",
                            "${logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            2042,
                            0,
                            "easeOutBack",
                            "${ball1}",
                            'block',
                            'none'
                        ],
                            [ "eid40", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${logo}', [] ] ],
                            [ "eid67", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ball1}', [] ] ],
                            [ "eid41", "trigger", 2042, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${logo}', [] ] ]
                    ]
                }
            },
            "ball1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'ball',
                            rect: ['0px', '0px', '500px', '500px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'shine',
                            rect: ['0px', '0px', '500px', '500px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '500px', '500px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid11",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${ball}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            1000,
                            "easeInBounce",
                            "${ball}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid14",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${ball}",
                            '-60px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            1000,
                            "easeInBounce",
                            "${shine}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid18",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${shine}",
                            '-60px',
                            '0px'
                        ]
                    ]
                }
            },
            "logo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.48', '0.48']],
                            rect: ['-193px', '-108px', '743px', '565px', 'auto', 'auto'],
                            id: 'Pasted4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konf.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['3'], [0, 0, 0], [1, 1, 1]],
                            id: 'sbonus2',
                            type: 'image',
                            rect: ['77px', '-124px', '198px', '59px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sbonus.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['3'], [0, 0, 0], [1, 1, 1]],
                            rect: ['76px', '29px', '188px', '44px', 'auto', 'auto'],
                            id: 'bonus',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bonus.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            id: 'skzt',
                            type: 'image',
                            rect: ['5px', '-81px', '332px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/skzt.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-3'], [0, 0, 0], [1, 1, 1]],
                            rect: ['6px', '-65px', '332px', '59px', 'auto', 'auto'],
                            id: 'kzt2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/kzt2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '350px', '350px', 'auto', 'auto'],
                            borderRadius: ['75.24%', '75.24%', '75.24%', '75.24% 75.24%'],
                            opacity: '1',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,56,112,1.00)']
                        },
                        {
                            rect: ['63px', '113px', '223px', '124px', 'auto', 'auto'],
                            id: 'Pasted5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '350px']
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "left",
                            42,
                            375,
                            "easeOutBack",
                            "${Pasted4}",
                            '-193px',
                            '-180px'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            42,
                            375,
                            "easeOutBack",
                            "${Pasted4}",
                            '0.48',
                            '1'
                        ],
                        [
                            "eid46",
                            "scaleX",
                            42,
                            375,
                            "easeOutBack",
                            "${Pasted4}",
                            '0.48',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            125,
                            42,
                            "easeOutBack",
                            "${skzt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            125,
                            42,
                            "easeOutBack",
                            "${bonus}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "left",
                            167,
                            250,
                            "easeOutBack",
                            "${kzt2}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid88",
                            "top",
                            167,
                            250,
                            "easeOutBack",
                            "${skzt}",
                            '89px',
                            '-81px'
                        ],
                        [
                            "eid96",
                            "left",
                            167,
                            250,
                            "easeOutBack",
                            "${sbonus2}",
                            '77px',
                            '71px'
                        ],
                        [
                            "eid72",
                            "top",
                            42,
                            375,
                            "easeOutBack",
                            "${Pasted4}",
                            '-108px',
                            '-135px'
                        ],
                        [
                            "eid60",
                            "left",
                            167,
                            250,
                            "easeOutBack",
                            "${bonus}",
                            '82px',
                            '76px'
                        ],
                        [
                            "eid94",
                            "top",
                            167,
                            250,
                            "easeOutBack",
                            "${sbonus2}",
                            '18px',
                            '-124px'
                        ],
                        [
                            "eid95",
                            "opacity",
                            125,
                            42,
                            "easeOutBack",
                            "${sbonus2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            125,
                            42,
                            "easeOutBack",
                            "${kzt2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "top",
                            167,
                            250,
                            "easeOutBack",
                            "${bonus}",
                            '29px',
                            '-116px'
                        ],
                        [
                            "eid59",
                            "top",
                            167,
                            250,
                            "easeOutBack",
                            "${kzt2}",
                            '105px',
                            '-65px'
                        ],
                        [
                            "eid90",
                            "left",
                            167,
                            250,
                            "easeOutBack",
                            "${skzt}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid49",
                            "opacity",
                            0,
                            42,
                            "linear",
                            "${Pasted4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("profit_button_500x500_%402x_edgeActions.js");
})("EDGE-1128601304");
