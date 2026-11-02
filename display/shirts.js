const shirtItem = [
  { id: 1, productName: 'Midnight Tiger Graphic Tee', productPrices: 29.99, img: '../img/shirt/shirt1.webp'},
  { id: 2, productName: 'Retro Skull Streetwear', productPrices: 29.99, img: '../img/shirt/shirt2.webp'},
  { id: 3, productName: 'Neon Samurai Warrior', productPrices: 29.99, img: '../img/shirt/shirt3.webp'},
  { id: 4, productName: 'Cosmic Dragon Overprint', productPrices: 29.99, img: '../img/shirt/shirt4.webp'},
  { id: 5, productName: 'Cyberpunk City Lights', productPrices: 29.99, img: '../img/shirt/shirt5.webp'},
  { id: 6, productName: 'Street Savage Bear', productPrices: 29.99, img: '../img/shirt/shirt6.webp'},
  { id: 7, productName: 'Vintage Cartoon Chaos', productPrices: 29.99, img: '../img/shirt/shirt7.webp'},
  { id: 8, productName: 'Urban Rebel Mugshot Tee', productPrices: 29.99, img: '../img/shirt/shirt8.webp'},
  { id: 9, productName: 'Galactic Wolf Emblem', productPrices: 29.99, img: '../img/shirt/shirt9.webp'},
  { id: 10, productName: 'Shadow Ninja Strike', productPrices: 29.99, img: '../img/shirt/shirt10.webp'},
  { id: 11, productName: 'Electric Panther Glow', productPrices: 29.99, img: '../img/shirt/shirt11.webp'},
  { id: 12, productName: 'Thunderbolt Street Legend', productPrices: 29.99, img: '../img/shirt/shirt12.webp'},
  { id: 13, productName: 'Chrome Robo Warrior', productPrices: 29.99, img: '../img/shirt/shirt13.webp'},
  { id: 14, productName: 'Heatwave Fire Skull', productPrices: 29.99, img: '../img/shirt/shirt14.webp'},
  { id: 15, productName: 'Dark Angel Street Icon', productPrices: 29.99, img: '../img/shirt/shirt15.webp'},
  { id: 16, productName: 'Pixel Retro Arcade Tee', productPrices: 29.99, img: '../img/shirt/shirt16.webp'},
  { id: 17, productName: 'Toxic Slime Monster Shirt', productPrices: 29.99, img: '../img/shirt/shirt17.webp'},
  { id: 18, productName: 'Futuristic Neon Grid', productPrices: 29.99, img: '../img/shirt/shirt18.webp'},
  { id: 19, productName: 'Wild Gorilla King Tee', productPrices: 29.99, img: '../img/shirt/shirt19.webp'},
  { id: 20, productName: 'Lightning Viper Coils', productPrices: 29.99, img: '../img/shirt/shirt20.webp'},
  { id: 21, productName: 'Vaporwave Sunset Dreams', productPrices: 29.99, img: '../img/shirt/shirt21.webp'},
  { id: 22, productName: 'Retro Racer 1995', productPrices: 29.99, img: '../img/shirt/shirt22.webp'},
  { id: 23, productName: 'Dragon Blaze Street Tee', productPrices: 29.99, img: '../img/shirt/shirt23.webp'},
  { id: 24, productName: 'Spaceman Adventure Crew', productPrices: 29.99, img: '../img/shirt/shirt24.webp'},
  { id: 25, productName: 'Pharaoh Gold Mask Tee', productPrices: 29.99, img: '../img/shirt/shirt25.webp'},
  { id: 26, productName: 'Ocean Shark Attack', productPrices: 29.99, img: '../img/shirt/shirt26.webp'},
  { id: 27, productName: 'Rebel Punk Skeleton', productPrices: 29.99, img: '../img/shirt/shirt27.webp'},
  { id: 28, productName: 'Graffiti Art Explosion', productPrices: 29.99, img: '../img/shirt/shirt28.webp'},
  { id: 29, productName: 'Samurai Shadow Blade', productPrices: 29.99, img: '../img/shirt/shirt29.webp'},
  { id: 30, productName: 'Cosmic Astronaut Drift', productPrices: 29.99, img: '../img/shirt/shirt30.webp'},
  { id: 31, productName: 'Phoenix Flame Rebirth', productPrices: 29.99, img: '../img/shirt/shirt31.webp'},
  { id: 32, productName: 'Urban King Crown Tee', productPrices: 29.99, img: '../img/shirt/shirt32.webp'},
  { id: 33, productName: 'Mystic Tiger Vision', productPrices: 29.99, img: '../img/shirt/shirt33.webp'},
  { id: 34, productName: 'Iron Mecha Fusion', productPrices: 29.99, img: '../img/shirt/shirt34.webp'},
  { id: 35, productName: 'Streetwolf Alpha Crew', productPrices: 29.99, img: '../img/shirt/shirt35.webp'},
  { id: 36, productName: 'Hologram Fusion Tee', productPrices: 29.99, img: '../img/shirt/shirt36.webp'},
];

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

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});