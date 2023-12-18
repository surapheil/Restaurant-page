import topPage from "./header";
import './styles.css'
const content = document.getElementById('content');
const top = document.createElement('div');
top.classList.add('top');
const header = document.createElement('div');
header.classList.add('head');
header.innerHTML = 'ImEl';
top.appendChild(header);
top.appendChild(topPage());
content.appendChild(top);
console .log(content);


