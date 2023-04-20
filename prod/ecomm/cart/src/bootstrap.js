import faker from 'faker';

const cartText = `<div>You have a ${faker.random.number()} item in your cart </div>`;

document.querySelector('#dev-cart').innerHTML = cartText;