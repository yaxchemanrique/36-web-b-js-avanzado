const h1 = document.querySelector('h1');
console.log('Encontré el H1')

//web API -> Info de un servidor
setTimeout(() => {
  h1.innerText = 'Tu codigo ya expiro';
  console.log('dentro del Set Timeout')
}, 5000)

h1.style.color = 'hotpink'

for (let i = 0; i < 10; i++) {
  console.log('Codigo de primer nivel')
}