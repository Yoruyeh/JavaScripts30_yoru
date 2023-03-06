// select checkboxed
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

// 1. figure out what is the last thing we clicked
// everytime we clicked, it will be reassigned
let lastClicked

function handleClick(e) {
  // find what are in between
  let inBetween = false
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastClicked) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastClicked = this
}


// add Event Listener on every checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick))