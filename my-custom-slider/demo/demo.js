const mycustomslider = require('../')

const form = {
  slider1_value: 16,
  slider2_value: 8
}

const data1 = { title: 'test slider1', value: form.slider1_value }
function listener1 (value) { form.slider1_value = value }
const slider1 = mycustomslider(data1, listener1)


const data2 = { title: 'test slider2', value: form.slider2_value }
function listener2 (value) { form.slider2_value = value }
const slider2 = mycustomslider(data2, listener2)



const button = document.createElement('button')
button.innerText = 'click me'
button.onclick = event => {
  console.log('slider1', form.slider1_value)
  console.log('slider2', form.slider2_value)
}

document.body.appendChild(slider1)
document.body.appendChild(slider2)
document.body.appendChild(button)
