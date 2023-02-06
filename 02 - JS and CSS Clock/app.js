const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const numbers = document.querySelectorAll('.scale div')

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const secondDegree = (seconds / 60) * 360 + 90
  const minuteDegree = (minutes / 60) * 360 + 90
  const hourDegree = (hours / 12) * 360 + 90 + Math.floor((minutes / 12)) * 6
  secondHand.style.transform = `rotate(${secondDegree}deg)`
  minHand.style.transform = `rotate(${minuteDegree}deg)`
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

function setNumber() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.transform = `rotate(${i * 30}deg)`
    numbers[i].firstElementChild.style.transform = `rotate(${i * -30}deg)`
  }
}

setNumber()
setInterval(setDate, 1000)