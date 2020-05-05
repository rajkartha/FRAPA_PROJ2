// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
// var myMap = L.map("map", {
//   center: [33.963343, -84.220705],
//   zoom: 5
// });

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map

console.log('Hello')

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
})//.addTo(myMap);

var BurgerIcon = L.icon({
  iconUrl: '/static/images/Burger.png',
  iconSize: [25, 25],
  iconAnchor: [5, 35],
  popupAnchor: [-3, -76],
});

var PizzaIcon = L.icon({
  iconUrl: '/static/images/pizza.png',
  iconSize: [25, 25],
  iconAnchor: [5, 33],
  popupAnchor: [-3, -76],
});
var SandwichIcon = L.icon({
  iconUrl: '/static/images/sandwich.gif',
  iconSize: [25, 25],
  iconAnchor: [8, 35],
  popupAnchor: [-3, -76],

});
var ChickenIcon = L.icon({
  iconUrl: '/static/images/chicken.png',
  iconSize: [25, 25],
  iconAnchor: [-5, 0],
  popupAnchor: [-3, -76],

});
var SnackIcon = L.icon({
  iconUrl: '/static/images/Snack.png',
  iconSize: [25, 25],
  iconAnchor: [5, 25],
  popupAnchor: [-3, -76],
});
var GlobalIcon = L.icon({
  iconUrl: '/static/images/Global.png',
  iconSize: [25, 25],
  iconAnchor: [5, 25],
  popupAnchor: [-3, -76],
});

var Burgers;

var BurgerMarkers = [];
var ChickenMarkers = [];
var SandwichMarkers = [];
var PizzaMarkers = [];


