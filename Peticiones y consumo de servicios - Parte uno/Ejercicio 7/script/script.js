fetch('https://api.rand.fun/number/integer')
  .then(response => response.html())
  .then(data => document.body.innerHTML = data.result)
  .catch(console.log('error al ejecutar la promesa'));