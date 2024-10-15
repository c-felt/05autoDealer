const btnElement = document.querySelector('#primaryNav > button');
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})

//grab the REVIEWS data from the file
import { reviews } from '../data/reviews.js';
console.log(reviews);

//create an empty card
const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {

    //create a section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name
    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

const myRatings = document.createElement('div')

for (let step = 0; step<reviews[x].stars; step++) {
    const starIndicator = document.createElement('img')
    starIndicator.src = "../images/starGraphic.svg"
    myRatings.appendChild(starIndicator)
}
    //build the figure with child elements
    mySection.appendChild(myName);
    mySection.appendChild(myRatings)
    mySection.appendChild(myReview);

    //Add a new card to the page
    myTarget.appendChild(mySection);
}


//Put current year in footer
const theYear = new Date();
document.querySelector('#year').textContent = theYear.getFullYear()