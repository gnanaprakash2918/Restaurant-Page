import carne from './Images/carne.png';
import colorato from './Images/colorato.png';
import crema from './Images/crema.png';
import disgustoso from './Images/disgustoso.png';
import gamberi from './Images/gamberi.png';
import pepe from './Images/pepe.png';
import pomodoro from './Images/pomodoro.png';
import salsiccia from './Images/salsiccia.png';

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDesc = document.createElement('p');
  foodDesc.textContent = description;

  const foodImg = document.createElement('img');
  foodImg.src = `Images/${name.toLowerCase()}.png`;

  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDesc);

  return menuItem;
}

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      'Salsiccia',
      'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Gamberi',
      'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Pepe',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Disgustoso',
      'Tomato sauce, Bacon, Pineapple, Olives, Basil'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Colorato',
      'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Pomodoro',
      'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Crema',
      'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'
    )
  );
  menu.appendChild(
    createMenuItem(
      'Carne',
      'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'
    )
  );

  return menu;
}

function loadMenu() {
  const main = document.getElementById('content');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
