import loadContact from './contact.js';
import loadMenu from './menu.js';

function initializeWebsite() {
  const content = document.getElementById('content');
  //   content.appendChild(createHeader());

  const homeBtn = document.querySelector('nav > button:nth-child(1)');
  const menuBtn = document.querySelector('nav > button:nth-child(2)');
  const contactBtn = document.querySelector('nav > button:nth-child(3)');

  menuBtn.addEventListener('click', () => {
    loadMenu();
  });

  contactBtn.addEventListener('click', () => {
    loadContact();
  });
}

export default initializeWebsite;
