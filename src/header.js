import './styles.css'
function topPage(){
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
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