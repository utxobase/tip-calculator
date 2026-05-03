const billInput = document.getElementById('bill')
const peopleCount = document.getElementById('people-count')
// grab tip buttons, +/- buttons, reset button...

let tipPercent = 0
let people = 1

function calculate() {
  let bill = Number(billInput.value)  // read it HERE, inside the function

  let tipAmount = bill * (tipPercent / 100)
  let totalBill = bill + tipAmount
  let perPerson = totalBill / people

  document.getElementById('tip-amount').textContent = '₹' + tipAmount.toFixed(2)
  document.getElementById('total-bill').textContent = '₹' + totalBill.toFixed(2)
  document.getElementById('per-person').textContent = '₹' + perPerson.toFixed(2)
}
const tipButtons = document.querySelectorAll('.tip-btn')

tipButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    tipPercent = Number(btn.dataset.tip)  // reads the data-tip="10" attribute

    tipButtons.forEach(function(b) { b.classList.remove('active') })
    btn.classList.add('active')

    calculate()
  })
})
document.getElementById('increase').addEventListener('click', function() {
  people = people + 1
  peopleCount.textContent = people
  calculate()
})

document.getElementById('decrease').addEventListener('click', function() {
  if (people > 1) {           // guard: don't go below 1
    people = people - 1
    peopleCount.textContent = people
    calculate()
  }
})

document.getElementById('reset-btn').addEventListener('click', function() {
  billInput.value = ''
  tipPercent = 0
  people = 1
  peopleCount.textContent = 1
  tipButtons.forEach(function(b) { b.classList.remove('active') })
  calculate()
})
billInput.addEventListener('input', calculate)