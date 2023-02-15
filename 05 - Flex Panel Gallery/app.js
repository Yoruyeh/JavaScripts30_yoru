const panels = document.querySelectorAll('.panel')

function toggleOpen() {
  removeOpen()
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

function removeOpen() {
  panels.forEach(panel => panel.classList.remove('open'))
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))