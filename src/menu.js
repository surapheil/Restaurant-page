import imgMenu1 from './assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg';
import imgMenu2 from './assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg';
import imgMenu3 from './assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg';
import imgMenu4 from './assets/ethiopian-food-yetsom-beyaynetu.jpg.webp';
const menuContainer = document.createElement('div');
menuContainer.classList.add('menuContainer');
function foodMenu(){
    const item1 = document.createElement('div');
    item1.classList.add('item1');
    const item1Img = document.createElement('img');
    item1Img.classList.add('item1Img');
    item1Img.src = imgMenu1;
    const item1Description = document.createElement('p');
    item1Description.classList.add('disc1');
    item1Description.innerHTML = 'food 1';
    item1.appendChild(item1Img);
    item1.appendChild(item1Description);

    //---item 2
    const item2 = document.createElement('div');
    item2.classList.add('item1');
    const item2Img = document.createElement('img');
    item2Img.classList.add('item1Img');
    item2Img.src = imgMenu2;
    const item2Description = document.createElement('p');
    item2Description.classList.add('disc1');
    item2Description.innerHTML = 'food 2';
    item2.appendChild(item2Img);
    item2.appendChild(item2Description);

    // ---item 3
    const item3 = document.createElement('div');
    item3.classList.add('item1');
    const item3Img = document.createElement('img');
    item3Img.classList.add('item1Img');
    item3Img.src = imgMenu3;
    const item3Description = document.createElement('p');
    item3Description.classList.add('disc1');
    item3Description.innerHTML = 'food 3';
    item3.appendChild(item3Img);
    item3.appendChild(item3Description);

    // ---item 4
    const item4 = document.createElement('div');
    item4.classList.add('item1');
    const item4Img = document.createElement('img');
    item4Img.classList.add('item1Img');
    item4Img.src = imgMenu4;
    const item4Description = document.createElement('p');
    item4Description.classList.add('disc1');
    item4Description.innerHTML = 'food 4';
    item4.appendChild(item4Img);
    item4.appendChild(item4Description);

    //append the items to the menu container
    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);

    return menuContainer;
}

export default foodMenu();