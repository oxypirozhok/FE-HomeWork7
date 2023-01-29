'use strict';

// const forma = document.querySelector('.form');
// const title = document.querySelector('#title');
// const price = document.querySelector('#price');
// const sectionProducts = document.querySelector('#products');


// const products = [];

 
// forma.onsubmit = (event) => {
//   event.preventDefault();
//   products.push({
//     title: title.value,
//     price: price.value,
//   });
 

//  newProducts();

//   title.value = "";
//   price.value = "";
// };

// function createNode(title, price){
//   let div = document.createElement('div');
//   div.classList.add('product');
//   let titleP = document.createElement('p');
//   let priceP = document.createElement('p');


//   titleP.innerText = title;
//   priceP.innerText = price;

//   div.append(titleP, priceP);
//   sectionProducts.append(div);
  
// }

// function newProducts() {
//   sectionProducts.innerHTML = "";
//   for(let i = 0; i < products.length; i++){
//     createNode(products[i].title, products[i].price);
  
//   } 
//   for(let i = 1; i < products.length; i++){
//     createButton();
//   }
// }


// function createButton(){
//   let buttonAmount = document.createElement('button');
//   buttonAmount.innerText ='Общая сумма';
//   buttonAmount.classList.add('buttonAmount');
//   sectionProducts.append(buttonAmount);

//   buttonAmount.onclick = (event) => {
//     event.preventDefault();
//     totalSum();
//     };
// }


// function totalSum(){
//   let amount = 0;
//   for (let key in products){
//     amount += +products[key].price;
//   }
//   alert(amount);
// }

//2)Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться(вместо букв звезодчки, либо точки), а при повторном нажатии должен появиться обратно.


const formaPassword = document.querySelector('.formP') ;
const buttonHide = document.querySelector('.hideButton');
const inputPassword = document.querySelector('#password');


buttonHide.onclick = (event) => {
  event.preventDefault();
  let type = inputPassword.getAttribute("type");
  if (type === "text"){
    inputPassword.setAttribute('type','password');
  }else{
    inputPassword.setAttribute('type','text');
  }
  
}