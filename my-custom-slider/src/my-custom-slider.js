const csjs = require('csjs-inject')

module.exports = mycustomslider

const parser = document.createElement('div')

function mycustomslider (opts, notify) {
  const title = opts.title || 'default title'
  const value = opts.value || 0

  parser.innerHTML = `<div class="${css.slider}">
    <label>${title}</label>
    <input type="number" value=${value}>
  </div>`
  const element = parser.children[0]

  const input = element.children[1]
  input.onchange = () => notify(input.value)

  return element
}

const css = csjs`
.slider {
  padding: 5px;
}`