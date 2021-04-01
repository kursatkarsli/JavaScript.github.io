const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
//We need to explacity that data is from json.
fetch(endpoint)
  .then(blob => blob.json())//then function is getting value from before property. So then has all value of major property and it's child function has same values and you can return it in function.
  .then(data => cities.push(...data));
//if we want to get data into cities we need to push data into cities

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi"); // g for global and i for insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}
// For the adjust numbers

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
  
function displayMatches() {
    const fetchArray = findMatches(this.value, cities);
    
    const html = fetchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const state = place.state.replace(regex,`<span class="hl">${this.value}</span>`)

        return `
        <li>
        <span class="name">${cityName},${state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('');
    suggestion.innerHTML=html
}
const searchInput = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions")
const formElement = document.querySelector(".search-form")

searchInput.addEventListener("change", displayMatches)
suggestion.addEventListener("keyup", displayMatches)
formElement.addEventListener("submit",e => {
    e.preventDefault();
})