import pizzaShop from './Images/pizza-shop.jpeg';

function createHome() {
  const main = document.getElementById('content');
  main.innerHTML = '';

  const shopName = document.createElement('h2');
  shopName.textContent = 'Pizza Shop';
  shopName.classList.add('shop-name');

  const img = document.createElement('img');
  img.src = './Images/pizza-shop.jpeg';

  main.appendChild(shopName);
  main.appendChild(img);
}

export default createHome;
