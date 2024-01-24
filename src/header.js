import './styles.css'
function topPage(){
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    const container = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = 'Home';
    menu.classList.add('menu');
    menu.innerHTML = 'Menu';
    contact.classList.add('contact');
    contact.innerHTML = 'Contact';
    container.classList.add('container');
    container.appendChild(home);
    container.appendChild(menu);
    container.appendChild(contact);
    return container;
}

export default topPage