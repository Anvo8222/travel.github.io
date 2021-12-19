import travels from './travels.js';
import { travelDaNang } from './travels.js'

//render du lieu phan tua trong nuoc 1
const section1 = [];

for (let i = 0; i < travels.length; i++) {
    if (travels[i].id < 4) {
        section1.push(travels[i])
    }
}

const inlandTours = section1.map(inlandTour => {

    return `
    <div id="trongnuoc" class="section__group-about-1">
    <img src="./img/${inlandTour.img}" alt="${inlandTour.name}" data-wow-delay="300ms" data-wow-iteration="infinite" style="visibility: visible; animation-duration: 2s; animation-delay: 300ms; animation-iteration-count: infinite; animation-name: pulse;" class="wow animated group-about-img">
    <div class="group-about-1-content">
        <h2 class="group-about-1-content-name group-about-1-content-name-1">
            ${inlandTour.title}
        </h2>
        <p class="group-about-1-content-text">
            ${inlandTour.content}
        </p>
        <button class="group-about-1-content-btn group-about-1-content-btn-1">
            ${inlandTour.name}
        </button>
    </div>
    </div>
    `
})

const groupInlandTours = document.querySelector('.section__group-1');
const groupInlandTour = inlandTours.join('');
groupInlandTours.innerHTML = groupInlandTour;

//add mau sac cho button
const buttonGroup1 = document.querySelectorAll('.group-about-1-content-btn-1');

buttonGroup1[0].classList.add('group-about-1-content-btn-1');
buttonGroup1[1].classList.add('group-about-1-content-btn-2');
buttonGroup1[2].classList.add('group-about-1-content-btn-3');

//render du lieu cho tour da nang

const daNangTours = travelDaNang.map(daNangTour => {

    return `
    <div class="wow section__group-servic-item">
        <img src="./img/${daNangTour.img}" alt="${daNangTour.title}" class="section__group-servic-img">
        <div class="section__group-text-button">
            <h2 class="section__group-servic-name">
                ${daNangTour.name}
                </h2>
            <p class="section__group-servic-text">
            ${daNangTour.content}
            </p>
                <button class="section__group-servic-btn">
                Read More
             </button>
        </div>
    </div>
    `
})

const daNangToursElement = document.querySelector('.section__group-servic-list');
const groupdaNangTours = daNangTours.join('');
daNangToursElement.innerHTML = groupdaNangTours;

// add stribule wow cho danangtour   data-wow-delay="1.5s"

const listTourDNs=document.querySelectorAll('.section__group-servic-item');
console.log(listTourDNs);
listTourDNs[0].classList.add('bounceInLeft')
listTourDNs[1].classList.add('bounceInLeft')
listTourDNs[0].setAttribute("data-wow-delay","1s");
listTourDNs[1].setAttribute("data-wow-delay","0.5s");

listTourDNs[2].classList.add('bounceInRight')
listTourDNs[3].classList.add('bounceInRight')
listTourDNs[2].setAttribute("data-wow-delay","0.5s");
listTourDNs[3].setAttribute("data-wow-delay","1s");