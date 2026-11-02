import { shirtItem } from "../data/card.js";
import { shortItem } from "../data/card.js";
import { shoesItem } from "../data/card.js";
import { hatsItem } from "../data/card.js";
import { pantsItem } from "../data/card.js";
function renderShirtItems() {
  const productShirtItems = document.querySelector(".render-shirt");
  let productHtml = "";

  shirtItem.forEach((item) => {
    productHtml += `
      <div class="">
          <div class="product-card">
              <div class="product-img">
                  <img src="${item.img}" alt="${item.productName}">
              </div>
              <div class="product-body">
                  <div>
                    <h5 class="shop-name">Online Shop</h5>
                    <p class="product-name">${item.productName}</p>
                    <p class="product-price">$${item.productPrices}</p>
                  </div>
                  <div button-product>
                    <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-line"></i> Add to Cart
                    </button>
                  </div>
              </div>
          </div>
      </div>
    `;
  });

  productShirtItems.innerHTML = productHtml;
}
renderShirtItems();

function renderShortItems() {
  const productShortItems = document.querySelector(".render-short");
  let productHtml = "";

  shortItem.forEach((item) => {
    productHtml += `
      <div class="">
          <div class="product-card">
              <div class="product-img">
                  <img src="${item.img}" alt="${item.productName}">
              </div>
              <div class="product-body">
                  <div>
                    <h5 class="shop-name">Online Shop</h5>
                    <p class="product-name">${item.productName}</p>
                    <p class="product-price">$${item.productPrices}</p>
                  </div>
                  <div button-product>
                    <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-line"></i> Add to Cart
                    </button>
                  </div>
              </div>
          </div>
      </div>
    `;
  });

  productShortItems.innerHTML = productHtml;
}

renderShortItems();

function renderShoesItems() {
  const productShoesItems = document.querySelector(".render-shoes");
  let productHtml = "";

  shoesItem.forEach((item) => {
    productHtml += `
      <div class="">
          <div class="product-card">
              <div class="product-img">
                  <img src="${item.img}" alt="${item.productName}">
              </div>
              <div class="product-body">
                  <div>
                    <h5 class="shop-name">Online Shop</h5>
                    <p class="product-name">${item.productName}</p>
                    <p class="product-price">$${item.productPrices}</p>
                  </div>
                  <div button-product>
                    <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-line"></i> Add to Cart
                    </button>
                  </div>
              </div>
          </div>
      </div>
    `;
  });

  productShoesItems.innerHTML = productHtml;
}
renderShoesItems();
function renderHatsItems() {
  const productHatsItems = document.querySelector(".render-hats");
  let productHtml = "";

  hatsItem.forEach((item) => {
    productHtml += `
      <div class="">
          <div class="product-card">
              <div class="product-img">
                  <img src="${item.img}" alt="${item.productName}">
              </div>
              <div class="product-body">
                  <div>
                    <h5 class="shop-name">Online Shop</h5>
                    <p class="product-name">${item.productName}</p>
                    <p class="product-price">$${item.productPrices}</p>
                  </div>
                  <div button-product>
                    <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-line"></i> Add to Cart
                    </button>
                  </div>
              </div>
          </div>
      </div>
    `;
  });

  productHatsItems.innerHTML = productHtml;
}

renderHatsItems();

function renderPantsItems() {
  const productPantsItems = document.querySelector(".render-pants");
  let productHtml = "";

  pantsItem.forEach((item) => {
    productHtml += `
      <div class="">
          <div class="product-card">
              <div class="product-img">
                  <img src="${item.img}" alt="${item.productName}">
              </div>
              <div class="product-body">
                  <div>
                    <h5 class="shop-name">Online Shop</h5>
                    <p class="product-name">${item.productName}</p>
                    <p class="product-price">$${item.productPrices}</p>
                  </div>
                  <div button-product>
                    <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-line"></i> Add to Cart
                    </button>
                  </div>
              </div>
          </div>
      </div>
    `;
  });
  productPantsItems.innerHTML = productHtml;
}

renderPantsItems();


const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});