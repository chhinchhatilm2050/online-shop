const hatsItem = [
  { id: 37, productName: 'Shadow Strike Cap', productPrices: 59.99, img: '../img/hats/hats1.webp'},
  { id: 38, productName: 'Urban Crown Snapback', productPrices: 59.99, img: '../img/hats/hats2.webp'},
  { id: 39, productName: 'Midnight Wave Hat', productPrices: 59.99, img: '../img/hats/hats3.webp'},
  { id: 40, productName: 'Rebel Street Classic', productPrices: 59.99, img: '../img/hats/hats4.webp'},
  { id: 41, productName: 'Neon Drift Cap', productPrices: 59.99, img: '../img/hats/hats5.webp'},
  { id: 42, productName: 'Vintage Rider Hat', productPrices: 59.99, img: '../img/hats/hats6.webp'},
  { id: 43, productName: 'Streetwolf Snapback', productPrices: 59.99, img: '../img/hats/hats7.webp'},
  { id: 44, productName: 'Chrome Panther Cap', productPrices: 59.99, img: '../img/hats/hats8.webp'},
  { id: 45, productName: 'Heatwave Flame Hat', productPrices: 59.99, img: '../img/hats/hats9.webp'},
  { id: 46, productName: 'Turbo Racer Snapback', productPrices: 59.99, img: '../img/hats/hats10.webp'},
  { id: 47, productName: 'Thunder King Cap', productPrices: 59.99, img: '../img/hats/hats11.webp'},
  { id: 48, productName: 'Urban Storm Classic', productPrices: 59.99, img: '../img/hats/hats12.webp'},
  { id: 49, productName: 'Cosmic Trail Hat', productPrices: 59.99, img: '../img/hats/hats13.webp'},
  { id: 50, productName: 'Alpha Hunter Cap', productPrices: 59.99, img: '../img/hats/hats14.webp'},
  { id: 51, productName: 'Street Ninja Snapback', productPrices: 59.99, img: '../img/hats/hats15.webp'},
  { id: 52, productName: 'Retro Motion Cap', productPrices: 59.99, img: '../img/hats/hats16.webp'},
  { id: 53, productName: 'Nightshift Stealth Hat', productPrices: 59.99, img: '../img/hats/hats17.webp'},
  { id: 54, productName: 'Hypercore Street Cap', productPrices: 59.99, img: '../img/hats/hats18.webp'},
  { id: 55, productName: 'Aero Force Snapback', productPrices: 59.99, img: '../img/hats/hats19.webp'},
  { id: 56, productName: 'Urban Tiger Cap', productPrices: 59.99, img: '../img/hats/hats20.webp'},
  { id: 57, productName: 'Nova Pulse Hat', productPrices: 59.99, img: '../img/hats/hats21.webp'},
  { id: 58, productName: 'Skybound Drift Cap', productPrices: 59.99, img: '../img/hats/hats22.webp'},
  { id: 59, productName: 'Rebel Rocker Snapback', productPrices: 59.99, img: '../img/hats/hats23.webp'},
  { id: 60, productName: 'Shadowline Icon Hat', productPrices: 59.99, img: '../img/hats/hats24.webp'},
  { id: 61, productName: 'Neon Crown Classic', productPrices: 59.99, img: '../img/hats/hats25.webp'},
  { id: 62, productName: 'Drift Rider Cap', productPrices: 59.99, img: '../img/hats/hats26.webp'},
  { id: 63, productName: 'Cyclone Street Snapback', productPrices: 59.99, img: '../img/hats/hats27.webp'},
  { id: 64, productName: 'Velocity Urban Cap', productPrices: 59.99, img: '../img/hats/hats28.webp'},
];

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

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});