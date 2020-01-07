export default class Map {
  constructor(region) {
    this.region = region;
    this.renderMap();
  }

  renderMap() {
    // Create map instance
    let map = am4core.create("mapdiv", am4maps.MapChart);
    // Set map definition
    map.geodata = am4geodata_worldHigh;
    // Set projection
    map.projection = new am4maps.projections.NaturalEarth1();
    
    

    // Create map polygon series
    let europeSeries = map.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    europeSeries.useGeodata = true;

    // ZOOM ON CLICK
    // polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
    //   map.zoomToMapObject(ev.target);
    // });

    // Configure series
    let europeTemplate = europeSeries.mapPolygons.template;
    europeTemplate.tooltipText = "{name}";
    europeTemplate.fill = am4core.color("#e1e2e9");

    let hoverState = europeTemplate.states.create("hover");
    hoverState.properties.fill = am4core.color("#bebebe");

    // only include europe:
    europeSeries.include = [
      "PT",
      "ES",
      "FR",
      "DE",
      "BE",
      "NL",
      "IT",
      "AT",
      "GB",
      "IE",
      "CH",
      "LU",
      "AD", 
      "AL",
      "BA",
      "BG",
      "BY",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "GR",
      "HR",
      "HU",
      "IS",
      "LI",
      "LT",
      "LV",
      "MC",
      "MD",
      "ME",
      "MK",
      "MT",
      "NO",
      "PL",
      "RO",
      "RS",
      // "RU", //Russia
      "SE",
      "SI",
      "SK",
      "SM",
      "TR",
      "UA",
      "VA",
      "XK"
    ];

    // europeTemplate.propertyFields.fill = "fill";

    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#e1e2e9");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 1;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    imageSeries.data = [
      {
        latitude: 43.9423599,
        longitude: 12.457777,
        title: "San Marino"
      },
      {
        latitude: 41.902916,
        longitude: 12.4533892,
        title: "Vatican City State"
      },
      {
        latitude: 42.5462456,
        longitude: 1.601554,
        title: "Andorra"
      },
      {
        latitude: 47.1660004,
        longitude: 9.5553732,
        title: "Liechtenstein"
      },
      {
        latitude: 43.7502975,
        longitude: 7.4128408,
        title: "Monaco"
      },
      {
        latitude: 35.9374962,
        longitude: 14.3754158,
        title: "Malta"
      }
    ];

  }
}


// WORLD MAP:
// let map = am4core.create("mapdiv", am4maps.MapChart);
// // Set map definition
// map.geodata = am4geodata_worldHigh;
// // Set projection
// map.projection = new am4maps.projections.NaturalEarth1();

// // Create map polygon series
// let worldSeries = map.series.push(new am4maps.MapPolygonSeries());

// // Make map load polygon (like country names) data from GeoJSON
// worldSeries.useGeodata = true;

// // Configure series
// let worldTemplate = worldSeries.mapPolygons.template;
// worldTemplate.tooltipText = "{name}";
// worldTemplate.fill = am4core.color("#e1e2e9");

// let hoverState = worldTemplate.states.create("hover");
// hoverState.properties.fill = am4core.color("#bebebe");

