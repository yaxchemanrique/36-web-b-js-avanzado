const form = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]');
const main = document.querySelector('main');

const URL_BASE = 'https://restcountries.com/v3.1/name/';

function renderError(status) {
  main.innerHTML = (`
    <h1>
      <span class="country">Error ${status}</span>
    </h1>
    <p class="habitantes">No encontramos ese país. Intenta de nuevo</p>
  `)
}

async function getCountry(url) {
  const response = await fetch(url);
  console.log(response)

  if(!response.ok){
    renderError(response.status);
    return undefined;
  }
  const data = await response.json();
  return data[0];
}

async function submitHandler(e) {
  e.preventDefault();
  const inputValue = inputText.value;
  const countryName = inputValue.toLowerCase();
  const url = `${URL_BASE}${countryName}`;

  const countryData = await getCountry(url);

  if(!countryData) return;

  console.log(countryData);
  renderCountry(countryData);
}

function renderCountry(data) {
  main.innerHTML = (`
      <h1>
        <span class="country">${data.name.common}</span>
        <span class="capital">${data.capital[0]}</span>
      </h1>
      <p class="habitantes"><span>${data.population}</span> habitantes</p>
      <img src=${data.flags.png} alt=${data.flags.alt} />
    `);
}

form.addEventListener('submit', (e) => submitHandler(e));