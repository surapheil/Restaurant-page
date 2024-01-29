const contact = document.createElement('div');
import imgMap from './assets/Screenshot from 2024-01-29 23-41-56.png'
contact.classList.add('contactInfo');

function addMap(){
    const phone = document.createElement('p');
    phone.classList.add('phoneNumber');
    phone.innerHTML = 'Phone: 0123456789';
    
    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML = `Address: Dembel,123 Boleroad <br>Postal Code: 12345`;;
    const email = document.createElement('a');
    email.classList.add('emailInfo');
    email.href='mailto:test@email.com'
    email.innerText= "Email: ItIsFakeEmail@email.com";

    const mapImage = document.createElement('img');
    mapImage.classList.add('mapImg');
    mapImage.src = imgMap;
    mapImage.alt="Contact Map"

    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);
    contact.appendChild(mapImage);

   return contact
}

export default addMap();