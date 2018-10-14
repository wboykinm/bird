var styleBird = {
  // add birds-eye map  
  "version": 8,
  "sources": {
    'birdseye': {
      "type": "raster",
      "tileSize": 256,
      "tiles": ["data/raster/birdseye/{z}/{x}/{y}.png"]
    }
  },
  "glyphs": location.origin+location.pathname+"font/{fontstack}/{range}.pbf",
  "layers": [{
    "id": "bird-tiles",
    "type": "raster",
    "source": "birdseye",
    "minzoom": 0,
    "maxzoom": 22,
    "paint": {
      "raster-opacity": 1,
      //"raster-opacity-transition": { "duration": 4000 / speed}
    }
  }]
};

var styleVec = {
  "version": 8,
  "sources": {
    "ortho": {
      "tiles": ["data/raster/ortho/{z}/{x}/{y}.png"],
      "type": "raster",
      "tileSize": 256
    },
    "composite": {
      "tiles": [location.origin+location.pathname+"data/vector/{z}/{x}/{y}.vector.pbf"],
      "type": "vector"
    },
  },
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {},
      "paint": {"background-color": "#f2f1eb"}
    },
    {
      "id": "vcgi_bw",
      "type": "raster",
      "source": "ortho",
      "layout": {},
      "paint": {
        "raster-saturation": -1,
        "raster-contrast": 0.66,
        "raster-brightness-max": 0.8,
        "raster-brightness-min": 0.5,
        "raster-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          16,
          0.8,
          19.5,
          0.3
        ]
      }
    }/*,
    {
        "id": "Special",
        "type": "fill-extrusion",
        //"metadata": {"mapbox:group": "17f1ea8c5a50daadcf8ad2e3a372743d"},
        "source": "composite",
        "source-layer": "building",
        "minzoom": 15,
        "filter": [
            "all",
            ["==", "extrude", "true"],
            ["==", "underground", "false"],
            [
                "in",
                "type",
                "barn",
                "civic",
                "commercial",
                "commercial;residential",
                "construction",
                "detached",
                "farm",
                "farm_auxilary",
                "garage",
                "garages",
                "greenhouse",
                "hangar",
                "hospital",
                "hotel",
                "industrial",
                "manufacture",
                "office",
                "public",
                "retail",
                "school",
                "service",
                "shed",
                "shop",
                "stable",
                "storage_tank",
                "terrace",
                "train_station",
                "transportation",
                "university",
                "warehouse"
            ]
        ],
        "layout": {},
        "paint": {
            "fill-extrusion-color": "#dfbdbf",
            "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                16,
                0,
                17,
                ["get", "height"]
            ],
            "fill-extrusion-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                17,
                0.6
            ],
            "fill-extrusion-base": [
                "interpolate",
                ["exponential", 1],
                ["number", ["get", "min_height"]],
                0,
                0,
                1000,
                1000
            ]
        }
    }*/
  ]
}

