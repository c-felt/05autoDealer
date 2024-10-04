const btnElement = document.querySelector('#primaryNav > button');
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})
//Put current year in footer
const theYear = new Date();
document.querySelector('#year').textContent = theYear.getFullYear()