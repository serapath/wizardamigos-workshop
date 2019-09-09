const bel = require('bel')
const belmark = require('belmark')

const workshop = require('../')

document.head.innerHTML = `<style> body, html {
  box-sizing: border-box; display: flex;
  margin: 0; min-height: 100vh; width: 100%;
}</style>`

;(async () => {
  document.body.appendChild(await workshop())
  // const chat = document.querySelector('[title="chatButton"')
  // chat.click()
})()