var styleVector = {
    "version": 8,
    "name": "Bird-Present_1",
    "metadata": {
        "mapbox:trackposition": false,
        "mapbox:groups": {
            "a636a5194689e7c1dede11bf3cd8dcac": {
                "name": "Landuse",
                "collapsed": false
            },
            "17f1ea8c5a50daadcf8ad2e3a372743d": {"name": "3d Buildings"},
            "0cb8c63458cbe21bbe1ad66543f73a04": {
                "name": "Roads",
                "collapsed": true
            },
            "da7809a5d927e5700e000dd8a7504787": {"name": "Hillshades"},
            "ab588f3c9c75b626577112146960e2bf": {
                "name": "Tunnels",
                "collapsed": true
            },
            "d84bd578f1389e89645c76070bd1c761": {
                "name": "Marine labels",
                "collapsed": false
            },
            "7d43494b5025022bf83d5e73f771a8c5": {
                "name": "Low zoom labels",
                "collapsed": false
            },
            "1cfc175b0e7532a47eec44b8ede849d8": {
                "name": "Landcover",
                "collapsed": false
            },
            "4a585425cb0cc2af93b4cdedda86461d": {
                "name": "Borders",
                "collapsed": false
            },
            "659790aba31107609c41007408bfdeeb": {
                "name": "Road labels",
                "collapsed": false
            },
            "87eb9fc4e65e33c3909d5992c53c8c22": {
                "name": "POI labels",
                "collapsed": false
            },
            "f423319a6dab2ed463382f7e7edc5da1": {
                "name": "Bridges",
                "collapsed": true
            },
            "003e472752e5683c3f8ef9dee45b54a0": {
                "name": "Misc layers",
                "collapsed": false
            },
            "0e4fe52bb6e07167e428ec66ad643fd7": {
                "name": "Place labels",
                "collapsed": false
            }
        },
        "mapbox:autocomposite": true,
        "mapbox:sdk-support": {
            "js": "0.46.0",
            "android": "6.0.0",
            "ios": "4.0.0"
        }
    },
    "center": [-73.21583274603029, 44.47926158790247],
    "zoom": 16.444250458391604,
    "bearing": 0,
    "pitch": 60,
    "light": {"color": "hsl(0, 0%, 90%)"},
    "sources": {
        "composite": {
            "url": "data/vector/{z}/{x}/{y}.vector.pbf",
            "type": "vector"
        },
        "ortho": {
            "url": "data/raster/ortho/{z}/{x}/{y}.png",
            "type": "raster",
            "tileSize": 256
        }
    },
    "sprite": "mapbox://sprites/landplanner/cjmuz5ury3tf92rnu7k5lxij2",
    "glyphs": "mapbox://fonts/landplanner/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {"background-color": "#f2f1eb"}
        },
        {
            "id": "vcgi_bw",
            "type": "raster",
            "source": "ortho",
            "layout": {},
            "paint": {
                "raster-saturation": -1,
                "raster-contrast": 0.66,
                "raster-brightness-max": 0.8,
                "raster-brightness-min": 0.5,
                "raster-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    16,
                    0.3,
                    19.5,
                    0
                ]
            }
        },
        {
            "id": "hillshade",
            "type": "line",
            "source": "composite",
            "source-layer": "hillshade",
            "filter": ["==", "class", "shadow"],
            "layout": {},
            "paint": {
                "line-color": "hsl(0, 7%, 24%)",
                "line-opacity": 0.1,
                "line-width": 0.5
            }
        },
        {
            "id": "extreme dark shadow",
            "type": "fill",
            "metadata": {"mapbox:group": "da7809a5d927e5700e000dd8a7504787"},
            "source": "composite",
            "source-layer": "hillshade",
            "filter": ["all", ["==", "class", "shadow"], ["==", "level", 56]],
            "layout": {},
            "paint": {
                "fill-color": "#2f536a",
                "fill-opacity": {"base": 1, "stops": [[3, 0.2], [8, 0.7]]}
            }
        },
        {
            "id": "dark shadow",
            "type": "fill",
            "metadata": {"mapbox:group": "da7809a5d927e5700e000dd8a7504787"},
            "source": "composite",
            "source-layer": "hillshade",
            "filter": ["all", ["==", "class", "shadow"], ["==", "level", 67]],
            "layout": {},
            "paint": {
                "fill-color": "#2b7fa6",
                "fill-opacity": {"base": 1, "stops": [[3, 0], [8, 0.5]]}
            }
        },
        {
            "id": "medium shadow",
            "type": "fill",
            "metadata": {"mapbox:group": "da7809a5d927e5700e000dd8a7504787"},
            "source": "composite",
            "source-layer": "hillshade",
            "filter": ["all", ["==", "class", "shadow"], ["==", "level", 78]],
            "layout": {},
            "paint": {
                "fill-color": "#2b7fa6",
                "fill-opacity": {"base": 1, "stops": [[3, 0], [8, 0.3]]}
            }
        },
        {
            "id": "shadow",
            "type": "fill",
            "metadata": {"mapbox:group": "da7809a5d927e5700e000dd8a7504787"},
            "source": "composite",
            "source-layer": "hillshade",
            "filter": ["all", ["==", "class", "shadow"], ["==", "level", 78]],
            "layout": {},
            "paint": {
                "fill-color": "hsl(199, 59%, 78%)",
                "fill-opacity": {"base": 1, "stops": [[3, 0], [8, 0.2]]}
            }
        },
        {
            "id": "faint shadow",
            "type": "fill",
            "metadata": {"mapbox:group": "da7809a5d927e5700e000dd8a7504787"},
            "source": "composite",
            "source-layer": "hillshade",
            "filter": ["all", ["==", "class", "shadow"], ["==", "level", 89]],
            "layout": {},
            "paint": {"fill-color": "#2b7fa6", "fill-opacity": 0.05}
        },
        {
            "id": "crop",
            "type": "fill",
            "metadata": {"mapbox:group": "1cfc175b0e7532a47eec44b8ede849d8"},
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "filter": ["==", "class", "crop"],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": 0.01,
                "fill-antialias": false
            }
        },
        {
            "id": "wood",
            "type": "fill",
            "metadata": {"mapbox:group": "1cfc175b0e7532a47eec44b8ede849d8"},
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "filter": ["==", "class", "wood"],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": 0.01,
                "fill-antialias": false
            }
        },
        {
            "id": "scrub",
            "type": "fill",
            "metadata": {"mapbox:group": "1cfc175b0e7532a47eec44b8ede849d8"},
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "filter": ["==", "class", "scrub"],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": 0.01,
                "fill-antialias": false
            }
        },
        {
            "id": "grass",
            "type": "fill",
            "metadata": {"mapbox:group": "1cfc175b0e7532a47eec44b8ede849d8"},
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "filter": ["==", "class", "grass"],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": 0.01,
                "fill-antialias": false
            }
        },
        {
            "id": "national-parks",
            "type": "fill",
            "metadata": {"mapbox:group": "1cfc175b0e7532a47eec44b8ede849d8"},
            "source": "composite",
            "source-layer": "landuse_overlay",
            "filter": ["==", "class", "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0.01,
                    6,
                    0.03
                ]
            }
        },
        {
            "id": "snow",
            "type": "fill",
            "metadata": {"mapbox:group": "1cfc175b0e7532a47eec44b8ede849d8"},
            "source": "composite",
            "source-layer": "landcover",
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "class", "snow"]
            ],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": 0.05,
                "fill-antialias": false
            }
        },
        {
            "id": "pedestrian-road",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                [
                    "all",
                    ["==", "structure", "none"],
                    ["in", "class", "path", "pedestrian"]
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    15.5,
                    0,
                    16,
                    0.1
                ],
                "fill-antialias": true
            }
        },
        {
            "id": "industrial",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "filter": ["==", "class", "industrial"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-antialias": true,
                "fill-opacity": 0.1
            }
        },
        {
            "id": "schools",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "class", "school"]
            ],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-antialias": true,
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.05
                ]
            }
        },
        {
            "id": "hospitals",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "class", "hospital"]
            ],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-antialias": true,
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.05
                ]
            }
        },
        {
            "id": "cemeteries",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["==", "class", "cemetery"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.05
                ],
                "fill-antialias": true
            }
        },
        {
            "id": "parks",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "filter": ["==", "class", "park"],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.05
                ]
            }
        },
        {
            "id": "pitch",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 15,
            "filter": ["==", "class", "pitch"],
            "layout": {"visibility": "visible"},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.05
                ]
            }
        },
        {
            "id": "sand",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "landuse",
            "filter": ["==", "class", "sand"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 10%)",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.01
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "metadata": {"mapbox:group": "a636a5194689e7c1dede11bf3cd8dcac"},
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-color": "#d5e2e4",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    14.5,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "waterway-river-canal",
            "type": "line",
            "metadata": {"mapbox:group": "003e472752e5683c3f8ef9dee45b54a0"},
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "filter": [
                "any",
                ["==", "class", "canal"],
                ["==", "class", "river"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 90%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    8.5,
                    0.1,
                    20,
                    8
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "metadata": {"mapbox:group": "003e472752e5683c3f8ef9dee45b54a0"},
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 11,
            "filter": [
                "all",
                ["!=", "type", "apron"],
                ["==", "$type", "Polygon"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#f3efe5",
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    11,
                    0,
                    11.5,
                    1
                ]
            }
        },
        {
            "id": "aeroway-runway",
            "type": "line",
            "metadata": {"mapbox:group": "003e472752e5683c3f8ef9dee45b54a0"},
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "type", "runway"]
            ],
            "layout": {},
            "paint": {
                "line-color": "#e3cccc",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    9,
                    1,
                    18,
                    80
                ]
            }
        },
        {
            "id": "aeroway-taxiway",
            "type": "line",
            "metadata": {"mapbox:group": "003e472752e5683c3f8ef9dee45b54a0"},
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "type", "taxiway"]
            ],
            "layout": {},
            "paint": {
                "line-color": "#e3cccc",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    0.5,
                    18,
                    20
                ]
            }
        },
        {
            "id": "ferry-route",
            "type": "line",
            "metadata": {"mapbox:group": "003e472752e5683c3f8ef9dee45b54a0"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "class", "ferry"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "hsl(0, 0%, 90%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.75,
                    20,
                    1
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 2]],
                    15,
                    ["literal", [4, 8]]
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    11,
                    0.2,
                    15,
                    0.5
                ]
            }
        },
        {
            "id": "building",
            "type": "fill",
            "metadata": {"mapbox:group": "003e472752e5683c3f8ef9dee45b54a0"},
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["!=", "type", "building:part"],
                ["==", "underground", "false"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsla(0, 0%, 10%, 0.35)",
                "fill-antialias": true,
                "fill-outline-color": "hsl(0, 0%, 90%)",
                "fill-opacity": 0.1
            }
        },
        {
            "id": "tunnel-service-link-track-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["!=", "type", "trunk_link"],
                ["==", "structure", "tunnel"],
                ["in", "class", "link", "service", "track"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-street-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["in", "class", "street", "street_limited"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    0,
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [3, 3],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ]
            }
        },
        {
            "id": "tunnel-secondary-tertiary-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["in", "class", "secondary", "tertiary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    10,
                    0.75,
                    18,
                    2
                ],
                "line-dasharray": [3, 3],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    8.5,
                    0.5,
                    10,
                    0.75,
                    18,
                    26
                ],
                "line-color": "hsl(0, 0%, 90%)"
            }
        },
        {
            "id": "tunnel-primary-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "primary"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    16,
                    2
                ],
                "line-dasharray": [3, 3],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 90%)"
            }
        },
        {
            "id": "tunnel-trunk-link-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["==", "type", "trunk_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-motorway-link-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "class", "motorway_link"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-trunk-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["==", "type", "trunk"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    16,
                    2
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": 1,
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-motorway-case",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "motorway"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    16,
                    2
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": 1,
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-construction",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "class", "construction"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {"line-join": "miter", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12.5,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 0.5,
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "path"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    2
                ],
                "line-dasharray": [0.25, 4],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 0.5
            }
        },
        {
            "id": "tunnel-trunk-link",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["==", "type", "trunk_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 1,
                "line-dasharray": [1, 0]
            }
        },
        {
            "id": "tunnel-motorway-link",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "class", "motorway_link"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 1,
                "line-dasharray": [1, 0]
            }
        },
        {
            "id": "tunnel-pedestrian",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "tunnel"]
                ]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 0.5,
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "tunnel-service-link-track",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["!=", "type", "trunk_link"],
                ["==", "structure", "tunnel"],
                ["in", "class", "link", "service", "track"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-dasharray": [1, 0],
                "line-opacity": 0.5
            }
        },
        {
            "id": "tunnel-street",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["in", "class", "street", "street_limited"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12.5,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 0.5
            }
        },
        {
            "id": "tunnel-secondary-tertiary",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "structure", "tunnel"],
                ["in", "class", "secondary", "tertiary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    8.5,
                    0.5,
                    10,
                    0.75,
                    18,
                    26
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 1,
                "line-dasharray": [1, 0]
            }
        },
        {
            "id": "tunnel-primary",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "primary"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 10%)",
                "line-opacity": 1,
                "line-dasharray": [1, 0]
            }
        },
        {
            "id": "tunnel-trunk",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "trunk"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 10%)"
            }
        },
        {
            "id": "tunnel-motorway",
            "type": "line",
            "metadata": {"mapbox:group": "ab588f3c9c75b626577112146960e2bf"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "motorway"],
                ["==", "structure", "tunnel"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-dasharray": [1, 0],
                "line-opacity": 1,
                "line-color": "hsl(0, 0%, 10%)"
            }
        },
        {
            "id": "road-pedestrian-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    14.5
                ],
                "line-color": "#8d8a8f",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "road-service-link-track-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["!=", "type", "trunk_link"],
                ["!in", "structure", "bridge", "tunnel"],
                ["in", "class", "link", "service", "track"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    7,
                    0.4,
                    9,
                    0.5,
                    10,
                    1
                ]
            }
        },
        {
            "id": "road-street-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "none"],
                    ["in", "class", "street", "street_limited"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    0,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    7,
                    0.4,
                    9,
                    0.5,
                    10,
                    1
                ]
            }
        },
        {
            "id": "road-main-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["in", "class", "secondary", "tertiary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    10,
                    0.75,
                    18,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    8.5,
                    0.5,
                    10,
                    0.75,
                    18,
                    26
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    7,
                    0.4,
                    9,
                    0.5,
                    10,
                    1
                ]
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "primary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    16,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    7,
                    0.4,
                    9,
                    0.5,
                    10,
                    1
                ]
            }
        },
        {
            "id": "road-motorway-link-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "motorway_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    7,
                    0.4,
                    9,
                    0.5,
                    10,
                    1
                ]
            }
        },
        {
            "id": "road-trunk-link-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "type", "trunk_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    7,
                    0.4,
                    9,
                    0.5,
                    10,
                    1
                ]
            }
        },
        {
            "id": "road-trunk-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "trunk"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    7,
                    0.5,
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.5,
                    9,
                    1.4,
                    18,
                    32
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    6,
                    0,
                    6.1,
                    1
                ]
            }
        },
        {
            "id": "road-motorway-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "motorway"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    7,
                    0.25,
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "hsl(285, 2%, 55%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": 1
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "construction"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-join": "miter", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12.5,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#f3efe5",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "road-sidewalks",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "type", "crossing", "sidewalk"]
                ]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    3
                ],
                "line-color": "#f3efe5",
                "line-dasharray": [0.25, 1],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    16,
                    0,
                    16.25,
                    1
                ]
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["!in", "type", "crossing", "sidewalk"],
                    ["==", "class", "path"]
                ]
            ],
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    2
                ],
                "line-color": "#8d8a8f",
                "line-dasharray": [0.25, 4],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    0,
                    14.25,
                    0.75
                ]
            }
        },
        {
            "id": "road-trunk-link",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "type", "trunk_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#f3efe5",
                "line-opacity": 1
            }
        },
        {
            "id": "road-motorway-link",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "motorway_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#f3efe5",
                "line-opacity": 1
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "#f3efe5",
                "line-opacity": 1,
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "road-service-link-track",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["!=", "type", "trunk_link"],
                ["!in", "structure", "bridge", "tunnel"],
                ["in", "class", "link", "service", "track"]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "#f3efe5"
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "none"],
                    ["in", "class", "street", "street_limited"]
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12.5,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#f3efe5",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ]
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["in", "class", "secondary", "tertiary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    8.5,
                    0.5,
                    10,
                    0.75,
                    18,
                    26
                ],
                "line-color": "#f3efe5",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    5,
                    0,
                    5.5,
                    1
                ]
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "primary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#f3efe5",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    5,
                    0,
                    5.5,
                    1
                ]
            }
        },
        {
            "id": "road-trunk",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "trunk"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.5,
                    9,
                    1.4,
                    18,
                    32
                ],
                "line-color": "#f3efe5",
                "line-opacity": 1
            }
        },
        {
            "id": "road-motorway",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "structure", "bridge", "tunnel"],
                ["==", "class", "motorway"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#f3efe5",
                "line-opacity": 1
            }
        },
        {
            "id": "road-rail-case",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["!=", "structure", "tunnel"],
                ["in", "class", "major_rail", "minor_rail"]
            ],
            "layout": {
                "line-join": "miter",
                "line-cap": "square",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#f3efe5",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    14,
                    3,
                    20,
                    4
                ],
                "line-dasharray": [0.25, 10]
            }
        },
        {
            "id": "road-rail",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["!=", "structure", "tunnel"],
                ["in", "class", "major_rail", "minor_rail"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-color": "#f3efe5",
                "line-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    0.75,
                    20,
                    1
                ]
            }
        },
        {
            "id": "road-subway",
            "type": "line",
            "metadata": {"mapbox:group": "0cb8c63458cbe21bbe1ad66543f73a04"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "type", "subway"],
                ["in", "class", "major_rail", "minor_rail"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-color": "#f3efe5",
                "line-dasharray": [2, 1],
                "line-width": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    14,
                    1,
                    17,
                    2.25
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    14,
                    0.25,
                    17,
                    1
                ]
            }
        },
        {
            "id": "bridge-pedestrian-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    14.5
                ],
                "line-color": "#1e1e1e",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ]
            }
        },
        {
            "id": "bridge-service-link-track-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["!=", "type", "trunk_link"],
                ["==", "structure", "bridge"],
                ["in", "class", "link", "service", "track"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ]
            }
        },
        {
            "id": "bridge-street-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["in", "class", "street", "street_limited"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ],
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    13,
                    0,
                    14,
                    2,
                    18,
                    18
                ]
            }
        },
        {
            "id": "bridge-secondary-tertiary-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["in", "class", "secondary", "tertiary"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    10,
                    0.75,
                    18,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    8.5,
                    0.5,
                    10,
                    0.75,
                    18,
                    26
                ],
                "line-translate": [0, 0]
            }
        },
        {
            "id": "bridge-primary-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "primary"],
                ["==", "structure", "bridge"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    16,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-translate": [0, 0]
            }
        },
        {
            "id": "bridge-trunk-link-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["==", "type", "trunk_link"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    10.99,
                    0,
                    11,
                    1
                ]
            }
        },
        {
            "id": "bridge-motorway-link-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["<=", "layer", 1],
                ["==", "class", "motorway_link"],
                ["==", "structure", "bridge"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": 1
            }
        },
        {
            "id": "bridge-trunk-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "trunk"],
                ["==", "structure", "bridge"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-motorway-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "motorway"],
                ["==", "structure", "bridge"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    7,
                    0.5,
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "class", "construction"],
                ["==", "structure", "bridge"]
            ],
            "layout": {"line-join": "miter", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12.5,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#eae7df",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "path"],
                ["==", "structure", "bridge"]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "#eae7df",
                "line-dasharray": [0.5, 2],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    0,
                    14.25,
                    1
                ]
            }
        },
        {
            "id": "bridge-trunk-link",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["!in", "layer", 2, 3, 4, 5],
                ["==", "structure", "bridge"],
                ["==", "type", "trunk_link"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-motorway-link",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["!in", "layer", 2, 3, 4, 5],
                ["==", "class", "motorway_link"],
                ["==", "structure", "bridge"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-pedestrian",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "#eae7df",
                "line-opacity": 1,
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [1, 0]],
                    15,
                    ["literal", [1.5, 0.4]],
                    16,
                    ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "bridge-service-link-track",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["!=", "type", "trunk_link"],
                ["==", "structure", "bridge"],
                ["in", "class", "link", "service", "track"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-street",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["in", "class", "street", "street_limited"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12.5,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#eae7df",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    0,
                    14,
                    1
                ]
            }
        },
        {
            "id": "bridge-secondary-tertiary",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["in", "type", "secondary", "tertiary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    8.5,
                    0.5,
                    10,
                    0.75,
                    18,
                    26
                ],
                "line-color": "#eae7df",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    5,
                    0,
                    5.5,
                    1
                ]
            }
        },
        {
            "id": "bridge-primary",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["==", "type", "primary"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#eae7df",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    5,
                    0,
                    5.5,
                    1
                ]
            }
        },
        {
            "id": "bridge-trunk",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["!in", "layer", 2, 3, 4, 5],
                ["==", "class", "trunk"],
                ["==", "structure", "bridge"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-motorway",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["<", "layer", 2],
                ["==", "class", "motorway"],
                ["==", "structure", "bridge"]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-trunk-link-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["==", "type", "trunk_link"],
                [">=", "layer", 2]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    10.99,
                    0,
                    11,
                    1
                ]
            }
        },
        {
            "id": "bridge-motorway-link-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "class", "motorway_link"],
                ["==", "structure", "bridge"],
                [">=", "layer", 2]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": 1
            }
        },
        {
            "id": "bridge-trunk-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "trunk"],
                ["==", "structure", "bridge"],
                [">=", "layer", 2]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-motorway-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "motorway"],
                ["==", "structure", "bridge"],
                [">=", "layer", 2]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    7,
                    0.5,
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "#1e1e1e",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-trunk-link-2",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "structure", "bridge"],
                ["==", "type", "trunk_link"],
                [">=", "layer", 2]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-motorway-link-2",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "class", "motorway_link"],
                ["==", "structure", "bridge"],
                [">=", "layer", 2]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-trunk-2",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "trunk"],
                ["==", "structure", "bridge"],
                [">=", "layer", 2]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "bridge-motorway-2",
            "type": "line",
            "metadata": {"mapbox:group": "f423319a6dab2ed463382f7e7edc5da1"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "class", "motorway"],
                ["==", "structure", "bridge"],
                [">=", "layer", 2]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "#eae7df"
            }
        },
        {
            "id": "border-admin-3-4-case",
            "type": "line",
            "metadata": {"mapbox:group": "4a585425cb0cc2af93b4cdedda86461d"},
            "source": "composite",
            "source-layer": "admin",
            "filter": ["all", ["==", "maritime", 0], [">=", "admin_level", 3]],
            "layout": {"line-join": "bevel", "visibility": "visible"},
            "paint": {
                "line-color": "hsl(0, 0%, 90%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    2.25,
                    10,
                    4.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    4,
                    0,
                    8,
                    0.5
                ],
                "line-dasharray": [1, 0],
                "line-translate": [0, 0],
                "line-blur": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    0,
                    8,
                    2
                ]
            }
        },
        {
            "id": "border-admin-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "4a585425cb0cc2af93b4cdedda86461d"},
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": ["all", ["==", "admin_level", 2], ["==", "maritime", 0]],
            "layout": {"line-join": "miter", "visibility": "visible"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    3,
                    10,
                    9
                ],
                "line-color": "hsl(0, 0%, 90%)",
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    0,
                    4,
                    0.5
                ],
                "line-translate": [0, 0],
                "line-blur": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    0,
                    10,
                    2
                ]
            }
        },
        {
            "id": "border-admin-3-4",
            "type": "line",
            "metadata": {"mapbox:group": "4a585425cb0cc2af93b4cdedda86461d"},
            "source": "composite",
            "source-layer": "admin",
            "filter": ["all", ["==", "maritime", 0], [">=", "admin_level", 3]],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [2, 1]],
                    7,
                    ["literal", [2, 2, 6, 2]]
                ],
                "line-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    7,
                    0.75,
                    12,
                    1.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    2.75,
                    0,
                    3,
                    0.5
                ],
                "line-color": "hsl(0, 0%, 10%)"
            }
        },
        {
            "id": "border-admin-2",
            "type": "line",
            "metadata": {"mapbox:group": "4a585425cb0cc2af93b4cdedda86461d"},
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", "admin_level", 2],
                ["==", "disputed", 0],
                ["==", "maritime", 0]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 10%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    1,
                    10,
                    2.5
                ]
            }
        },
        {
            "id": "border-admin-2-dispute",
            "type": "line",
            "metadata": {"mapbox:group": "4a585425cb0cc2af93b4cdedda86461d"},
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", "admin_level", 2],
                ["==", "disputed", 1],
                ["==", "maritime", 0]
            ],
            "layout": {"line-join": "round", "visibility": "visible"},
            "paint": {
                "line-dasharray": [1.5, 1.5],
                "line-color": "hsl(0, 0%, 10%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ],
                "line-opacity": 0.75
            }
        },
        {
            "id": "road-label-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "659790aba31107609c41007408bfdeeb"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "!in",
                    "class",
                    "",
                    "ferry",
                    "link",
                    "motorway",
                    "path",
                    "pedestrian",
                    "primary",
                    "secondary",
                    "street",
                    "street_limited",
                    "tertiary",
                    "track",
                    "trunk"
                ],
                ["==", "$type", "LineString"]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    15,
                    10,
                    20,
                    12
                ],
                "text-max-angle": 30,
                "text-transform": "uppercase",
                "symbol-spacing": 500,
                "text-font": ["MAW Medium"],
                "symbol-placement": "line",
                "text-offset": [0, 0],
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    15.5,
                    1.25,
                    16.5,
                    2.5
                ],
                "text-halo-blur": 0,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "road-label-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "659790aba31107609c41007408bfdeeb"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "in",
                    "class",
                    "",
                    "link",
                    "pedestrian",
                    "street",
                    "street_limited"
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    11,
                    10,
                    20,
                    14
                ],
                "text-max-angle": 30,
                "text-transform": "uppercase",
                "symbol-spacing": 500,
                "text-font": ["MAW Medium"],
                "symbol-placement": "line",
                "text-offset": [0, 0],
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    15.5,
                    1.25,
                    16.5,
                    2.5
                ],
                "text-halo-blur": 0,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "road-label-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "659790aba31107609c41007408bfdeeb"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 13,
            "filter": [
                "in",
                "class",
                "motorway",
                "primary",
                "secondary",
                "tertiary",
                "trunk"
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    9,
                    10,
                    20,
                    16
                ],
                "text-max-angle": 30,
                "text-transform": "uppercase",
                "symbol-spacing": 400,
                "text-font": ["MAW Medium"],
                "symbol-placement": "line",
                "text-offset": [0, 0],
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    15.5,
                    1,
                    16.5,
                    2
                ],
                "text-halo-blur": 0,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "Special",
            "type": "fill-extrusion",
            "metadata": {"mapbox:group": "17f1ea8c5a50daadcf8ad2e3a372743d"},
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", "extrude", "true"],
                ["==", "underground", "false"],
                [
                    "in",
                    "type",
                    "barn",
                    "civic",
                    "commercial",
                    "commercial;residential",
                    "construction",
                    "detached",
                    "farm",
                    "farm_auxilary",
                    "garage",
                    "garages",
                    "greenhouse",
                    "hangar",
                    "hospital",
                    "hotel",
                    "industrial",
                    "manufacture",
                    "office",
                    "public",
                    "retail",
                    "school",
                    "service",
                    "shed",
                    "shop",
                    "stable",
                    "storage_tank",
                    "terrace",
                    "train_station",
                    "transportation",
                    "university",
                    "warehouse"
                ]
            ],
            "layout": {},
            "paint": {
                "fill-extrusion-color": "#dfbdbf",
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    16,
                    0,
                    17,
                    ["get", "height"]
                ],
                "fill-extrusion-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    17,
                    0.6
                ],
                "fill-extrusion-base": [
                    "interpolate",
                    ["exponential", 1],
                    ["number", ["get", "min_height"]],
                    0,
                    0,
                    1000,
                    1000
                ]
            }
        },
        {
            "id": "Residential",
            "type": "fill-extrusion",
            "metadata": {"mapbox:group": "17f1ea8c5a50daadcf8ad2e3a372743d"},
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "!in",
                    "type",
                    "barn",
                    "chapel",
                    "church",
                    "civic",
                    "commercial",
                    "commercial;residential",
                    "construction",
                    "detached",
                    "farm",
                    "farm_auxilary",
                    "garage",
                    "garages",
                    "greenhouse",
                    "hangar",
                    "hospital",
                    "hotel",
                    "industrial",
                    "manufacture",
                    "office",
                    "place_of_worship",
                    "public",
                    "retail",
                    "school",
                    "service",
                    "shed",
                    "shop",
                    "stable",
                    "storage_tank",
                    "terrace",
                    "train_station",
                    "transportation",
                    "university",
                    "warehouse"
                ],
                ["==", "extrude", "true"],
                ["==", "underground", "false"]
            ],
            "layout": {},
            "paint": {
                "fill-extrusion-color": "#f2edd6",
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    16,
                    0,
                    17,
                    ["get", "height"]
                ],
                "fill-extrusion-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    17,
                    0.6
                ],
                "fill-extrusion-base": [
                    "interpolate",
                    ["exponential", 1],
                    ["number", ["get", "min_height"]],
                    0,
                    0,
                    1000,
                    1000
                ]
            }
        },
        {
            "id": "Religious",
            "type": "fill-extrusion",
            "metadata": {"mapbox:group": "17f1ea8c5a50daadcf8ad2e3a372743d"},
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", "extrude", "true"],
                ["==", "underground", "false"],
                ["in", "type", "chapel", "church", "place_of_worship"]
            ],
            "layout": {},
            "paint": {
                "fill-extrusion-color": "#c9dbdd",
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    16,
                    0,
                    17,
                    ["get", "height"]
                ],
                "fill-extrusion-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    17,
                    0.6
                ],
                "fill-extrusion-base": [
                    "interpolate",
                    ["exponential", 1],
                    ["number", ["get", "min_height"]],
                    0,
                    0,
                    1000,
                    1000
                ]
            }
        },
        {
            "id": "poi-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                ["in", "scalerank", 3, 4]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    16,
                    10,
                    20,
                    12
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-padding": 1,
                "text-offset": [0, 0],
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "poi-parks-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                ["in", "scalerank", 3, 4]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    16,
                    10,
                    20,
                    12
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-padding": 1,
                "text-offset": [0, 0],
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "poi-parks-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "scalerank", 2],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    11,
                    20,
                    12
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-padding": 1,
                "text-offset": [0, 0],
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "poi-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 14,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                ["==", "scalerank", 2]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    11,
                    20,
                    12
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-padding": 1,
                "text-offset": [0, 0],
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "waterway_label",
            "minzoom": 12,
            "filter": ["in", "class", "canal", "river"],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-font": ["MAW Medium"],
                "symbol-placement": "line",
                "text-max-angle": 30,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    12,
                    18,
                    16
                ]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "water-label",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "water_label",
            "minzoom": 5,
            "filter": [">", "area", 10000],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-font": ["MAW Medium"],
                "text-max-width": 7,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    13,
                    14,
                    18,
                    18
                ],
                "symbol-avoid-edges": false,
                "text-rotation-alignment": "viewport"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "poi-parks-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 6,
            "filter": [
                "all",
                ["<=", "scalerank", 1],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": 12,
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-padding": 1,
                "text-offset": [0, 0],
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "poi-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                ["<=", "scalerank", 1]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    12,
                    18,
                    16
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-padding": 1,
                "text-offset": [0, 0],
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "ferry-label",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", "class", "ferry"],
                ["in", "$type", "LineString", "Point"]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    11,
                    20,
                    12
                ],
                "symbol-avoid-edges": false,
                "text-max-angle": 30,
                "symbol-spacing": 400,
                "text-font": ["MAW Medium"],
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "rail-station-label",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "rail_station_label",
            "minzoom": 12,
            "filter": ["in", "$type", "LineString", "Point", "Polygon"],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    14,
                    11,
                    20,
                    12
                ],
                "symbol-avoid-edges": false,
                "text-max-angle": 30,
                "symbol-spacing": 400,
                "text-font": ["MAW Medium"],
                "symbol-placement": "point",
                "text-rotation-alignment": "viewport",
                "text-field": ["to-string", ["get", "name_en"]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "metadata": {"mapbox:group": "87eb9fc4e65e33c3909d5992c53c8c22"},
            "source": "composite",
            "source-layer": "airport_label",
            "minzoom": 10,
            "filter": ["<=", "scalerank", 2],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    10,
                    12,
                    18,
                    18
                ],
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-max-width": 9,
                "text-field": [
                    "step",
                    ["zoom"],
                    ["to-string", ["get", "ref"]],
                    14,
                    ["to-string", ["get", "name_en"]]
                ]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-islets-archipelago-aboriginal",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 16,
            "filter": [
                "in",
                "type",
                "aboriginal_lands",
                "archipelago",
                "islet"
            ],
            "layout": {
                "text-line-height": 1.2,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    10,
                    11,
                    18,
                    16
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-offset": [0, 0],
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-neighbourhood",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 12,
            "maxzoom": 16,
            "filter": ["==", "type", "neighbourhood"],
            "layout": {
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-transform": "uppercase",
                "text-letter-spacing": 0.1,
                "text-max-width": 7,
                "text-font": ["MAW Medium"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    12,
                    12,
                    16,
                    16
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.5,
                "text-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-suburb",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 11,
            "maxzoom": 16,
            "filter": ["==", "type", "suburb"],
            "layout": {
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-transform": "uppercase",
                "text-font": ["MAW Medium"],
                "text-letter-spacing": 0.1,
                "text-max-width": 7,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    12,
                    12,
                    16,
                    16
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.5,
                "text-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-hamlet",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 16,
            "filter": ["==", "type", "hamlet"],
            "layout": {
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-font": ["MAW Medium"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    12,
                    12,
                    15,
                    16
                ]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.25,
                "text-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-village",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 11,
            "maxzoom": 15,
            "filter": ["==", "type", "village"],
            "layout": {
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-font": ["MAW Medium"],
                "text-max-width": 7,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    10,
                    12,
                    16,
                    18
                ],
                "text-offset": [0, 0]
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.25,
                "text-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-town",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 7,
            "maxzoom": 16,
            "filter": ["==", "type", "town"],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    7,
                    12,
                    15,
                    20
                ],
                "text-font": ["MAW Medium"],
                "text-max-width": 7,
                "text-offset": [0, 0],
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-islands",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 16,
            "filter": ["==", "type", "island"],
            "layout": {
                "text-line-height": 1.2,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    10,
                    11,
                    18,
                    16
                ],
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": ["MAW Medium"],
                "text-offset": [0, 0],
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-city-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 16,
            "filter": [
                "all",
                ["!in", "scalerank", 0, 1, 2, 3, 4, 5],
                ["==", "type", "city"]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    6,
                    12,
                    14,
                    26
                ],
                "text-font": ["MAW Medium"],
                "text-offset": [0, 0],
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.5,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-city-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 16,
            "filter": [
                "all",
                ["==", "type", "city"],
                ["in", "scalerank", 3, 4, 5]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    5,
                    12,
                    12,
                    26
                ],
                "text-font": ["MAW Medium"],
                "text-anchor": "center",
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]],
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-halo-width": 1.5,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "place-city-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "0e4fe52bb6e07167e428ec66ad643fd7"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 16,
            "filter": ["all", ["<=", "scalerank", 2], ["==", "type", "city"]],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    4,
                    12,
                    10,
                    26
                ],
                "text-font": ["MAW Medium"],
                "text-max-width": 7,
                "text-field": ["upcase", ["to-string", ["get", "name_en"]]]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-width": 1.5,
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "marine-line-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "d84bd578f1389e89645c76070bd1c761"},
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [">=", "labelrank", 4]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    12,
                    6,
                    16
                ],
                "symbol-spacing": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    4,
                    100,
                    6,
                    400
                ],
                "text-font": ["IM FELL DW Pica Italic"],
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]],
                "text-letter-spacing": 0.1,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "marine-point-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "d84bd578f1389e89645c76070bd1c761"},
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "filter": ["all", ["==", "$type", "Point"], [">=", "labelrank", 4]],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 5,
                "text-letter-spacing": 0.1,
                "text-line-height": 1.5,
                "text-font": ["IM FELL DW Pica Italic"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    12,
                    6,
                    16
                ]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "marine-line-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "d84bd578f1389e89645c76070bd1c761"},
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 2,
            "maxzoom": 8,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "labelrank", 2, 3]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    2,
                    12,
                    5,
                    20
                ],
                "symbol-spacing": 250,
                "text-font": ["IM FELL DW Pica Italic"],
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]],
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "marine-point-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "d84bd578f1389e89645c76070bd1c761"},
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 2,
            "maxzoom": 8,
            "filter": [
                "all",
                ["==", "$type", "Point"],
                ["in", "labelrank", 2, 3]
            ],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 5,
                "text-letter-spacing": 0.15,
                "text-line-height": 1.5,
                "text-font": ["IM FELL DW Pica Italic"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    2,
                    14,
                    5,
                    20
                ]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.25,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "marine-line-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "d84bd578f1389e89645c76070bd1c761"},
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 1,
            "maxzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["==", "labelrank", 1]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    1,
                    12,
                    4,
                    28
                ],
                "text-font": ["IM FELL DW Pica Italic"],
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-field": ["to-string", ["get", "name_en"]],
                "text-letter-spacing": 0.25,
                "text-max-width": 4
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.5,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "marine-point-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "d84bd578f1389e89645c76070bd1c761"},
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 1,
            "maxzoom": 5,
            "filter": ["all", ["==", "$type", "Point"], ["==", "labelrank", 1]],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 4,
                "text-letter-spacing": 0.25,
                "text-line-height": 1.5,
                "text-font": ["IM FELL DW Pica Italic"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    1,
                    12,
                    4,
                    28
                ]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 90%)",
                "text-halo-color": "hsl(0, 0%, 10%)",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.5,
                "text-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "state-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "7d43494b5025022bf83d5e73f771a8c5"},
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": ["<", "area", 20000],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    5,
                    10,
                    8,
                    14
                ],
                "text-transform": "uppercase",
                "text-font": ["IM FELL DW Pica Regular"],
                "text-field": [
                    "step",
                    ["zoom"],
                    ["to-string", ["get", "abbr"]],
                    6,
                    ["to-string", ["get", "name_en"]]
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-halo-width": 1,
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)"
            }
        },
        {
            "id": "state-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "7d43494b5025022bf83d5e73f771a8c5"},
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 8,
            "filter": ["all", ["<", "area", 80000], [">=", "area", 20000]],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    4,
                    10,
                    7,
                    16
                ],
                "text-transform": "uppercase",
                "text-font": ["IM FELL DW Pica Regular"],
                "text-field": [
                    "step",
                    ["zoom"],
                    ["to-string", ["get", "abbr"]],
                    5,
                    ["to-string", ["get", "name_en"]]
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-halo-width": 1,
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)"
            }
        },
        {
            "id": "state-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "7d43494b5025022bf83d5e73f771a8c5"},
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 7,
            "filter": [">=", "area", 80000],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    3,
                    10,
                    6,
                    18
                ],
                "text-transform": "uppercase",
                "text-font": ["IM FELL DW Pica Regular"],
                "text-max-width": 6,
                "text-field": [
                    "step",
                    ["zoom"],
                    ["to-string", ["get", "abbr"]],
                    4,
                    ["to-string", ["get", "name_en"]]
                ],
                "text-letter-spacing": 0.15
            },
            "paint": {
                "text-halo-width": 1,
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-color": "hsl(0, 0%, 90%)"
            }
        },
        {
            "id": "country-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "7d43494b5025022bf83d5e73f771a8c5"},
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 10,
            "filter": [">=", "scalerank", 5],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": 6,
                "text-font": ["IM FELL DW Pica Regular"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    4,
                    12,
                    9,
                    24
                ]
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-color": "hsl(0, 0%, 10%)"
            }
        },
        {
            "id": "country-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "7d43494b5025022bf83d5e73f771a8c5"},
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 8,
            "filter": ["in", "scalerank", 3, 4],
            "layout": {
                "text-field": [
                    "step",
                    ["zoom"],
                    ["to-string", ["get", "code"]],
                    2,
                    ["to-string", ["get", "name_en"]]
                ],
                "text-max-width": 6,
                "text-font": ["IM FELL DW Pica Regular"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    2,
                    10,
                    8,
                    26
                ]
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-color": "hsl(0, 0%, 10%)"
            }
        },
        {
            "id": "country-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "7d43494b5025022bf83d5e73f771a8c5"},
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 7,
            "filter": ["in", "scalerank", 1, 2],
            "layout": {
                "text-field": ["to-string", ["get", "name_en"]],
                "text-max-width": [
                    "interpolate",
                    ["exponential", 1],
                    ["zoom"],
                    0,
                    5,
                    3,
                    6
                ],
                "text-font": ["IM FELL DW Pica Regular"],
                "text-size": [
                    "interpolate",
                    ["exponential", 1.25],
                    ["zoom"],
                    1,
                    10,
                    6,
                    28
                ]
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-color": "hsl(0, 0%, 90%)",
                "text-color": "hsl(0, 0%, 10%)",
                "text-opacity": 0
            }
        }
    ],
    "created": "2018-10-04T19:29:34.627Z",
    "id": "cjmuz5ury3tf92rnu7k5lxij2",
    "modified": "2018-10-05T16:48:22.164Z",
    "owner": "landplanner",
    "visibility": "private",
    "draft": false
}
