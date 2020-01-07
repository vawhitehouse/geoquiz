import './styles/reset.css';
import './styles/index.scss';
import './styles/map.css';
import Map from './scripts/map';



window.addEventListener("DOMContentLoaded", () => {
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
    .getElementById("central-north-america")
    .addEventListener("click", () => displayMap("centralNorthAmerica"));
  document
    .getElementById("south-america")
    .addEventListener("click", () => displayMap("southAmerica"));
  document
    .getElementById("oceania")
    .addEventListener("click", () => displayMap("oceania"));

  function displayMap(region) {
    document.getElementById("mapdiv")
    new Map(region)
  }
  
});