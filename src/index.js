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

  function newGame(region) {
    new Game(region);
  }

  document
    .getElementById("europe")
    .addEventListener("click", () => newGame("europe"));


  document
    .getElementById("africa")
    .addEventListener("click", () => newGame("africa"));
  document
    .getElementById("asia")
    .addEventListener("click", () => newGame("asia"));
  document
    .getElementById("north-america")
    .addEventListener("click", () => newGame("northAmerica"));
  document
    .getElementById("south-america")
    .addEventListener("click", () => newGame("southAmerica"));
  document
    .getElementById("oceania")
    .addEventListener("click", () => newGame("oceania"));
  document
    .getElementById("world")
    .addEventListener("click", () => newGame());


  
});