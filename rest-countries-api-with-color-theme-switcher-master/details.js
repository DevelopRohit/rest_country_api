let params = new URLSearchParams(window.location.search);
let countryname = params.get("country");

async function getCountryDetails() {
    let res = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
    let data = await res.json()

    let country = data[0];

    let container = document.getElementById("countryDetails");
    container.innerHTML = `
        <h1>${country.name.common}</h1>
        <img src="${country.flags.png}" alt="${country.name.common}">
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
        <p><strong>Languages:</strong> ${Object.values(country.languages).join(", ")}</p>
        <p><strong>Currencies:</strong> ${Object.values(country.currencies)[0].name}</p>
    `;
}

getCountryDetails();