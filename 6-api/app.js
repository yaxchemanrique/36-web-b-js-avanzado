async function getCountry() {
  const response = await fetch('https://restcountries.com/v3.1/name/deutschland');
  console.log(response)
  const data = await response.json()
  console.log(data)
}

getCountry()