

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

