const socket = io();
let popits = []

socket.on('popit', (data) => {
  let popit = {
    url: `https://twitter.com/statuses/${data.id_str}`,
    name: data.user.name,
    nameat: data.user.screen_name,
    style: {},
  }

  let xmax = window.innerWidth
  let ymax = window.innerHeight
  let x = Math.floor(Math.random() * xmax)
  let y = Math.floor(Math.random() * ymax) 

  if (x > xmax/2) popit.style.right = `${xmax - x}px`
  else popit.style.left = `${x}px`

  if (y > ymax/2) popit.style.bottom = `${ymax - y}px`
  else popit.style.top = `${y}px`

  popits.push(popit)
  setTimeout(() => { popits.shift() }, 10000)
})


let popitbox = new Vue({
  el: '#popitbox',
  data: { popits }
})