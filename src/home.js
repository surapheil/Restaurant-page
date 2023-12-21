import image from './assets/images (2).jpeg'
const home = document.createElement('div');
home.classList.add('home');
function homePage(){
    const imel = document.createElement('h3');
    imel.classList.add('imel');
    imel.innerHTML = `Im'EL`

    const dine = document.createElement('p');
    dine.classList.add('dine');
    dine.innerHTML = 'The fondest memories are made when gathered around the ImEL\'s table.'

    const poster = document.createElement('img');
    poster.classList.add('poster');
    poster.src = image;
    home.appendChild(imel);
    home.appendChild(dine);
    home.appendChild(poster);
    return home;
}homePage();


export default homePage();
