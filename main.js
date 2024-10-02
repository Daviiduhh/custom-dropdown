import "./style.css";
import { setupSelector } from "./selector.js";

document.querySelector("#app").innerHTML = `
  <div id="selector" class="selector">
    <div id="selected" class="selector__selected"></div>
    <div id="list" class="selector__list hidden"></div>
  </div>
`;

setupSelector(
  document.querySelector("#selector"),
  document.querySelector("#list"),
  document.querySelector("#selected")
);
