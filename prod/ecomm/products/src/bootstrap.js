import faker from 'faker'

let product = '';

for(let i= 0; i<5; i++){
    const name = faker.commerce.productName();
    product +=`<div>${name}</div>`;
}
document.querySelector('#dev-products').innerHTML=product;
