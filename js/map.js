
var mapOptions = {
    center: [52, 5],
    zoom: 3
  }

var mymap = L.map('mapid', mapOptions);

// https://docs.mapbox.com/api/maps/styles/#mapbox-styles 

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v12',
    // id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiNWNoaWVoIiwiYSI6ImNsZDV6aW83YTA0Z2gzb2pvN2NlaGgwa2UifQ.1K0nOtmpdfmdNHEO2QVtGQ'
}).addTo(mymap);

// Personal style url template

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/{style_id}/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: '5chieh',
//     style_id: 'clrcoqbxn009s01qq2z68cgin',
//     accessToken: 'pk.eyJ1IjoiNWNoaWVoIiwiYSI6ImNsZDV6aW83YTA0Z2gzb2pvN2NlaGgwa2UifQ.1K0nOtmpdfmdNHEO2QVtGQ'
// }).addTo(mymap);


const neverBeenToCountries = ["Iceland", "Malta", "Lativia", "Lithuania"]

let colorratio = {
    1:"#FFFFF0",
    2:"blue",
    3:"yellow",
    4:"red"
};

let colorinput  = {
    Netherlands: "1",
    Belgium: "1",
    France: "1",
    Germany: "1",
    Denmark: "1",
    Sweden: "1",
    Finland: "1",
    Estonia: "1",
    Poland: "1",
    Czech: "1",
    Slovakia: "1",
    Hungary: "1",
    Austria: "1",
    Switzerland: "1",
    Italy: "1",
    Spain: "1",
    UK: "1",
    Norway: "1",
    Ireland: "1",
    Slovenia: "1",
    Portugal: "1",
    Croatia: "1",
    Romania: "1",
    Bulgaria: "1",
    Greece: "1",
    Luxembourg: "1",
};
// Lightup Coutries that I have been
L.geoJSON(europe31, {
    style: function(feature) {
      return {
        fillColor: colorratio[colorinput[feature.id]] || "grey", // Default color of countries.
        fillOpacity: 0.5,
        stroke: true,
        color: "grey", // Lines in between countries.
        weight: 3
      };
    }
  }).bindPopup(function(layer) {
    return layer.feature.properties.name;
  }).addTo(mymap);
// unuse
// use a mix of renderers
// var customPane = mymap.createPane("customPane");
// var canvasRenderer = L.canvas({pane:"customPane"});
// customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400

const cities = {
    "Amsterdam": [52.3105, 4.7683],
    "Athens": [37.9838, 23.7275],
    "Basel": [47.5596, 7.5806],
    "Berlin": [52.38, 13.52],
    "Bucharest": [44.4268, 26.1025],
    "Budapest": [47.4984, 19.0399],
    "Copenhagen": [55.6761, 12.5683],
    "Dublin": [53.3498, -6.2603],
    "Eindhoven": [51.4416, 5.4697],
    "Frankfurt": [50.1109, 8.6821],
    "Geneva": [46.2044, 6.1432],
    "Helsinki": [60.1699, 24.9384],
    "Kaohsiung": [22.6333, 120.2667],
    "Krakow": [50.0647, 19.9450],
    "Lisbon": [38.7223, -9.1393],
    "London": [51.1537, -0.1809],
    "Los Angeles": [34.0522, -118.2437],
    "Malaga": [36.7201, -4.4200],
    "Milan": [45.4642, 9.1900],
    "Naha": [26.2124, 127.6809],
    "Paris": [48.8566, 2.3522],
    "Phoenix": [33.4484, -112.0740],
    "Phnom Penh": [11.5587, 104.9282],
    "Prague": [50.0755, 14.4378],
    "Rome": [41.8955, 12.4823],
    "San Francisco": [37.7749, -122.4194],
    "Santiago De Compostela": [42.8782, -8.5448],
    "Sapporo": [43.0621, 141.3544],
    "Seville": [37.3828, -5.973],
    "Shanghai": [31.2304, 121.4737],
    "Sofia": [42.6977, 23.3219],
    "Stavanger": [58.9690, 5.7331],
    "Stuttgart": [48.7758, 9.1829],
    "Taipei": [25.0330, 121.5654],
    "Tayama": [36.3, 137.4833],
    "Thira": [36.3932, 25.4615],
    "Tokyo": [35.6895, 139.6917],
    "Urumqi": [43.7930, 87.6298],
    "Vancouver": [49.2827, -123.1207],
    "Warsaw": [52.2297, 21.0122],
    "Zagreb": [45.8150, 15.9819],
    "Zurich": [47.3769, 8.5417]
}

