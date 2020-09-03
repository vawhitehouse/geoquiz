import Map from "./map";

export default class Game {
  constructor(region) {
    console.log(`starting game, region: ${region}`)
    this.region = region;
    this.map = new Map(this.region);
    this.countries = this.countriesToInclude(this.region);
    this.randomize(this.countries);
    this.startGame();
  }


  startGame() {
    this.playRound(this.countries);

  }

  // determine which countries to include
  countriesToInclude(region) {
    switch (region) {
      case "africa":
        return ["DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CD", "CG", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "ZM", "ZW"];
      case "asia":
        return ["AF", "AM", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "GE", "IN", "ID", "IR", "IQ", "IL", "JP", "JO", "KZ", "KW", "KG", "LA", "LB", "MY", "MV", "MN", "MM", "NP", "KP", "KR", "OM", "PK", "PS", "PH", "QA", "RU",  "SA", "SG", "LK", "SY", "TW", "TJ", "TH", "TL", "TR", "TM", "AE", "UZ", "VN", "YE"];
      case "europe":
        return ["PT", "ES", "FR", "DE", "BE", "NL", "IT", "AT", "GB", "IE", "CH", "LU", "AD", "AL", "BA", "BG", "BY", "CY", "CZ", "DK", "EE", "FI", "GR", "HR", "HU", "IS", "LI", "LT", "LV", "MC", "MD", "ME", "MK", "MT", "NO", "PL", "RO", "RS", "RU", "SE", "SI", "SK", "SM", "TR", "UA", "VA", "XK"];
      case "northAmerica":
        return ["AG", "BS", "BB", "BZ", "CA", "CR", "CU", "DM", "DO", "SV", "GD", "GT", "HT", "HN", "JM", "MX", "NI", "PA", "KN", "LC", "VC", "TT"
          // "US"
        ];
      case "southAmerica":
        return ["AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PU", "PE", "SR", "UY", "VE"];
      case "oceania":
        return [
          {
           "id": "AU",
           "name": "Australia" 
          },
          {
            "id": "FJ",
            "name": "Fiji"
          }
          // "AU",
          // "FJ",
          // "KI",
          // "MH",
          // "FM",
          // "NR",
          // "NZ",
          // "PW",
          // "PG",
          // "WS",
          // "SB",
          // "TO",
          // "TV",
          // "VU"
        ];
      default:
        return null;
    }
  }

  // randomize country order
  randomize(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  playRound(countries) {
    // this.map.mapTemplate.tooltipText = "?"
    // this.map.mapTemplate.tooltipText = "{name}"
    
    let currentCountry = this.countries.shift();
    console.log(currentCountry);
    debugger
    this.map.mapTemplate.tooltipText = `Click on ${currentCountry}`;

    
    // this.map.mapSeries.mapPolygons.template.events.on("hit", function(e) {
      

    // })


    // this.map.mapTemplate.hideTooltip();
    // this.mapTemplate.events.once("hit", e => {

    //   // let name = document.getElementById("currentdiv");
    //   // let data = e.target.dataItem.dataContext;
    //   // let circleTitle = e.target.data.title;
    //   // console.log(e.target.data.title);
    //   // if (data){
    //   //   name.innerHTML = "<h4>" + data.name + "</h4>";
    //   // } 
    //   // if (circleTitle) {
    //   //   name.innerHTML = "<h4>" + circleTitle + "</h4>";
    //   // }
    // });
    
    
  }


}