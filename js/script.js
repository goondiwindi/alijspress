'use strict'

const search = document.querySelector('.search');
const cartBtn = document.querySelector('#cart');
const cart = document.querySelector('.cart');
const wishlistBtn = document.querySelector('#wishlist');

const goodsWrapper = document.querySelector('.goods-wrapper');

const createCartGoods = (id, title, price, img) => {
  const card = document.createElement('div');
  card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
  card.innerHTML = `
    <div class="card">
      <div class="card-img-wrapper">
        <img class="card-img-top" src="${img}" alt="${title}">
        <button class="card-add-wishlist" data-goods-id="${id}"></button>
      </div>
      <div class="card-body justify-content-between">
        <a href="#" class="card-title">${title}</a>
        <div class="card-price">${price}</div>
        <div>
          <button class="card-add-cart" data-goods-id="${id}">Добавить в корзину</button>
        </div>
      </div>
    </div>
  `;
  return card;
};

goodsWrapper.append(createCartGoods(1, 'Дартс', 3033,'img/temp/archer.jpg'));
goodsWrapper.append(createCartGoods(2, 'Фламинго', 2000, 'img/temp/flamingo.jpg'));
goodsWrapper.append(createCartGoods(3, 'Носки', 230, 'img/temp/socks.jpg'));

const openCart = (event) => {
  event.preventDefault();
  cart.style.display = 'flex';
  document.addEventListener("keydown", closeCart);
};

const closeCart = (event) => {
  const target = event.target;
  console.log(target);
  
  if (target === cart ||
    target.classList.contains('cart-close') ||
    event.keyCode === 27) {
    cart.style.display = '';
    document.removeEventListener('keydown', closeCart)
  }
};

cartBtn.addEventListener('click', openCart);
cart.addEventListener('click', closeCart);
