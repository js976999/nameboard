// Get references to DOM elements
const nameInput = document.getElementById("nameInput");
const flightInput = document.getElementById("flightInput");
const logoSelect = document.getElementById("logoSelect");
const showBtn = document.getElementById("showBtn");
const nameboard = document.getElementById("nameboard");
const displayName = document.getElementById("displayName");
const displayFlight = document.getElementById("displayFlight");
const logoBackground = document.getElementById("logoBackground");
const backBtn = document.getElementById("backBtn");
const formContainer = document.querySelector(".form-container");

// Default to Marquee Logo if nothing is selected
logoSelect.value = "marquee_logo.png";

// Store last used values to support pre-population
let lastName = "";
let lastFlight = "";
let lastLogo = "marquee_logo.png";

showBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const flight = flightInput.value.trim();
  const logo = logoSelect.value;

  // Simple validation
  if (!name || !flight) {
    alert("Please enter both Name and Flight details.");
    return;
  }

  displayName.textContent = name;
  displayFlight.textContent = flight;

  // Set background image
  logoBackground.style.backgroundImage = `url('Images/${logo}')`;
  logoBackground.style.backgroundSize = "contain";
  logoBackground.style.backgroundRepeat = "no-repeat";
  logoBackground.style.backgroundPosition = "center";

  formContainer.classList.add("hidden");
  nameboard.classList.remove("hidden");

  // Store for pre-population
  lastName = name;
  lastFlight = flight;
  lastLogo = logo;
});

backBtn.addEventListener("click", function () {
  nameboard.classList.add("hidden");
  formContainer.classList.remove("hidden");
  // Pre-populate the form fields with last values
  nameInput.value = lastName;
  flightInput.value = lastFlight;
  logoSelect.value = lastLogo;
});
