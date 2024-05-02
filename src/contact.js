function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phNum = document.createElement('p');
  phNum.textContent = '850 856 987';

  const address = document.createElement('p');
  address.textContent = 'BellWood, USA';

  const restaurantLocation = document.createElement('img');
  restaurantLocation.src = './Images/Restaurant-Img.jpg';

  contact.appendChild(phNum);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById('content');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
