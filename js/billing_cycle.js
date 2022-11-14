import { plansList } from './data.js'

const plan_index = new URLSearchParams(window.location.search).get('plan_num')
// let value = params.get('plan_num')
console.log(plan_index)
//
// const newHeader = document.getElementById('new-header')
// newHeader.innerHTML = 'You chose plan ' + (parseInt(value, 10) + 1)
// const centerBox = document.getElementById('my-box')
//
// const createMonthlycont = () => {
//     const monthlyButton = document.getElementById('monthly-button')
//     monthlyButton.innerHTML =
//         'Monthly - ' + plansList[value].monthlySubPrice + '$'
//
//     monthlyButton.onclick = () => {
//         window.location.href = './checkout_form.html'
//     }
// }
//
// const createYearlycont = () => {
//     const yearlyButton = document.getElementById('yearly-button')
//     yearlyButton.innerHTML =
//         'Yearly - ' + plansList[value].yearlySubPrice + '$/month'
//
//     yearlyButton.onclick = () => {
//         window.location.href = './checkout_form.html'
//     }
// }
//
// createMonthlycont()
// createYearlycont()

const fetchPaymentCycleData = (index) => ({
  "monthly": plansList[index].monthlySubPrice,
  "yearly": plansList[index].yearlySubPrice
});

export const fillPricingCycle = (index) => {
  const paymentCycleData = fetchPaymentCycleData(index);
  document.getElementById("payment-cycle-monthly").innerHTML=paymentCycleData.monthly.toString() + "$";
  document.getElementById("payment-cycle-yearly").innerHTML=paymentCycleData.yearly.toString() + "$";
};

fillPricingCycle(plan_index);

