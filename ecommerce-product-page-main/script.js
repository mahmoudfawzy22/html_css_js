const bigImg = document.querySelector('.big-img');
const smallImgs = document.querySelectorAll('.small-img');
const smallImgsContainer = document.querySelector('.img-container');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const numberOfOrder = document.querySelector('.number');
const cartBtn = document.querySelector('.icon-cart');
const cart = document.querySelector('.cart');
const addToCart = document.querySelector('.add-to-cart-btn');
const cartContainer = document.querySelector('.cart-container');
const checkoutBtn = document.querySelector('.checkout-btn ');
const emptyMessage = document.querySelector('.empty');
console.log(bigImg);

smallImgsContainer.addEventListener('click', function (e) {
  const smallImgDiv = e.target.closest('.small-img');
  if (!smallImgDiv) return;

  smallImgs.forEach((img) => img.classList.remove('active'));

  smallImgDiv.classList.add('active');

  const index = [...smallImgs].indexOf(smallImgDiv);
  bigImg.src = bigImg.src = `images/image-product-${index + 1}.jpg`;
});

plusBtn.addEventListener('click', () => {
  numberOfOrder.textContent = Number(numberOfOrder.textContent) + 1;
});

minusBtn.addEventListener('click', () =>
  +numberOfOrder.textContent > 0
    ? (numberOfOrder.textContent = Number(numberOfOrder.textContent) - 1)
    : numberOfOrder.textContent
);

cartBtn.addEventListener('click', function () {
  cart.classList.toggle('cart--active');
});

let numberInCart;
addToCart.addEventListener('click', function () {
  const newItem = document.createElement('div');
  newItem.className = 'cart-item';
  newItem.innerHTML = `
    <img src="images/image-product-1-thumbnail.jpg" alt="Fall Limited Edition Sneakers" class="cart-item-image" />
    <div class="cart-item-details">
      <p class="cart-item-name">Fall Limited Edition Sneakers</p>
      <p class="cart-item-price">
        $125.00 x <span class="cart-item-qty">3</span>
        <span class="cart-item-total">$375.00</span>
      </p>
    </div>
    <div class="icon-delete"><i class="fa-solid fa-trash"></i></div>
  `;
  cartContainer.insertBefore(newItem, cartContainer.firstChild);
  checkoutBtn.classList.remove('hidden');
  emptyMessage.classList.add('hidden');
  numberInCart = numberInCart + 1;
});

console.log(numberInCart)