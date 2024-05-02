import loadContact from './contact.js';
import loadMenu from './menu.js';
import loadHome from './home.js';

function initializeWebsite() {
  const content = document.getElementById('content');

  loadHome();

  const homeBtn = document.querySelector('nav > button:nth-child(1)');
  const menuBtn = document.querySelector('nav > button:nth-child(2)');
  const contactBtn = document.querySelector('nav > button:nth-child(3)');

  menuBtn.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenu();
  });

  contactBtn.addEventListener('click', () => {
    content.innerHTML = '';
    loadContact();
  });

  homeBtn.addEventListener('click', () => {
    content.innerHTML = '';
    loadHome();
  });
}

export default initializeWebsite;
