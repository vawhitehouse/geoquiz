/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_map_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/map.css */ "./src/styles/map.css");
/* harmony import */ var _styles_map_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_map_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/map */ "./src/scripts/map.js");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");





window.addEventListener("DOMContentLoaded", function () {
  function displayMap(region) {
    new _scripts_map__WEBPACK_IMPORTED_MODULE_3__["default"](region);
  }

  displayMap();

  function newGame(region) {
    new _scripts_game__WEBPACK_IMPORTED_MODULE_4__["default"](region);
  }

  document.getElementById("europe").addEventListener("click", function () {
    return newGame("europe");
  });
  document.getElementById("africa").addEventListener("click", function () {
    return newGame("africa");
  });
  document.getElementById("asia").addEventListener("click", function () {
    return newGame("asia");
  });
  document.getElementById("north-america").addEventListener("click", function () {
    return newGame("northAmerica");
  });
  document.getElementById("south-america").addEventListener("click", function () {
    return newGame("southAmerica");
  });
  document.getElementById("oceania").addEventListener("click", function () {
    return newGame("oceania");
  });
  document.getElementById("world").addEventListener("click", function () {
    return newGame();
  });
});

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/scripts/map.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(region) {
    _classCallCheck(this, Game);

    this.region = region;
    this.map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](this.region);
    this.countries = this.countriesToInclude(this.region);
    this.randomize(this.countries);
    this.startGame();
  }

  _createClass(Game, [{
    key: "startGame",
    value: function startGame() {
      this.playRound(this.countries);
    } // determine which countries to include

  }, {
    key: "countriesToInclude",
    value: function countriesToInclude(region) {
      switch (region) {
        case "africa":
          return ["DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CD", "CG", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "ZM", "ZW"];

        case "asia":
          return ["AF", "AM", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "GE", "IN", "ID", "IR", "IQ", "IL", "JP", "JO", "KZ", "KW", "KG", "LA", "LB", "MY", "MV", "MN", "MM", "NP", "KP", "KR", "OM", "PK", "PS", "PH", "QA", "RU", "SA", "SG", "LK", "SY", "TW", "TJ", "TH", "TL", "TR", "TM", "AE", "UZ", "VN", "YE"];

        case "europe":
          return ["PT", "ES", "FR", "DE", "BE", "NL", "IT", "AT", "GB", "IE", "CH", "LU", "AD", "AL", "BA", "BG", "BY", "CY", "CZ", "DK", "EE", "FI", "GR", "HR", "HU", "IS", "LI", "LT", "LV", "MC", "MD", "ME", "MK", "MT", "NO", "PL", "RO", "RS", "RU", "SE", "SI", "SK", "SM", "TR", "UA", "VA", "XK"];

        case "northAmerica":
          return ["AG", "BS", "BB", "BZ", "CA", "CR", "CU", "DM", "DO", "SV", "GD", "GT", "HT", "HN", "JM", "MX", "NI", "PA", "KN", "LC", "VC", "TT" // "US"
          ];

        case "southAmerica":
          return ["AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PU", "PE", "SR", "UY", "VE"];

        case "oceania":
          return [{
            "id": "AU",
            "name": "Australia"
          }, {
            "id": "FJ",
            "name": "Fiji"
          } // "AU",
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
    } // randomize country order

  }, {
    key: "randomize",
    value: function randomize(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref = [arr[j], arr[i]];
        arr[i] = _ref[0];
        arr[j] = _ref[1];
      }
    }
  }, {
    key: "playRound",
    value: function playRound(countries) {
      this.map.mapTemplate.tooltipText = "{name}"; // let currentCountry = countries.shift();
      // console.log(currentCountry.name);
      // this.map.mapTemplate.tooltipText = `Click on ${currentCountry.name}`;
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
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map = /*#__PURE__*/function () {
  function Map() {
    var region = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Map);

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

  _createClass(Map, [{
    key: "renderMap",
    value: function renderMap() {
      // Set map definition
      this.map.geodata = am4geodata_worldHigh; // Set projection

      this.map.projection = new am4maps.projections.NaturalEarth1(); // Make map load polygon (like country names) data from GeoJSON

      this.mapSeries.useGeodata = true;

      if (this.region === 'oceania') {
        // set this so oceania islands aren't split
        this.map.deltaLongitude = -160;
      } // this.mapTemplate.hideTooltip();
      // this.mapTemplate.tooltipText = "{name}";


      this.mapTemplate.fill = am4core.color("#e1e2e9");
      this.hoverState.properties.fill = am4core.color("#bebebe"); // create circles for small countries

      this.circle.radius = 4;
      this.circle.fill = am4core.color("#e1e2e9");
      this.circle.stroke = am4core.color("#FFFFFF");
      this.circle.strokeWidth = 1;
      this.circle.nonScaling = true;
      this.circle.tooltipText = "{title}";
      this.circleSeriesTemplate.propertyFields.latitude = "latitude";
      this.circleSeriesTemplate.propertyFields.longitude = "longitude";
      this.circleSeries.data = this.smallCountries(this.region); // zoom & center map based on region

      this.map.homeZoomLevel = this.setZoom(this.region);
      this.map.homeGeoPoint = this.setGeoPoint(this.region);
      am4core.Tooltip.fontFamily = "Raleway";
      am4core.Tooltip.fontSize = "200px";
    }
  }, {
    key: "setZoom",
    value: function setZoom(region) {
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
  }, {
    key: "setGeoPoint",
    value: function setGeoPoint(region) {
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
      }

      ;
    }
  }, {
    key: "smallCountries",
    value: function smallCountries(region) {
      switch (region) {
        case "africa":
          return [{
            latitude: -4.679574,
            longitude: 55.4919777,
            title: "Seychelles"
          }, {
            latitude: -20.3484039,
            longitude: 57.5521507,
            title: "Mauritius"
          }, {
            latitude: -11.875001,
            longitude: 43.8722191,
            title: "Comoros"
          }, {
            latitude: 0.18636,
            longitude: 6.613081,
            title: "Sao Tome and Principe"
          }, {
            latitude: 16.0020828,
            longitude: -24.0131969,
            title: "Cape Verde"
          }];

        case "asia":
          return [{
            latitude: 3.2027781,
            longitude: 73.2206802,
            title: "Maldives"
          }, {
            latitude: 25.9304142,
            longitude: 50.6377716,
            title: "Bahrain"
          }, {
            latitude: 1.352083,
            longitude: 103.8198395,
            title: "Singapore"
          }, {
            latitude: 4.5352769,
            longitude: 114.7276688,
            title: "Brunei"
          }, {
            latitude: -8.874217,
            longitude: 125.7275391,
            title: "East Timor"
          }];

        case "europe":
          return [{
            latitude: 43.9423599,
            longitude: 12.457777,
            title: "San Marino"
          }, {
            latitude: 41.902916,
            longitude: 12.4533892,
            title: "Vatican City State"
          }, {
            latitude: 42.5462456,
            longitude: 1.601554,
            title: "Andorra"
          }, {
            latitude: 47.1660004,
            longitude: 9.5553732,
            title: "Liechtenstein"
          }, {
            latitude: 43.7502975,
            longitude: 7.4128408,
            title: "Monaco"
          }, {
            latitude: 35.9374962,
            longitude: 14.3754158,
            title: "Malta"
          }];

        case "northAmerica":
          return [{
            latitude: 17.0608158,
            longitude: -61.7964287,
            title: "Antigua and Barbuda"
          }, {
            latitude: 13.1938868,
            longitude: -59.5431976,
            title: "Barbados"
          }, {
            latitude: 12.2627764,
            longitude: -61.6041718,
            title: "Grenada"
          }, {
            latitude: 17.3578224,
            longitude: -62.7829971,
            title: "Saint Kitts and Nevis"
          }, {
            latitude: 13.9094439,
            longitude: -60.9788933,
            title: "Saint Lucia"
          }, {
            latitude: 12.9843054,
            longitude: -61.2872276,
            title: "Saint Vincent and the Grenadines"
          }];

        case "oceania":
          return [{
            latitude: 7.131474,
            longitude: 171.1844788,
            title: "Marshall Islands"
          }, {
            latitude: 7.4255538,
            longitude: 150.5508118,
            title: "Micronesia"
          }, {
            latitude: 7.5149798,
            longitude: 134.5825195,
            title: "Palau"
          }, {
            latitude: -0.522778,
            longitude: 166.9315033,
            title: "Nauru"
          }, {
            latitude: -3.3704171,
            longitude: -168.7340393,
            title: "Kiribati"
          }, {
            latitude: -9.64571,
            longitude: 160.156189,
            title: "Solomon Islands"
          }, {
            latitude: -7.1095352,
            longitude: 177.6493225,
            title: "Tuvalu"
          }, {
            latitude: -15.3767061,
            longitude: 166.9591522,
            title: "Vanuatu"
          }, {
            latitude: -21.1789856,
            longitude: -175.1982422,
            title: "Tonga"
          }];

        default:
          return null;
      }
    }
  }]);

  return Map;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: Missing binding /Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/node-sass/vendor/darwin-x64-83/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 14.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 10.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1221:10)\n    at Module.load (internal/modules/cjs/loader.js:1050:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:938:14)\n    at Module.require (internal/modules/cjs/loader.js:1090:19)\n    at require (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at getDefaultSassImplementation (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/sass-loader/dist/getDefaultSassImplementation.js:24:10)\n    at getSassImplementation (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/sass-loader/dist/getSassImplementation.js:19:72)\n    at Object.loader (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/sass-loader/dist/index.js:40:61)\n    at /Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at iterateNormalLoaders (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at context.callback (/Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /Users/valeriewhitehouse/Documents/appacademy_student/javascriptProj/geoQuiz/node_modules/postcss-loader/src/index.js:197:9");

/***/ }),

/***/ "./src/styles/map.css":
/*!****************************!*\
  !*** ./src/styles/map.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFwLmNzcz9iNzNmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzJlMTciXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlNYXAiLCJyZWdpb24iLCJNYXAiLCJuZXdHYW1lIiwiR2FtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJjb3VudHJpZXMiLCJjb3VudHJpZXNUb0luY2x1ZGUiLCJyYW5kb21pemUiLCJzdGFydEdhbWUiLCJwbGF5Um91bmQiLCJhcnIiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1hcFRlbXBsYXRlIiwidG9vbHRpcFRleHQiLCJhbTRjb3JlIiwiY3JlYXRlIiwiYW00bWFwcyIsIk1hcENoYXJ0IiwibWFwU2VyaWVzIiwic2VyaWVzIiwicHVzaCIsIk1hcFBvbHlnb25TZXJpZXMiLCJtYXBQb2x5Z29ucyIsInRlbXBsYXRlIiwiaG92ZXJTdGF0ZSIsInN0YXRlcyIsImNpcmNsZVNlcmllcyIsIk1hcEltYWdlU2VyaWVzIiwiY2lyY2xlU2VyaWVzVGVtcGxhdGUiLCJtYXBJbWFnZXMiLCJjaXJjbGUiLCJjcmVhdGVDaGlsZCIsIkNpcmNsZSIsInJlbmRlck1hcCIsImdlb2RhdGEiLCJhbTRnZW9kYXRhX3dvcmxkSGlnaCIsInByb2plY3Rpb24iLCJwcm9qZWN0aW9ucyIsIk5hdHVyYWxFYXJ0aDEiLCJ1c2VHZW9kYXRhIiwiZGVsdGFMb25naXR1ZGUiLCJmaWxsIiwiY29sb3IiLCJwcm9wZXJ0aWVzIiwicmFkaXVzIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJub25TY2FsaW5nIiwicHJvcGVydHlGaWVsZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRhdGEiLCJzbWFsbENvdW50cmllcyIsImhvbWVab29tTGV2ZWwiLCJzZXRab29tIiwiaG9tZUdlb1BvaW50Iiwic2V0R2VvUG9pbnQiLCJUb29sdGlwIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELFdBQVNDLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQzFCLFFBQUlDLG9EQUFKLENBQVFELE1BQVI7QUFDRDs7QUFFREQsWUFBVTs7QUFFVixXQUFTRyxPQUFULENB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QUFFLFNBRFo7QUFFRUMscUJBQVMsRUFBRSxXQUZiO0FBR0VVLGlCQUFLLEVBQUU7QUFIVCxXQVhLLEVBZ0JMO0FBQ0VYLG9CQUFRLEVBQUUsQ0FBQyxRQURiO0FBRUVDLHFCQUFTLEVBQUUsV0FGYjtBQUdFVSxpQkFBSyxFQUFFO0FBSFQsV0FoQkssRUFxQkw7QUFDRVgsb0JBQVEsRUFBRSxDQUFDLFNBRGI7QUFFRUMscUJBQVMsRUFBRSxDQUFDLFdBRmQ7QUFHRVUsaUJBQUssRUFBRTtBQUhULFdBckJLLEVBMEJMO0FBQ0VYLG9CQUFRLEVBQUUsQ0FBQyxPQURiO0FBRUVDLHFCQUFTLEVBQUUsVUFGYjtBQUdFVSxpQkFBSyxFQUFFO0FBSFQsV0ExQkssRUErQkw7QUFDRVgsb0JBQVEsRUFBRSxDQUFDLFNBRGI7QUFFRUMscUJBQVMsRUFBRSxXQUZiO0FBR0VVLGlCQUFLLEVBQUU7QUFIVCxXQS9CSyxFQW9DTDtBQUNFWCxvQkFBUSxFQUFFLENBQUMsVUFEYjtBQUVFQyxxQkFBUyxFQUFFLFdBRmI7QUFHRVUsaUJBQUssRUFBRTtBQUhULFdBcENLLEVBeUNMO0FBQ0VYLG9CQUFRLEVBQUUsQ0FBQyxVQURiO0FBRUVDLHFCQUFTLEVBQUUsQ0FBQyxXQUZkO0FBR0VVLGlCQUFLLEVBQUU7QUFIVCxXQXpDSyxDQUFQOztBQStDRjtBQUNFLGlCQUFPLElBQVA7QUE1S0o7QUE4S0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UkgsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFwLmNzcyc7XG5pbXBvcnQgTWFwIGZyb20gJy4vc2NyaXB0cy9tYXAnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGZ1bmN0aW9uIGRpc3BsYXlNYXAocmVnaW9uKSB7XG4gICAgbmV3IE1hcChyZWdpb24pO1xuICB9XG5cbiAgZGlzcGxheU1hcCgpO1xuXG4gIGZ1bmN0aW9uIG5ld0dhbWUocmVnaW9uKSB7XG4gICAgbmV3IEdhbWUocmVnaW9uKTtcbiAgfVxuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiZXVyb3BlXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdHYW1lKFwiZXVyb3BlXCIpKTtcblxuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiYWZyaWNhXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdHYW1lKFwiYWZyaWNhXCIpKTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhc2lhXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdHYW1lKFwiYXNpYVwiKSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibm9ydGgtYW1lcmljYVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmV3R2FtZShcIm5vcnRoQW1lcmljYVwiKSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwic291dGgtYW1lcmljYVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmV3R2FtZShcInNvdXRoQW1lcmljYVwiKSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwib2NlYW5pYVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmV3R2FtZShcIm9jZWFuaWFcIikpO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIndvcmxkXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdHYW1lKCkpO1xuXG5cbiAgXG59KTsiLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocmVnaW9uKSB7XG4gICAgdGhpcy5yZWdpb24gPSByZWdpb247XG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKHRoaXMucmVnaW9uKTtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuY291bnRyaWVzVG9JbmNsdWRlKHRoaXMucmVnaW9uKTtcbiAgICB0aGlzLnJhbmRvbWl6ZSh0aGlzLmNvdW50cmllcyk7XG4gICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgfVxuXG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMucGxheVJvdW5kKHRoaXMuY291bnRyaWVzKTtcblxuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoaWNoIGNvdW50cmllcyB0byBpbmNsdWRlXG4gIGNvdW50cmllc1RvSW5jbHVkZShyZWdpb24pIHtcbiAgICBzd2l0Y2ggKHJlZ2lvbikge1xuICAgICAgY2FzZSBcImFmcmljYVwiOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFwiRFpcIixcbiAgICAgICAgICBcIkFPXCIsXG4gICAgICAgICAgXCJCSlwiLFxuICAgICAgICAgIFwiQldcIixcbiAgICAgICAgICBcIkJGXCIsXG4gICAgICAgICAgXCJCSVwiLFxuICAgICAgICAgIFwiQ1ZcIixcbiAgICAgICAgICBcIkNNXCIsXG4gICAgICAgICAgXCJDRlwiLFxuICAgICAgICAgIFwiVERcIixcbiAgICAgICAgICBcIktNXCIsXG4gICAgICAgICAgXCJDRFwiLFxuICAgICAgICAgIFwiQ0dcIixcbiAgICAgICAgICBcIkNJXCIsXG4gICAgICAgICAgXCJESlwiLFxuICAgICAgICAgIFwiRUdcIixcbiAgICAgICAgICBcIkdRXCIsXG4gICAgICAgICAgXCJFUlwiLFxuICAgICAgICAgIFwiU1pcIixcbiAgICAgICAgICBcIkVUXCIsXG4gICAgICAgICAgXCJHQVwiLFxuICAgICAgICAgIFwiR01cIixcbiAgICAgICAgICBcIkdIXCIsXG4gICAgICAgICAgXCJHTlwiLFxuICAgICAgICAgIFwiR1dcIixcbiAgICAgICAgICBcIktFXCIsXG4gICAgICAgICAgXCJMU1wiLFxuICAgICAgICAgIFwiTFJcIixcbiAgICAgICAgICBcIkxZXCIsXG4gICAgICAgICAgXCJNR1wiLFxuICAgICAgICAgIFwiTVdcIixcbiAgICAgICAgICBcIk1MXCIsXG4gICAgICAgICAgXCJNUlwiLFxuICAgICAgICAgIFwiTVVcIixcbiAgICAgICAgICBcIk1BXCIsXG4gICAgICAgICAgXCJNWlwiLFxuICAgICAgICAgIFwiTkFcIixcbiAgICAgICAgICBcIk5FXCIsXG4gICAgICAgICAgXCJOR1wiLFxuICAgICAgICAgIFwiUldcIixcbiAgICAgICAgICBcIlNUXCIsXG4gICAgICAgICAgXCJTTlwiLFxuICAgICAgICAgIFwiU0NcIixcbiAgICAgICAgICBcIlNMXCIsXG4gICAgICAgICAgXCJTT1wiLFxuICAgICAgICAgIFwiWkFcIixcbiAgICAgICAgICBcIlNTXCIsXG4gICAgICAgICAgXCJTRFwiLFxuICAgICAgICAgIFwiVFpcIixcbiAgICAgICAgICBcIlRHXCIsXG4gICAgICAgICAgXCJUTlwiLFxuICAgICAgICAgIFwiVUdcIixcbiAgICAgICAgICBcIlpNXCIsXG4gICAgICAgICAgXCJaV1wiXG4gICAgICAgIF07XG4gICAgICBjYXNlIFwiYXNpYVwiOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFwiQUZcIixcbiAgICAgICAgICBcIkFNXCIsXG4gICAgICAgICAgXCJBWlwiLFxuICAgICAgICAgIFwiQkhcIixcbiAgICAgICAgICBcIkJEXCIsXG4gICAgICAgICAgXCJCVFwiLFxuICAgICAgICAgIFwiQk5cIixcbiAgICAgICAgICBcIktIXCIsXG4gICAgICAgICAgXCJDTlwiLFxuICAgICAgICAgIFwiR0VcIixcbiAgICAgICAgICBcIklOXCIsXG4gICAgICAgICAgXCJJRFwiLFxuICAgICAgICAgIFwiSVJcIixcbiAgICAgICAgICBcIklRXCIsXG4gICAgICAgICAgXCJJTFwiLFxuICAgICAgICAgIFwiSlBcIixcbiAgICAgICAgICBcIkpPXCIsXG4gICAgICAgICAgXCJLWlwiLFxuICAgICAgICAgIFwiS1dcIixcbiAgICAgICAgICBcIktHXCIsXG4gICAgICAgICAgXCJMQVwiLFxuICAgICAgICAgIFwiTEJcIixcbiAgICAgICAgICBcIk1ZXCIsXG4gICAgICAgICAgXCJNVlwiLFxuICAgICAgICAgIFwiTU5cIixcbiAgICAgICAgICBcIk1NXCIsXG4gICAgICAgICAgXCJOUFwiLFxuICAgICAgICAgIFwiS1BcIixcbiAgICAgICAgICBcIktSXCIsXG4gICAgICAgICAgXCJPTVwiLFxuICAgICAgICAgIFwiUEtcIixcbiAgICAgICAgICBcIlBTXCIsXG4gICAgICAgICAgXCJQSFwiLFxuICAgICAgICAgIFwiUUFcIixcbiAgICAgICAgICBcIlJVXCIsIFxuICAgICAgICAgIFwiU0FcIixcbiAgICAgICAgICBcIlNHXCIsXG4gICAgICAgICAgXCJMS1wiLFxuICAgICAgICAgIFwiU1lcIixcbiAgICAgICAgICBcIlRXXCIsXG4gICAgICAgICAgXCJUSlwiLFxuICAgICAgICAgIFwiVEhcIixcbiAgICAgICAgICBcIlRMXCIsXG4gICAgICAgICAgXCJUUlwiLFxuICAgICAgICAgIFwiVE1cIixcbiAgICAgICAgICBcIkFFXCIsXG4gICAgICAgICAgXCJVWlwiLFxuICAgICAgICAgIFwiVk5cIixcbiAgICAgICAgICBcIllFXCJcbiAgICAgICAgXTtcbiAgICAgIGNhc2UgXCJldXJvcGVcIjpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBcIlBUXCIsXG4gICAgICAgICAgXCJFU1wiLFxuICAgICAgICAgIFwiRlJcIixcbiAgICAgICAgICBcIkRFXCIsXG4gICAgICAgICAgXCJCRVwiLFxuICAgICAgICAgIFwiTkxcIixcbiAgICAgICAgICBcIklUXCIsXG4gICAgICAgICAgXCJBVFwiLFxuICAgICAgICAgIFwiR0JcIixcbiAgICAgICAgICBcIklFXCIsXG4gICAgICAgICAgXCJDSFwiLFxuICAgICAgICAgIFwiTFVcIixcbiAgICAgICAgICBcIkFEXCIsXG4gICAgICAgICAgXCJBTFwiLFxuICAgICAgICAgIFwiQkFcIixcbiAgICAgICAgICBcIkJHXCIsXG4gICAgICAgICAgXCJCWVwiLFxuICAgICAgICAgIFwiQ1lcIixcbiAgICAgICAgICBcIkNaXCIsXG4gICAgICAgICAgXCJES1wiLFxuICAgICAgICAgIFwiRUVcIixcbiAgICAgICAgICBcIkZJXCIsXG4gICAgICAgICAgXCJHUlwiLFxuICAgICAgICAgIFwiSFJcIixcbiAgICAgICAgICBcIkhVXCIsXG4gICAgICAgICAgXCJJU1wiLFxuICAgICAgICAgIFwiTElcIixcbiAgICAgICAgICBcIkxUXCIsXG4gICAgICAgICAgXCJMVlwiLFxuICAgICAgICAgIFwiTUNcIixcbiAgICAgICAgICBcIk1EXCIsXG4gICAgICAgICAgXCJNRVwiLFxuICAgICAgICAgIFwiTUtcIixcbiAgICAgICAgICBcIk1UXCIsXG4gICAgICAgICAgXCJOT1wiLFxuICAgICAgICAgIFwiUExcIixcbiAgICAgICAgICBcIlJPXCIsXG4gICAgICAgICAgXCJSU1wiLFxuICAgICAgICAgIFwiUlVcIixcbiAgICAgICAgICBcIlNFXCIsXG4gICAgICAgICAgXCJTSVwiLFxuICAgICAgICAgIFwiU0tcIixcbiAgICAgICAgICBcIlNNXCIsXG4gICAgICAgICAgXCJUUlwiLFxuICAgICAgICAgIFwiVUFcIixcbiAgICAgICAgICBcIlZBXCIsXG4gICAgICAgICAgXCJYS1wiXG4gICAgICAgIF07XG4gICAgICBjYXNlIFwibm9ydGhBbWVyaWNhXCI6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgXCJBR1wiLFxuICAgICAgICAgIFwiQlNcIixcbiAgICAgICAgICBcIkJCXCIsXG4gICAgICAgICAgXCJCWlwiLFxuICAgICAgICAgIFwiQ0FcIixcbiAgICAgICAgICBcIkNSXCIsXG4gICAgICAgICAgXCJDVVwiLFxuICAgICAgICAgIFwiRE1cIixcbiAgICAgICAgICBcIkRPXCIsXG4gICAgICAgICAgXCJTVlwiLFxuICAgICAgICAgIFwiR0RcIixcbiAgICAgICAgICBcIkdUXCIsXG4gICAgICAgICAgXCJIVFwiLFxuICAgICAgICAgIFwiSE5cIixcbiAgICAgICAgICBcIkpNXCIsXG4gICAgICAgICAgXCJNWFwiLFxuICAgICAgICAgIFwiTklcIixcbiAgICAgICAgICBcIlBBXCIsXG4gICAgICAgICAgXCJLTlwiLFxuICAgICAgICAgIFwiTENcIixcbiAgICAgICAgICBcIlZDXCIsXG4gICAgICAgICAgXCJUVFwiXG4gICAgICAgICAgLy8gXCJVU1wiXG4gICAgICAgIF07XG4gICAgICBjYXNlIFwic291dGhBbWVyaWNhXCI6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgXCJBUlwiLFxuICAgICAgICAgIFwiQk9cIixcbiAgICAgICAgICBcIkJSXCIsXG4gICAgICAgICAgXCJDTFwiLFxuICAgICAgICAgIFwiQ09cIixcbiAgICAgICAgICBcIkVDXCIsXG4gICAgICAgICAgXCJHWVwiLFxuICAgICAgICAgIFwiUFlcIixcbiAgICAgICAgICBcIlBVXCIsXG4gICAgICAgICAgXCJQRVwiLFxuICAgICAgICAgIFwiU1JcIixcbiAgICAgICAgICBcIlVZXCIsXG4gICAgICAgICAgXCJWRVwiXG4gICAgICAgIF07XG4gICAgICBjYXNlIFwib2NlYW5pYVwiOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgXCJpZFwiOiBcIkFVXCIsXG4gICAgICAgICAgIFwibmFtZVwiOiBcIkF1c3RyYWxpYVwiIFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIkZKXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGaWppXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gXCJBVVwiLFxuICAgICAgICAgIC8vIFwiRkpcIixcbiAgICAgICAgICAvLyBcIktJXCIsXG4gICAgICAgICAgLy8gXCJNSFwiLFxuICAgICAgICAgIC8vIFwiRk1cIixcbiAgICAgICAgICAvLyBcIk5SXCIsXG4gICAgICAgICAgLy8gXCJOWlwiLFxuICAgICAgICAgIC8vIFwiUFdcIixcbiAgICAgICAgICAvLyBcIlBHXCIsXG4gICAgICAgICAgLy8gXCJXU1wiLFxuICAgICAgICAgIC8vIFwiU0JcIixcbiAgICAgICAgICAvLyBcIlRPXCIsXG4gICAgICAgICAgLy8gXCJUVlwiLFxuICAgICAgICAgIC8vIFwiVlVcIlxuICAgICAgICBdO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gcmFuZG9taXplIGNvdW50cnkgb3JkZXJcbiAgcmFuZG9taXplKGFycikge1xuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlSb3VuZChjb3VudHJpZXMpIHtcbiAgICB0aGlzLm1hcC5tYXBUZW1wbGF0ZS50b29sdGlwVGV4dCA9IFwie25hbWV9XCJcbiAgICBcbiAgICBcbiAgICAvLyBsZXQgY3VycmVudENvdW50cnkgPSBjb3VudHJpZXMuc2hpZnQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Q291bnRyeS5uYW1lKTtcblxuICAgIC8vIHRoaXMubWFwLm1hcFRlbXBsYXRlLnRvb2x0aXBUZXh0ID0gYENsaWNrIG9uICR7Y3VycmVudENvdW50cnkubmFtZX1gO1xuXG4gICAgXG4gICAgLy8gdGhpcy5tYXAubWFwU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLmV2ZW50cy5vbihcImhpdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBcblxuICAgIC8vIH0pXG5cblxuICAgIC8vIHRoaXMubWFwLm1hcFRlbXBsYXRlLmhpZGVUb29sdGlwKCk7XG4gICAgLy8gdGhpcy5tYXBUZW1wbGF0ZS5ldmVudHMub25jZShcImhpdFwiLCBlID0+IHtcblxuICAgIC8vICAgLy8gbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRkaXZcIik7XG4gICAgLy8gICAvLyBsZXQgZGF0YSA9IGUudGFyZ2V0LmRhdGFJdGVtLmRhdGFDb250ZXh0O1xuICAgIC8vICAgLy8gbGV0IGNpcmNsZVRpdGxlID0gZS50YXJnZXQuZGF0YS50aXRsZTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGEudGl0bGUpO1xuICAgIC8vICAgLy8gaWYgKGRhdGEpe1xuICAgIC8vICAgLy8gICBuYW1lLmlubmVySFRNTCA9IFwiPGg0PlwiICsgZGF0YS5uYW1lICsgXCI8L2g0PlwiO1xuICAgIC8vICAgLy8gfSBcbiAgICAvLyAgIC8vIGlmIChjaXJjbGVUaXRsZSkge1xuICAgIC8vICAgLy8gICBuYW1lLmlubmVySFRNTCA9IFwiPGg0PlwiICsgY2lyY2xlVGl0bGUgKyBcIjwvaDQ+XCI7XG4gICAgLy8gICAvLyB9XG4gICAgLy8gfSk7XG4gICAgXG4gICAgXG4gIH1cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgY29uc3RydWN0b3IocmVnaW9uID0gbnVsbCkge1xuICAgIHRoaXMucmVnaW9uID0gcmVnaW9uO1xuICAgIHRoaXMubWFwID0gYW00Y29yZS5jcmVhdGUoXCJtYXBkaXZcIiwgYW00bWFwcy5NYXBDaGFydCk7IC8vIENyZWF0ZSBtYXAgaW5zdGFuY2VcbiAgICB0aGlzLm1hcFNlcmllcyA9IHRoaXMubWFwLnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcFBvbHlnb25TZXJpZXMoKSk7IC8vIENyZWF0ZSBtYXAgcG9seWdvbiBzZXJpZXNcbiAgICB0aGlzLm1hcFRlbXBsYXRlID0gdGhpcy5tYXBTZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGU7IC8vIENvbmZpZ3VyZSBzZXJpZXNcbiAgICB0aGlzLmhvdmVyU3RhdGUgPSB0aGlzLm1hcFRlbXBsYXRlLnN0YXRlcy5jcmVhdGUoXCJob3ZlclwiKTtcbiAgICB0aGlzLmNpcmNsZVNlcmllcyA9IHRoaXMubWFwLnNlcmllcy5wdXNoKG5ldyBhbTRtYXBzLk1hcEltYWdlU2VyaWVzKCkpO1xuICAgIHRoaXMuY2lyY2xlU2VyaWVzVGVtcGxhdGUgPSB0aGlzLmNpcmNsZVNlcmllcy5tYXBJbWFnZXMudGVtcGxhdGU7XG4gICAgdGhpcy5jaXJjbGUgPSB0aGlzLmNpcmNsZVNlcmllc1RlbXBsYXRlLmNyZWF0ZUNoaWxkKGFtNGNvcmUuQ2lyY2xlKTtcbiAgICB0aGlzLnJlbmRlck1hcCgpOyBcbiAgfVxuXG4gIHJlbmRlck1hcCgpIHtcbiAgICAvLyBTZXQgbWFwIGRlZmluaXRpb25cbiAgICB0aGlzLm1hcC5nZW9kYXRhID0gYW00Z2VvZGF0YV93b3JsZEhpZ2g7XG4gICAgLy8gU2V0IHByb2plY3Rpb25cbiAgICB0aGlzLm1hcC5wcm9qZWN0aW9uID0gbmV3IGFtNG1hcHMucHJvamVjdGlvbnMuTmF0dXJhbEVhcnRoMSgpO1xuICAgIC8vIE1ha2UgbWFwIGxvYWQgcG9seWdvbiAobGlrZSBjb3VudHJ5IG5hbWVzKSBkYXRhIGZyb20gR2VvSlNPTlxuICAgIHRoaXMubWFwU2VyaWVzLnVzZUdlb2RhdGEgPSB0cnVlO1xuICAgIGlmICh0aGlzLnJlZ2lvbiA9PT0gJ29jZWFuaWEnKXtcbiAgICAgIC8vIHNldCB0aGlzIHNvIG9jZWFuaWEgaXNsYW5kcyBhcmVuJ3Qgc3BsaXRcbiAgICAgIHRoaXMubWFwLmRlbHRhTG9uZ2l0dWRlID0gLTE2MDtcbiAgICB9XG4gICAgICAgIFxuICAgIC8vIHRoaXMubWFwVGVtcGxhdGUuaGlkZVRvb2x0aXAoKTtcbiAgICAvLyB0aGlzLm1hcFRlbXBsYXRlLnRvb2x0aXBUZXh0ID0gXCJ7bmFtZX1cIjtcbiAgICB0aGlzLm1hcFRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2UxZTJlOVwiKTtcblxuICAgIHRoaXMuaG92ZXJTdGF0ZS5wcm9wZXJ0aWVzLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2JlYmViZVwiKTsgICAgXG5cbiAgICBcbiAgICAvLyBjcmVhdGUgY2lyY2xlcyBmb3Igc21hbGwgY291bnRyaWVzXG4gICAgdGhpcy5jaXJjbGUucmFkaXVzID0gNDtcbiAgICB0aGlzLmNpcmNsZS5maWxsID0gYW00Y29yZS5jb2xvcihcIiNlMWUyZTlcIik7XG4gICAgdGhpcy5jaXJjbGUuc3Ryb2tlID0gYW00Y29yZS5jb2xvcihcIiNGRkZGRkZcIik7XG4gICAgdGhpcy5jaXJjbGUuc3Ryb2tlV2lkdGggPSAxO1xuICAgIHRoaXMuY2lyY2xlLm5vblNjYWxpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jaXJjbGUudG9vbHRpcFRleHQgPSBcInt0aXRsZX1cIjtcbiAgICB0aGlzLmNpcmNsZVNlcmllc1RlbXBsYXRlLnByb3BlcnR5RmllbGRzLmxhdGl0dWRlID0gXCJsYXRpdHVkZVwiO1xuICAgIHRoaXMuY2lyY2xlU2VyaWVzVGVtcGxhdGUucHJvcGVydHlGaWVsZHMubG9uZ2l0dWRlID0gXCJsb25naXR1ZGVcIjtcbiAgICB0aGlzLmNpcmNsZVNlcmllcy5kYXRhID0gdGhpcy5zbWFsbENvdW50cmllcyh0aGlzLnJlZ2lvbik7XG5cbiAgICAvLyB6b29tICYgY2VudGVyIG1hcCBiYXNlZCBvbiByZWdpb25cbiAgICB0aGlzLm1hcC5ob21lWm9vbUxldmVsID0gdGhpcy5zZXRab29tKHRoaXMucmVnaW9uKTtcbiAgICB0aGlzLm1hcC5ob21lR2VvUG9pbnQgPSB0aGlzLnNldEdlb1BvaW50KHRoaXMucmVnaW9uKTtcblxuICAgIGFtNGNvcmUuVG9vbHRpcC5mb250RmFtaWx5ID0gXCJSYWxld2F5XCI7XG4gICAgYW00Y29yZS5Ub29sdGlwLmZvbnRTaXplID0gXCIyMDBweFwiO1xuXG4gIH1cblxuICBzZXRab29tKHJlZ2lvbil7XG4gICAgc3dpdGNoIChyZWdpb24pIHtcbiAgICAgIGNhc2UgXCJhZnJpY2FcIjpcbiAgICAgICAgcmV0dXJuIDIuNTtcbiAgICAgIGNhc2UgXCJhc2lhXCI6XG4gICAgICAgIHJldHVybiAyLjY7XG4gICAgICBjYXNlIFwiZXVyb3BlXCI6XG4gICAgICAgIHJldHVybiA2O1xuICAgICAgY2FzZSBcIm5vcnRoQW1lcmljYVwiOlxuICAgICAgICByZXR1cm4gMy4xO1xuICAgICAgY2FzZSBcInNvdXRoQW1lcmljYVwiOlxuICAgICAgICByZXR1cm4gMi42NTtcbiAgICAgIGNhc2UgXCJvY2VhbmlhXCI6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIFxuICBzZXRHZW9Qb2ludChyZWdpb24pIHtcbiAgICAvLyBkZXRlcm1pbmUgZ2VvIHBvaW50ICAvLyAgbGF0aXR1ZGUgLT4gdXAvZG93biAgLy8gIGxvbmdpdHVkZSAtPiBsZWZ0L3JpZ2h0XG4gICAgc3dpdGNoIChyZWdpb24pIHtcbiAgICAgIGNhc2UgXCJhZnJpY2FcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYXRpdHVkZTogMixcbiAgICAgICAgICBsb25naXR1ZGU6IDE4XG4gICAgICAgIH07XG4gICAgICBjYXNlIFwiYXNpYVwiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhdGl0dWRlOiAyNCxcbiAgICAgICAgICBsb25naXR1ZGU6IDk2XG4gICAgICAgIH07XG4gICAgICBjYXNlIFwiZXVyb3BlXCI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGF0aXR1ZGU6IDUwLFxuICAgICAgICAgIGxvbmdpdHVkZTogMTJcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJub3J0aEFtZXJpY2FcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYXRpdHVkZTogMzYsXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTEwXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwic291dGhBbWVyaWNhXCI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGF0aXR1ZGU6IC0yMSxcbiAgICAgICAgICBsb25naXR1ZGU6IC02NVxuICAgICAgICB9O1xuICAgICAgY2FzZSBcIm9jZWFuaWFcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYXRpdHVkZTogLTIwLFxuICAgICAgICAgIGxvbmdpdHVkZTogMTQ1XG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgc21hbGxDb3VudHJpZXMocmVnaW9uKSB7XG4gICAgc3dpdGNoIChyZWdpb24pIHtcbiAgICAgIGNhc2UgXCJhZnJpY2FcIjpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogLTQuNjc5NTc0LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiA1NS40OTE5Nzc3LFxuICAgICAgICAgICAgdGl0bGU6IFwiU2V5Y2hlbGxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogLTIwLjM0ODQwMzksXG4gICAgICAgICAgICBsb25naXR1ZGU6IDU3LjU1MjE1MDcsXG4gICAgICAgICAgICB0aXRsZTogXCJNYXVyaXRpdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IC0xMS44NzUwMDEsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDQzLjg3MjIxOTEsXG4gICAgICAgICAgICB0aXRsZTogXCJDb21vcm9zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAwLjE4NjM2LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiA2LjYxMzA4MSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMTYuMDAyMDgyOCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogLTI0LjAxMzE5NjksXG4gICAgICAgICAgICB0aXRsZTogXCJDYXBlIFZlcmRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICBjYXNlIFwiYXNpYVwiOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAzLjIwMjc3ODEsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDczLjIyMDY4MDIsXG4gICAgICAgICAgICB0aXRsZTogXCJNYWxkaXZlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMjUuOTMwNDE0MixcbiAgICAgICAgICAgIGxvbmdpdHVkZTogNTAuNjM3NzcxNixcbiAgICAgICAgICAgIHRpdGxlOiBcIkJhaHJhaW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IDEuMzUyMDgzLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMDMuODE5ODM5NSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlNpbmdhcG9yZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogNC41MzUyNzY5LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTQuNzI3NjY4OCxcbiAgICAgICAgICAgIHRpdGxlOiBcIkJydW5laVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogLTguODc0MjE3LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMjUuNzI3NTM5MSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkVhc3QgVGltb3JcIlxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIGNhc2UgXCJldXJvcGVcIjpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogNDMuOTQyMzU5OSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTIuNDU3Nzc3LFxuICAgICAgICAgICAgdGl0bGU6IFwiU2FuIE1hcmlub1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogNDEuOTAyOTE2LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMi40NTMzODkyLFxuICAgICAgICAgICAgdGl0bGU6IFwiVmF0aWNhbiBDaXR5IFN0YXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiA0Mi41NDYyNDU2LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxLjYwMTU1NCxcbiAgICAgICAgICAgIHRpdGxlOiBcIkFuZG9ycmFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IDQ3LjE2NjAwMDQsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDkuNTU1MzczMixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxpZWNodGVuc3RlaW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IDQzLjc1MDI5NzUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDcuNDEyODQwOCxcbiAgICAgICAgICAgIHRpdGxlOiBcIk1vbmFjb1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMzUuOTM3NDk2MixcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTQuMzc1NDE1OCxcbiAgICAgICAgICAgIHRpdGxlOiBcIk1hbHRhXCJcbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICBjYXNlIFwibm9ydGhBbWVyaWNhXCI6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IDE3LjA2MDgxNTgsXG4gICAgICAgICAgICBsb25naXR1ZGU6IC02MS43OTY0Mjg3LFxuICAgICAgICAgICAgdGl0bGU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMTMuMTkzODg2OCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogLTU5LjU0MzE5NzYsXG4gICAgICAgICAgICB0aXRsZTogXCJCYXJiYWRvc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMTIuMjYyNzc2NCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogLTYxLjYwNDE3MTgsXG4gICAgICAgICAgICB0aXRsZTogXCJHcmVuYWRhXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAxNy4zNTc4MjI0LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAtNjIuNzgyOTk3MSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMTMuOTA5NDQzOSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogLTYwLjk3ODg5MzMsXG4gICAgICAgICAgICB0aXRsZTogXCJTYWludCBMdWNpYVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMTIuOTg0MzA1NCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogLTYxLjI4NzIyNzYsXG4gICAgICAgICAgICB0aXRsZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiXG4gICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgY2FzZSBcIm9jZWFuaWFcIjpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogNy4xMzE0NzQsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDE3MS4xODQ0Nzg4LFxuICAgICAgICAgICAgdGl0bGU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogNy40MjU1NTM4LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxNTAuNTUwODExOCxcbiAgICAgICAgICAgIHRpdGxlOiBcIk1pY3JvbmVzaWFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IDcuNTE0OTc5OCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTM0LjU4MjUxOTUsXG4gICAgICAgICAgICB0aXRsZTogXCJQYWxhdVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogLTAuNTIyNzc4LFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxNjYuOTMxNTAzMyxcbiAgICAgICAgICAgIHRpdGxlOiBcIk5hdXJ1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAtMy4zNzA0MTcxLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAtMTY4LjczNDAzOTMsXG4gICAgICAgICAgICB0aXRsZTogXCJLaXJpYmF0aVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogLTkuNjQ1NzEsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDE2MC4xNTYxODksXG4gICAgICAgICAgICB0aXRsZTogXCJTb2xvbW9uIElzbGFuZHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IC03LjEwOTUzNTIsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDE3Ny42NDkzMjI1LFxuICAgICAgICAgICAgdGl0bGU6IFwiVHV2YWx1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAtMTUuMzc2NzA2MSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTY2Ljk1OTE1MjIsXG4gICAgICAgICAgICB0aXRsZTogXCJWYW51YXR1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAtMjEuMTc4OTg1NixcbiAgICAgICAgICAgIGxvbmdpdHVkZTogLTE3NS4xOTgyNDIyLFxuICAgICAgICAgICAgdGl0bGU6IFwiVG9uZ2FcIlxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG5cblxuXG59XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==