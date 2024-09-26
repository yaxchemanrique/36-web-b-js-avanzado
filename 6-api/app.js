const form = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]');
const main = document.querySelector('main');
const bordersContainer = document.querySelector('#borders');

const URL_BASE = 'https://restcountries.com/v3.1/name/';
const URL_CODE = 'https://restcountries.com/v3.1/alpha/';

function renderError(status) {
  main.innerHTML = (`
    <h1>
      <span class="country">Error ${status}</span>
    </h1>
    <p class="habitantes">No encontramos ese país. Intenta de nuevo</p>
  `)
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

function renderBorders(bordersArr) {
  bordersContainer.innerHTML = '';
  for (let i = 0; i < bordersArr.length; i++) {
    const container = document.createElement('div')
    container.classList = 'container';
    container.innerHTML = (`
        <h2>${bordersArr[i].name}</h2>
        <img src=${bordersArr[i].flag} alt=${bordersArr[i].alt}/>
      `)
    bordersContainer.appendChild(container);
  }
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

async function getBorders(borders) {
  const bordersData =[]
  for (let i = 0; i < borders.length; i++) {
    const response = await fetch(`${URL_CODE}${borders[i]}`);
    const data = await response.json();
    const borderData = data[0]
    const borderInfo = {
      name: borderData.name.common,
      flag: borderData.flags.png,
      alt: borderData.flags.alt
    }
    bordersData.push(borderInfo)
  }
  console.log(bordersData)
  return bordersData;
}

async function submitHandler(e) {
  e.preventDefault();
  const inputValue = inputText.value;
  const countryName = inputValue.toLowerCase();
  const url = `${URL_BASE}${countryName}`;

  const countryData = await getCountry(url);

  if(!countryData) return;

  renderCountry(countryData);

  const bordersData = await getBorders(countryData.borders);
  renderBorders(bordersData)
}

// [{name: 'Belize', flag: 'url'}, {name: 'Guatemala', flag}]



form.addEventListener('submit', (e) => submitHandler(e));