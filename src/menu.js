import imgMenu1 from './assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg';
import imgMenu2 from './assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg';
import imgMenu3 from './assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg';
import imgMenu4 from './assets/7be0453e-2c10-456e-992e-97aa4d4f2c6b.jpeg';
import imgMenu5 from  './assets/281800b0-c14f-4dbd-8707-8be10394b1dd.jpeg';
import imgMenu6 from './assets/a00ecbdb-f6af-486c-af1c-99d8a73463cc.jpeg';
const menuContainer = document.createElement('div')
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

    // ---item 5
    const item5 = document.createElement('div');
    item5.classList.add('item1');
    const item5Img = document.createElement('img');
    item5Img.classList.add('item1Img');
    item5Img.src = imgMenu5;
    const item5Description = document.createElement('p');
    item5Description.classList.add('disc1');
    item5Description.innerHTML = 'food 5';
    item5.appendChild(item5Img);
    item5.appendChild(item5Description);

    // ---item 6
    const item6 = document.createElement('div');
    item6.classList.add('item1');
    const item6Img = document.createElement('img');
    item6Img.classList.add('item1Img');
    item6Img.src = imgMenu6;
    const item6Description = document.createElement('p');
    item6Description.classList.add('disc1');
    item6Description.innerHTML = 'food 6';
    item6.appendChild(item6Img);
    item6.appendChild(item6Description);

    //append the items to the menu container
    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);
    menuContainer.appendChild(item6);

    return menuContainer;
}

export default foodMenu();