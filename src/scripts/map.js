export default class Map {
  constructor(region) {
    this.region = region;
    this.renderMap();
  }

  renderMap() {
    // Create map instance
    let map = am4core.create("mapdiv", am4maps.MapChart);
    
    // Set map definition
    map.geodata = am4geodata_continentsRussiaEuropeLow;
    
    // Set projection
    map.projection = new am4maps.projections.Mercator();
    
    // Create map polygon series
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

  }
}



