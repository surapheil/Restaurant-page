import topPage from "./header";
import './styles.css';
import img3 from './assets/img2.webp';
import gIcon from './assets/github.png';
import homePage from './home';
import foodMenu from './menu';
import contactUs from './contact';
const content = document.getElementById('content');
const top = document.createElement('div');
function topHeader(){ 
    top.classList.add('top');
    const header = document.createElement('div');
    header.classList.add('head');
    header.innerHTML = 'ImEl';
    top.appendChild(header);
    top.appendChild(topPage()); 
    return top;
}    
//appending the top to the content container
content.appendChild(topHeader());
//adding background photo in for the main content
const mainCont = document.createElement('div');
const elements = [homePage, foodMenu, contactUs];
console.log(homePage);
function main(){
    mainCont.classList.add('main');
    const img = document.createElement('img');
    img.classList.add('bgImg');
    img.src = img3;
    mainCont.appendChild(img);
    mainCont.appendChild(homePage);
    
    // // Switching between tabs
    const githubBtn = document.querySelector('.menu');
    githubBtn.addEventListener('click', () => switchTabs(foodMenu));

    const backHome = document.querySelector('.home');
    backHome.addEventListener('click', () => switchTabs(homePage));

    const contactBtn = document.querySelector(".contact");
    contactBtn.addEventListener("click", () => switchTabs(contactUs));

    return mainCont;
}

function switchTabs(activeTab) {
    elements.forEach(element => {
        if (element === activeTab) {
            mainCont.appendChild(element);
        } else {
            mainCont.removeChild(element);
        }
    });
}

//append the img container to the main content
content.appendChild(main());



function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const p = document.createElement('p');
    const copyrightSymbol = '&copy;'
    p.innerHTML = `Copyright ${copyrightSymbol} ${new Date().getFullYear()} SuraphelGashu `;
    const a = document.createElement('a');
    a.classList.add('githubLink');
    a.href = "https://github.com/surapheil";
    const githubIcon = document.createElement('img');
    githubIcon.classList.add('githubIcon');
    githubIcon.src = gIcon;
    a.appendChild(githubIcon);
    footer.appendChild(p);
    footer.appendChild(a);
    return footer;
}

content.appendChild(createFooter());

console.log(foodMenu);


