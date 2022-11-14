import { plansList } from './data.js'

const params = new URLSearchParams(window.location.search)
let value = params.get('plan_num')
// console.log(value)

const newHeader = document.getElementById('new-header')
newHeader.innerHTML = 'You choose plan ' + (parseInt(value, 10) + 1)
const centerBox = document.getElementById('my-box')

const createMonthlycont = () => {
    const monthlyButton = document.getElementById('monthly-button')
    monthlyButton.innerHTML =
        'Monthly - ' + plansList[value].monthlySubPrice + '$'

    monthlyButton.onclick = () => {
        window.location.href = './checkout_form.html?plan_num=' + value
    }
}

const createYearlycont = () => {
    const yearlyButton = document.getElementById('yearly-button')
    yearlyButton.innerHTML =
        'Yearly - ' + plansList[value].yearlySubPrice + '$/month'

    yearlyButton.onclick = () => {
        window.location.href = './checkout_form.html?plan_num=' + value
    }
}

createMonthlycont()
createYearlycont()