fetch('http://127.0.0.1:5000/api/v1.0/categories').then(response=>{
  return response.json()}).then(categories=>{
    console.log(categories)
  Burgers = categories.filter(category=>category.Category==='Burger')

  Burgers.forEach(city =>{
    city.location=[city.Latitude, city.Longitude]
    var marker = L.marker(city.location, {
      draggable: false,
      icon:BurgerIcon,
      title: city.State,
      opacity :2
    }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.State +" <h3>Sales " + city.Systemwide_Sales_Millions + "</h3>")
  
    // console.log(Burgers)

    BurgerMarkers.push(marker)
  
  
    var circle= L.circle(city.location, {
      color: "blue",
      fillColor: "blue",
      fillOpacity: 0.75,
      radius: 78902.46
    }).bindPopup("<h1>" + city.Company + "</h1> <hr> Total Burger Sales"+city.State+" <h3>Total Sales " + 78902.46  + "</h3>")

    BurgerMarkers.push(circle)
  
    
    var circle= L.circle(city.location, {
      color: "white ",
      fillColor: "white",
      fillOpacity: 0.75,
      radius: city.Systemwide_Sales_Millions
    }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.State+" <h3>Company Sales " + city.Systemwide_Sales_Millions + "</h3>")
  
    BurgerMarkers.push(circle)

    var Burgers = L.layerGroup(BurgerMarkers);
  
  })


  // var Burgers =

  // [{
  //   Company:"McDonalds",
  //   location: [41.8781, -87.6298],
  //   name: "Chicago",
  //   Category :"Burger",
  //   sales: 38524.05,
  //   Totalsales: 78902.46
  // },
  // {
  //   Company : "Wendys",
  //   location: [40.0992, -83.1141],
  //   name: "Dublin",
  //   Category :"Burger",
  //   sales: 9993.70,
  //   Totalsales: 78902.46
  // },
  // {
  //   Company : "Burger King",
  //   location: [25.7617, -80.1918 ],
  //   name: "Miami",
  //   Category :"Burger",
  //   sales: 9950.00,
  //   Totalsales:78902.46
  // },
  // ];

  var Chicken =[

  {
    Company : "Chick-fil-A",
    location: [33.7490, -84.3880],
    name: "Atlanta",
    Category :"Chicken",
    sales: 10300.00,
    Totalsales:25495.01
  },
  {
    Company : "KFC",
    location: [38.2527, -85.7585  ],
    name: "Louisville",
    Category :"Chicken",
    sales: 4400.00,
    Totalsales:25495.01
  },
  {
    Company : "Popeyes",
    location: [25.7617, -80.1918  ],
    name: "Miami",
    Category :"Chicken",
    sales: 3325.00,
    Totalsales:25495.01
  },
  ];

  var Sandwich = [
    {
    Company:"Subway",
    location: [41.2307, -73.0640  ],
    name: "Milford",
    Category :"Sandwich",
    sales: 10410.34,
    Totalsales: 26283.75
  },
  {
    Company:"Panera Bread ",
    location: [38.627, -90.1994  ],
    name: "St.Louis",
    Category :"Sandwich",
    sales: 5734.63,
    Totalsales: 26283.75
  },
  {
    Company:"Arby's ",
    location: [33.749, -84.388  ],
    name: "Atlanta",
    Category :"Sandwich",
    sales: 3886.90,
    Totalsales: 26283.75
  },
  ];


  var Pizza = [
    {
    Company:"Dominos",
    location: [42.3319, -83.4440],
    name: "Ann Arbor Charter Township",
    Category :"Pizza",
    sales: 6600.00,
    Totalsales: 20037.35
  },
  {
    Company:"Pizza Hut",
    location: [33.0198, -96.6989],
    name: "Plano",
    Category :"Pizza",
    sales: 5500.00,
    Totalsales: 20037.35
  },
  {
    Company:"Little Caesars",
    location: [42.3319, -83.7518],
    name: "Detroit",
    Category :"Pizza",
    sales: 3800.00,
    Totalsales: 20037.35
  },
  ];



  // var BurgerMarkers = [];
  // var ChickenMarkers = [];
  // var SandwichMarkers = [];
  // var PizzaMarkers = [];



  // ******************************************************
  // Burgers.forEach(city =>{
  //     var marker = L.marker(city.location, {
  //       draggable: false,
  //       icon:BurgerIcon,
  //       title: city.name,
  //       opacity :2
  //     }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name +" <h3>Sales " + city.sales + "</h3>")
    
  //     BurgerMarkers.push(marker)
    
    
  //     var circle= L.circle(city.location, {
  //       color: "blue",
  //       fillColor: "blue",
  //       fillOpacity: 0.75,
  //       radius: city.Totalsales
  //     }).bindPopup("<h1>" + city.Company + "</h1> <hr> Total Burger Sales"+" <h3>Total Sales " + city.Totalsales + "</h3>")

  //     BurgerMarkers.push(circle)
    
      
  //     var circle= L.circle(city.location, {
  //       color: "white ",
  //       fillColor: "white",
  //       fillOpacity: 0.75,
  //       radius: city.sales
  //     }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Company Sales " + city.sales + "</h3>")
    
  //     BurgerMarkers.push(circle)
    
  //   })
    
    // ******************************************************
    
    Chicken.forEach(city =>{
      var marker = L.marker(city.location, {
        draggable: false,
        icon:ChickenIcon,
        title: city.name,
        opacity :2
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Sales " + city.sales + "</h3>")
    
      ChickenMarkers.push(marker)
    
    
      var circle= L.circle(city.location, {
        color: "cyan",
        fillColor: "cyan",
        fillOpacity: 0.75,
        radius: city.Totalsales
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> Total Chicken Sales"+" <h3>Sales " + city.Totalsales + "</h3>")
    
      ChickenMarkers.push(circle)
      
      var circle= L.circle(city.location, {
        color: "black",
        fillColor: "black",
        fillOpacity: 0.75,
        radius: city.sales
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Sales " + city.sales + "</h3>")
    
      ChickenMarkers.push(circle)
    
      
    })
    
    // ******************************************************
    
    Sandwich.forEach(city =>{
      var marker = L.marker(city.location, {
        draggable: false,
        icon:SandwichIcon,
        title: city.name,
        opacity :2
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Sales " + city.sales + "</h3>")
    
      SandwichMarkers.push(marker)
    
    
      var circle= L.circle(city.location, {
        color: "green",
        fillColor: "green",
        fillOpacity: 0.75,
        radius: city.Totalsales
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> Total Sandwich Sales "+" <h3>Sales " + city.Totalsales + "</h3>")
    
      SandwichMarkers.push(circle)


      var circle= L.circle(city.location, {
        color: "yellow",
        fillColor: "yellow",
        fillOpacity: 0.75,
        radius: city.sales
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Sales " + city.sales + "</h3>")
    
      
      SandwichMarkers.push(circle)
    
      
    })
    
    // ******************************************************
    
    
    Pizza.forEach(city =>{
      var marker = L.marker(city.location, {
        draggable: false,
        icon:PizzaIcon,
        title: city.name,
        opacity :2
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Sales " + city.sales + "</h3>")
    
      PizzaMarkers.push(marker)
    
    
      var circle= L.circle(city.location, {
        color: "orange",
        fillColor: "orange",
        fillOpacity: 0.75,
        radius: city.Totalsales
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> Total Pizza Sales: "+" <h3>Sales " + city.Totalsales + "</h3>")

      PizzaMarkers.push(circle)
    
      
      var circle= L.circle(city.location, {
        color: "red",
        fillColor: "red",
        fillOpacity: 0.75,
        radius: city.sales
      }).bindPopup("<h1>" + city.Company + "</h1> <hr> HQ: "+city.name+" <h3>Sales " + city.sales + "</h3>")
    
      PizzaMarkers.push(circle)
      
    })
    
    // ******************************************************
    
    
    // Define variables for our base layers

    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
    
    var darkmap =  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.dark",
      accessToken: API_KEY
    })
    
    // Create two separate layer groups: one for cities and one for states
    var Pizza = L.layerGroup(PizzaMarkers);
    var Burgers = L.layerGroup(BurgerMarkers);
    var Sandwich = L.layerGroup(SandwichMarkers);
    var Chicken = L.layerGroup(ChickenMarkers)
    
    // Create a baseMaps object
    var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap
    };
    
    // Create an overlay object
    var overlayMaps = {
      "Burger": Burgers,
      "Chicken": Chicken,
      "Pizza": Pizza,
      "Sandwich": Sandwich,
      // "Global": Global,
      // "Snack": Snack
    };

    var myMap = L.map("map", {
      center: [33.963343, -84.220705],
      zoom: 5,
      layers: [Pizza, Burgers, Sandwich, Chicken, streetmap]
    })
    // Pass our map layers into our layer control
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: true
    }).addTo(myMap);

  })