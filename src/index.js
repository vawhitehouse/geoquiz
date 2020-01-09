import './styles/reset.css';
import './styles/index.scss';
import './styles/map.css';
import Map from './scripts/map';
import Game from './scripts/game';


window.addEventListener("DOMContentLoaded", () => {
  function displayMap(region) {
    new Map(region);
  }

  displayMap();


  document
    .getElementById("europe")
    .addEventListener("click", () => displayMap("europe"));


  document
    .getElementById("africa")
    .addEventListener("click", () => displayMap("africa"));
  document
    .getElementById("asia")
    .addEventListener("click", () => displayMap("asia"));
  document
    .getElementById("north-america")
    .addEventListener("click", () => displayMap("northAmerica"));
  document
    .getElementById("south-america")
    .addEventListener("click", () => displayMap("southAmerica"));
  document
    .getElementById("oceania")
    .addEventListener("click", () => displayMap("oceania"));
  document
    .getElementById("world")
    .addEventListener("click", () => displayMap());


  
});