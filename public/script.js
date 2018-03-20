const socket = io();

socket.on('popit', popit)



function popit() {
  // Window dimensions
  let xmax = window.innerWidth - 50;
  let ymax = window.innerHeight - 50;

  // Create element
  let popit = document.createElement('i')
  popit.className = 'popit fas fa-star'
  popit.style.top =  `${Math.floor(Math.random() * ymax) }px`
  popit.style.left = `${Math.floor(Math.random() * xmax) }px`
  // popit.innerHTML = 'star_rate'

  // Pop element
  document.getElementById('popitbox').appendChild(popit)

  // Will destroy element
  setTimeout(() => { popit.remove() }, 5000)
}
