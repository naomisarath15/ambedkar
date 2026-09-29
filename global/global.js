const locations = [
  { name: "Mhow, India", type: "1891 • BIRTHPLACE", x: 71.1, y: 37.4, text: "Born in Mhow on 14 April 1891, Bhimrao grew up in a military family and encountered the social barriers that sharpened his commitment to dignity and education." },
  { name: "Baroda, India", type: "1912 • SCHOLARSHIP & SERVICE", x: 70.3, y: 37.6, text: "The scholarship of Maharaja Sayajirao Gaekwad III of Baroda supported Ambedkar's higher studies. His return to Baroda also exposed the discrimination he later challenged through law and public action." },
  { name: "Bombay, India", type: "1908–1956 • EDUCATION & PUBLIC LIFE", x: 70.3, y: 39.4, text: "Elphinstone College, the Bombay High Court, Rajgruha, journalism, and the Bahishkrit Hitakarini Sabha made Bombay a central base for Ambedkar's scholarship and organizing." },
  { name: "Mahad, India", type: "1927 • CHAVDAR TANK SATYAGRAHA", x: 70.4, y: 40.0, text: "At Mahad on 20 March 1927, Ambedkar led thousands to claim the civic right to draw water from Chavdar Tank. The action made public dignity a constitutional question." },
  { name: "Nashik, India", type: "1930–1935 • KALARAM TEMPLE MOVEMENT", x: 70.5, y: 38.9, text: "The Kalaram Temple Satyagraha in Nashik demanded equal access to worship and public life, while showing Ambedkar why social equality needed structural safeguards." },
  { name: "Pune, India", type: "1932 • POONA PACT", x: 70.5, y: 39.7, text: "At Yerwada in Pune, the Poona Pact replaced separate electorates with reserved seats in joint electorates for the Depressed Classes." },
  { name: "New York, USA", type: "1913–1916 • COLUMBIA UNIVERSITY", x: 29.4, y: 27.4, text: "At Columbia, Ambedkar studied economics and social science under John Dewey and Edwin Seligman. The university later awarded him an honorary Doctor of Laws." },
  { name: "London, United Kingdom", type: "1916–1923 • ECONOMICS & LAW", x: 50.0, y: 21.4, text: "At the London School of Economics and Gray's Inn, he pursued advanced economics and legal training while writing The Problem of the Rupee and qualifying as a barrister." },
  { name: "Delhi, India", type: "1947–1956 • CONSTITUTION & FINAL YEARS", x: 70.5, y: 34.6, text: "As India's first Law Minister and Chairman of the Drafting Committee, Ambedkar worked in Delhi on fundamental rights, constitutional remedies, and the Hindu Code Bill. He died at 26 Alipur Road on 6 December 1956." },
  { name: "Nagpur, India", type: "1956 • DHAMMA DEEKSHA", x: 72.0, y: 38.2, text: "At Deekshabhoomi in Nagpur on 14 October 1956, Ambedkar embraced Buddhism with hundreds of thousands and set out a path of Navayana Dhamma." }
];

const pins = document.getElementById("mapPins");
const list = document.getElementById("locationList");
const title = document.getElementById("locationTitle");
const type = document.getElementById("locationType");
const text = document.getElementById("locationText");

function focusLocation(location) {
  type.textContent = location.type;
  title.textContent = location.name;
  text.textContent = location.text;
  document.querySelectorAll(".map-pin,.location-button").forEach(element => element.classList.toggle("active", element.dataset.name === location.name));
}

locations.forEach(location => {
  const pin = document.createElement("button");
  pin.type = "button";
  pin.className = "map-pin";
  pin.dataset.name = location.name;
  pin.style.left = `${location.x}%`;
  pin.style.top = `${location.y}%`;
  pin.setAttribute("aria-label", `Show ${location.name}`);
  pin.addEventListener("click", () => focusLocation(location));
  pins.appendChild(pin);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "location-button";
  button.dataset.name = location.name;
  button.innerHTML = `<span>${location.type}</span><strong>${location.name}</strong>`;
  button.addEventListener("click", () => focusLocation(location));
  list.appendChild(button);
});

focusLocation(locations[0]);
