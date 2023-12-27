import homePageLoad from "./homePageLoad.js";
import menuPageLoad from "./menuPageLoad.js";
import hoursPageLoad from "./HoursPageLoad.js";
import './styles.css';

homePageLoad();

let homebutton = document.getElementById("homebutton");
let menubutton = document.getElementById("menubutton");
let hoursbutton = document.getElementById("hoursbutton");

homebutton.addEventListener("click", function() {
    homePageLoad();
})

menubutton.addEventListener("click", function() {
    menuPageLoad();
})

hoursbutton.addEventListener("click", function() {
    hoursPageLoad();
})



console.log("running");
