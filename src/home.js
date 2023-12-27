import image from './assets/images (2).jpeg'
const home = document.createElement('div');
home.classList.add('pageHome');
function homePage(){
    const imel = document.createElement('h2');
    imel.classList.add('imel');
    imel.innerHTML = `Im'EL`

    const dine = document.createElement('p');
    dine.classList.add('dine');
    dine.innerHTML = 'Flavors unite @imEl!';

    const poster = document.createElement('img');
    poster.classList.add('poster');
    poster.src = image;

    const visit = document.createElement('p');
    visit.classList.add('visit');
    visit.innerHTML = 'Visit us or Order online'
    home.appendChild(imel);
    home.appendChild(dine);
    home.appendChild(poster);
    home.appendChild(visit);
    return home;
}


export default homePage();
