export default class Map {
  constructor(region = null) {
    this.region = region;
    this.map = am4core.create("mapdiv", am4maps.MapChart); // Create map instance
    this.mapSeries = this.map.series.push(new am4maps.MapPolygonSeries()); // Create map polygon series
    this.mapTemplate = this.mapSeries.mapPolygons.template; // Configure series
    this.hoverState = this.mapTemplate.states.create("hover");
    this.circleSeries = this.map.series.push(new am4maps.MapImageSeries());
    this.circleSeriesTemplate = this.circleSeries.mapImages.template;
    this.circle = this.circleSeriesTemplate.createChild(am4core.Circle);
    this.renderMap(); 
  }

  renderMap() {
    // Set map definition
    this.map.geodata = am4geodata_worldHigh;
    // Set projection
    this.map.projection = new am4maps.projections.NaturalEarth1();
    // Make map load polygon (like country names) data from GeoJSON
    this.mapSeries.useGeodata = true;
    if (this.region === 'oceania'){
      // set this so oceania islands aren't split
      this.map.deltaLongitude = -160;
    }
        
    // this.mapTemplate.hideTooltip();
    // this.mapTemplate.tooltipText = "{name}";
    this.mapTemplate.fill = am4core.color("#e1e2e9");

    this.hoverState.properties.fill = am4core.color("#bebebe");    

    
    // create circles for small countries
    this.circle.radius = 4;
    this.circle.fill = am4core.color("#e1e2e9");
    this.circle.stroke = am4core.color("#FFFFFF");
    this.circle.strokeWidth = 1;
    this.circle.nonScaling = true;
    this.circle.tooltipText = "{title}";
    this.circleSeriesTemplate.propertyFields.latitude = "latitude";
    this.circleSeriesTemplate.propertyFields.longitude = "longitude";
    this.circleSeries.data = this.smallCountries(this.region);

    // zoom & center map based on region
    this.map.homeZoomLevel = this.setZoom(this.region);
    this.map.homeGeoPoint = this.setGeoPoint(this.region);

    am4core.Tooltip.fontFamily = "Raleway";
    am4core.Tooltip.fontSize = "200px";

  }

  setZoom(region){
    switch (region) {
      case "africa":
        return 2.5;
      case "asia":
        return 2.6;
      case "europe":
        return 6;
      case "northAmerica":
        return 3.1;
      case "southAmerica":
        return 2.65;
      case "oceania":
        return 3;
      default:
        return null;
    }
  }
  
  setGeoPoint(region) {
    // determine geo point  //  latitude -> up/down  //  longitude -> left/right
    switch (region) {
      case "africa":
        return {
          latitude: 2,
          longitude: 18
        };
      case "asia":
        return {
          latitude: 24,
          longitude: 96
        };
      case "europe":
        return {
          latitude: 50,
          longitude: 12
        };
      case "northAmerica":
        return {
          latitude: 36,
          longitude: -110
        };
      case "southAmerica":
        return {
          latitude: -21,
          longitude: -65
        };
      case "oceania":
        return {
          latitude: -20,
          longitude: 145
        };
      default:
        return null;
    };
  }

  smallCountries(region) {
    switch (region) {
      case "africa":
        return [
          {
            latitude: -4.679574,
            longitude: 55.4919777,
            title: "Seychelles"
          },
          {
            latitude: -20.3484039,
            longitude: 57.5521507,
            title: "Mauritius"
          },
          {
            latitude: -11.875001,
            longitude: 43.8722191,
            title: "Comoros"
          },
          {
            latitude: 0.18636,
            longitude: 6.613081,
            title: "Sao Tome and Principe"
          },
          {
            latitude: 16.0020828,
            longitude: -24.0131969,
            title: "Cape Verde"
          }
        ];
      case "asia":
        return [
          {
            latitude: 3.2027781,
            longitude: 73.2206802,
            title: "Maldives"
          },
          {
            latitude: 25.9304142,
            longitude: 50.6377716,
            title: "Bahrain"
          },
          {
            latitude: 1.352083,
            longitude: 103.8198395,
            title: "Singapore"
          },
          {
            latitude: 4.5352769,
            longitude: 114.7276688,
            title: "Brunei"
          },
          {
            latitude: -8.874217,
            longitude: 125.7275391,
            title: "East Timor"
          }
        ];
      case "europe":
        return [
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
      case "northAmerica":
        return [
          {
            latitude: 17.0608158,
            longitude: -61.7964287,
            title: "Antigua and Barbuda"
          },
          {
            latitude: 13.1938868,
            longitude: -59.5431976,
            title: "Barbados"
          },
          {
            latitude: 12.2627764,
            longitude: -61.6041718,
            title: "Grenada"
          },
          {
            latitude: 17.3578224,
            longitude: -62.7829971,
            title: "Saint Kitts and Nevis"
          },
          {
            latitude: 13.9094439,
            longitude: -60.9788933,
            title: "Saint Lucia"
          },
          {
            latitude: 12.9843054,
            longitude: -61.2872276,
            title: "Saint Vincent and the Grenadines"
          }
        ];
      case "oceania":
        return [
          {
            latitude: 7.131474,
            longitude: 171.1844788,
            title: "Marshall Islands"
          },
          {
            latitude: 7.4255538,
            longitude: 150.5508118,
            title: "Micronesia"
          },
          {
            latitude: 7.5149798,
            longitude: 134.5825195,
            title: "Palau"
          },
          {
            latitude: -0.522778,
            longitude: 166.9315033,
            title: "Nauru"
          },
          {
            latitude: -3.3704171,
            longitude: -168.7340393,
            title: "Kiribati"
          },
          {
            latitude: -9.64571,
            longitude: 160.156189,
            title: "Solomon Islands"
          },
          {
            latitude: -7.1095352,
            longitude: 177.6493225,
            title: "Tuvalu"
          },
          {
            latitude: -15.3767061,
            longitude: 166.9591522,
            title: "Vanuatu"
          },
          {
            latitude: -21.1789856,
            longitude: -175.1982422,
            title: "Tonga"
          }
        ];
      default:
        return null;
    }
  }




}


