import './styles/reset.css';
import './styles/index.scss';
import './styles/map.css';
import Map from './scripts/map';



window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("europe")
    .addEventListener("click", () => displayMap("continentsRussiaEuropeLow"));

  function displayMap(region) {
    document.getElementById("mapdiv")
    new Map(region)
  }
  
});