const routes = [
    {begin: "Amsterdam", end:"Athens"},
    {begin: "Amsterdam", end:"Berlin"},
    {begin: "Amsterdam", end:"Geneva"},
    {begin: "Amsterdam", end:"London"},
    {begin: "Amsterdam", end:"Seville"},
    {begin: "Amsterdam", end:"Malaga"},
    {begin: "Amsterdam", end:"Copenhagen"},
    {begin: "Amsterdam", end:"Warsaw"},
    {begin: "Amsterdam", end:"Budapest"},
    {begin: "Amsterdam", end:"Prague"},
    {begin: "Amsterdam", end:"Milan"},
    {begin: "Amsterdam", end:"Rome"},
    {begin: "Amsterdam", end:"Zurich"},
    {begin: "Amsterdam", end:"Taipei"},
    {begin: "Amsterdam", end:"Dublin"},
    {begin: "Amsterdam", end:"San Francisco"},
    {begin: "Amsterdam", end:"Stavanger"},
    {begin: "Amsterdam", end:"Stuttgart"},
    {begin: "Athens", end:"Thira"},
    {begin: "Athens", end:"Frankfurt"},
    {begin: "Basel", end:"Amsterdam"},
    {begin: "Eindhoven", end:"Sofia"},
    {begin: "Eindhoven", end:"Bucharest"},
    {begin: "Eindhoven", end:"Zagreb"},
    {begin: "Helsinki", end:"Amsterdam"},
    {begin: "Kaohsiung", end:"Naha"},
    {begin: "Krakow", end:"Amsterdam"},
    {begin: "Los Angeles", end:"Phoenix"},
    {begin: "Lisbon", end:"London"},
    {begin: "Phoenix", end:"San Francisco"},
    {begin: "San Francisco", end:"Vancouver"},
    {begin: "Sofia", end:"Amsterdam"},
    {begin: "Taipei", end:"Paris"},
    {begin: "Taipei", end:"Phnom Penh"},
    {begin: "Taipei", end:"Tokyo"},
    {begin: "Taipei", end:"Shanghai"},
    {begin: "Taipei", end:"Sapporo"},
    {begin: "Taipei", end:"Tayama"},
    {begin: "Taipei", end:"Urumqi"},
    {begin: "Taipei", end:"Paris"},
    {begin: "Vancouver", end:"Los Angeles"},
    {begin: "Zurich", end:"Santiago De Compostela"},

      ];

// Get midpoint by begin and end latlng
function getMidpoint(latlng1,latlng2) {
    
    var offsetX = latlng2[1] - latlng1[1],
        offsetY = latlng2[0] - latlng1[0];
    var offsetX = latlng2[1] - latlng1[1],
        offsetY = latlng2[0] - latlng1[0];
    
    var r = Math.sqrt( Math.pow(offsetX, 2) + Math.pow(offsetY, 2) ),
        theta = Math.atan2(offsetY, offsetX);
    
    var thetaOffset = (3.14/10);
    
    var r2 = (r/2)/(Math.cos(thetaOffset)),
        theta2 = theta + thetaOffset;
    
    var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
        midpointY = (r2 * Math.sin(theta2)) + latlng1[0];
    
    var midpointLatLng = [midpointY, midpointX];

    return midpointLatLng;
    

}
// add routes
routes.forEach((route) => {
    var begincity = route.begin;
    var endcity = route.end;
    var beginlatlng = cities[begincity];
    var endlatlng = cities[endcity];
    var midlatlng = getMidpoint(beginlatlng, endlatlng);
    var pathOptions = {
        color: 'rgba(30,144,255,1)',
        weight: 3,
        animate: 5000
    }
    pathOptions.animate = {
        duration: 5000,
        iterations: Infinity,
        easing: 'ease-in-out',
        direction: 'alternate'
    }
    const popupContent = document.createElement("div")
    popupContent.innerHTML = "<h3>"+begincity+" <---> "+endcity+"</h3>"
    // const testcontent = begincity + "<---->" + endcity
    var curvedPath = L.curve(
        [
            'M', beginlatlng,
            'Q', midlatlng,
            endlatlng
        ], pathOptions).bindPopup(popupContent,
            { maxWidth: 200 }).addTo(mymap); 

  });

  // TODO Add PopUp information of each route
