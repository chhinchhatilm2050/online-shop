const shoesItem = [
  { id: 37, productName: 'Shadow Runner Street Sneakers', productPrices: 49.99, img: '../img/shoes/shoes1.webp'},
  { id: 38, productName: 'Urban Flux Low-Top Sneakers', productPrices: 49.99, img: '../img/shoes/shoes2.webp'},
  { id: 39, productName: 'Volt Edge Sport Shoes', productPrices: 49.99, img: '../img/shoes/shoes3.webp'},
  { id: 40, productName: 'NightPulse Mesh Sneakers', productPrices: 49.99, img: '../img/shoes/shoes4.webp'},
  { id: 41, productName: 'StreetDrive Classic Sneakers', productPrices: 49.99, img: '../img/shoes/shoes5.webp'},
  { id: 42, productName: 'AeroStep Flex Runners', productPrices: 49.99, img: '../img/shoes/shoes6.webp'},
  { id: 43, productName: 'TrailCore Outdoor Shoes', productPrices: 49.99, img: '../img/shoes/shoes7.webp'},
  { id: 44, productName: 'UrbanBoost Everyday Sneakers', productPrices: 49.99, img: '../img/shoes/shoes8.webp'},
  { id: 45, productName: 'RetroWave Court Sneakers', productPrices: 49.99, img: '../img/shoes/shoes9.webp'},
  { id: 46, productName: 'Classic StreetWalk Shoes', productPrices: 49.99, img: '../img/shoes/shoes10.webp'},
  { id: 47, productName: 'Momentum Pro Mesh Sneakers', productPrices: 49.99, img: '../img/shoes/shoes11.webp'},
  { id: 48, productName: 'UrbanStride Comfort Shoes', productPrices: 49.99, img: '../img/shoes/shoes12.webp'},
  { id: 49, productName: 'Rugged Step Trek Shoes', productPrices: 49.99, img: '../img/shoes/shoes13.webp'},
  { id: 50, productName: 'Velocity AirLite Sneakers', productPrices: 49.99, img: '../img/shoes/shoes14.webp'},
  { id: 51, productName: 'StreetFlex Low Sneakers', productPrices: 49.99, img: '../img/shoes/shoes15.webp'},
  { id: 52, productName: 'UrbanMotion Runner Shoes', productPrices: 49.99, img: '../img/shoes/shoes16.webp'},
  { id: 53, productName: 'VoltCraft Athletic Sneakers', productPrices: 49.99, img: '../img/shoes/shoes17.webp'},
  { id: 54, productName: 'SteelShift Outdoor Runners', productPrices: 49.99, img: '../img/shoes/shoes18.webp'},
  { id: 55, productName: 'UrbanFlow Canvas Sneakers', productPrices: 49.99, img: '../img/shoes/shoes19.webp'},
  { id: 56, productName: 'FlexStep Comfort Shoes', productPrices: 49.99, img: '../img/shoes/shoes20.webp'},
  { id: 57, productName: 'TrailLine Travel Shoes', productPrices: 49.99, img: '../img/shoes/shoes21.webp'},
  { id: 58, productName: 'AirDrive High Grip Sneakers', productPrices: 49.99, img: '../img/shoes/shoes22.webp'},
  { id: 59, productName: 'UrbanForce Grip Sneakers', productPrices: 49.99, img: '../img/shoes/shoes23.webp'},
  { id: 60, productName: 'StreetVolt Mesh Runners', productPrices: 49.99, img: '../img/shoes/shoes24.webp'},
  { id: 61, productName: 'Classic Drift Canvas Shoes', productPrices: 49.99, img: '../img/shoes/shoes25.webp'},
  { id: 62, productName: 'CityLine Everyday Sneakers', productPrices: 49.99, img: '../img/shoes/shoes26.webp'},
  { id: 63, productName: 'HyperTrack Athletic Shoes', productPrices: 49.99, img: '../img/shoes/shoes27.webp'},
  { id: 64, productName: 'UrbanGrip Sneaker Pro', productPrices: 49.99, img: '../img/shoes/shoes28.webp'},
];



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

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});