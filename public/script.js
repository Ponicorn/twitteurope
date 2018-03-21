const socket = io();

socket.on('popit', popit)


function popit(data) {
  // Window dimensions
  let xmax = window.innerWidth;
  let ymax = window.innerHeight;

  // Create element
  let popit = document.createElement('div')
  popit.className = 'popit'
  let star = '<img src="/public/star.svg" alt="EU star">'
  let name = `<a target="_blank" href="https://twitter.com/statuses/${data.id}" class="name"><p>${data.user.name}</p><p>@${data.user.screen_name}</p></a>`

  let x = Math.floor(Math.random() * xmax)
  let y = Math.floor(Math.random() * ymax)  
  
  if (x > xmax/2) {
    popit.style.right = `${xmax - x}px`
    popit.innerHTML = `${name}${star}`
  } else {
    popit.style.left = `${x}px`
    popit.innerHTML = `${star}${name}`
  }

  if (y > ymax/2) {
    popit.style.bottom = `${ymax - y}px`
  } else {
    popit.style.top = `${y}px`
  }
  
  // Pop element
  document.getElementById('popitbox').appendChild(popit)
  
  // Will destroy element after 10s
  setTimeout(() => { popit.remove() }, 10000)
}
