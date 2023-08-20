document.addEventListener("DOMContentLoaded", function () {
  var button1 = document.getElementById("1");
  button1.addEventListener("click", function () {
    var drop = document.querySelectorAll(".drop");
    drop.forEach(function (element) {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    });
    return false;
  });

  var languageButtons = document.querySelectorAll(".language");
  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var languageMenu = document.querySelector(".language_menu");
      var displayValue = window
        .getComputedStyle(languageMenu)
        .getPropertyValue("display");

      languageMenu.style.transition = "none";
      languageMenu.style.display = displayValue === "none" ? "block" : "none";

      setTimeout(function () {
        languageMenu.style.transition = "";
      }, 100);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleCars() {
    var autoBmw = document.querySelector(".auto_bmw");
    var autoMercedes = document.querySelector(".auto_mercedes");

    if (autoBmw.style.display === "none") {
      autoBmw.style.display = "block";
      autoMercedes.style.display = "none";
    } else {
      autoBmw.style.display = "none";
      autoMercedes.style.display = "block";
    }

    setTimeout(toggleCars, 10000);
  }

  setTimeout(toggleCars, 10000);
});

function clickFun() {
  document.getElementsByClassName("auto_bmw").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var containerHeads = document.querySelectorAll(".container_head");
      var containers = document.querySelectorAll(".container");
      var body = document.body;
      var windows = document.querySelectorAll(".window");

      containerHeads.forEach(function (element) {
        element.style.opacity = "0.5";
      });
      containers.forEach(function (element) {
        element.style.opacity = "0.5";
      });
      body.style.backgroundColor = "black";

      windows.forEach(function (element) {
        var displayValue = window
          .getComputedStyle(element)
          .getPropertyValue("display");

        element.style.display =
          displayValue === "none" || displayValue === "block" ? "flex" : "none";
      });
    });
  });

  var crosses = document.querySelectorAll(".cross");
  crosses.forEach(function (cross) {
    cross.addEventListener("click", function () {
      var windows = document.querySelectorAll(".window");
      var containerHeads = document.querySelectorAll(".container_head");
      var containers = document.querySelectorAll(".container");
      var body = document.body;

      windows.forEach(function (element) {
        element.style.display = "none";
      });

      containerHeads.forEach(function (element) {
        element.style.opacity = "1";
      });
      containers.forEach(function (element) {
        element.style.opacity = "1";
      });
      body.style.backgroundColor = "white";
    });
  });
});

// import prices from "./prices";

const prices = {
  golf: {
    1: 127,
    2: 125,
    3: 121,
  },
  bmw: {
    1: 227,
    2: 225,
    3: 221,
  },
  mercedes: {
    1: 137,
    2: 129,
    3: 127,
  },
  audi: {
    1: 130,
    2: 127,
    3: 122,
  },
};
const priceForDaySpan = document.getElementById("priceForDay");
const selectedBrand = "golf";
const selectedNumber = 1;

const priceForDay = prices[selectedBrand][selectedNumber];
priceForDaySpan.textContent = priceForDay;
