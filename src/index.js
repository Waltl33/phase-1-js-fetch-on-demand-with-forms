const init = () => {
const inputForm = document.querySelector('#form')
inputForm.addEventListener("submit", (e) => summary(e))
console.log(summary)
}



document.addEventListener('DOMContentLoaded', init);