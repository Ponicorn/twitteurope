const socket = io();

socket.on('popit', popit)



function popit() {
  // Window dimensions
  let xmax = window.innerWidth - 50;
  let ymax = window.innerHeight - 50;

  // Create element
  let popit = document.createElement('div')
  popit.className = 'popit'
  popit.style.top =  `${Math.floor(Math.random() * ymax) }px`
  popit.style.left = `${Math.floor(Math.random() * xmax) }px`
  popit.innerHTML = '<img src="/public/star.svg" alt="EU star">'

  // Pop element
  document.getElementById('popitbox').appendChild(popit)

  // Will destroy element
  setTimeout(() => { popit.remove() }, 5000)
}
