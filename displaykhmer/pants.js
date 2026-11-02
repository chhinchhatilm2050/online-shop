const pantsItem = [
  { id: 37, productName: 'Streetflex Cargo Pants', productPrices: 69.99, img: '../img/pants/pants1.webp'},
  { id: 38, productName: 'Urban Drift Joggers', productPrices: 69.99, img: '../img/pants/pants2.webp'},
  { id: 39, productName: 'Shadowline Tactical Pants', productPrices: 69.99, img: '../img/pants/pants3.webp'},
  { id: 40, productName: 'Midnight Runner Sweatpants', productPrices: 69.99, img: '../img/pants/pants4.webp'},
  { id: 41, productName: 'Rebel Core Track Pants', productPrices: 69.99, img: '../img/pants/pants5.webp'},
  { id: 42, productName: 'Neon Motion Joggers', productPrices: 69.99, img: '../img/pants/pants6.webp'},
  { id: 43, productName: 'Stealth Force Cargo', productPrices: 69.99, img: '../img/pants/panst7.webp'},
  { id: 44, productName: 'Retro Edge Street Pants', productPrices: 69.99, img: '../img/pants/pants8.webp'},
  { id: 45, productName: 'Velocity Flex Pants', productPrices: 69.99, img: '../img/pants/pants9.webp'},
  { id: 46, productName: 'Heatwave Sport Joggers', productPrices: 69.99, img: '../img/pants/pants10.webp'},
  { id: 47, productName: 'Alpha Strike Cargo', productPrices: 69.99, img: '../img/pants/pants11.webp'},
  { id: 48, productName: 'Urbanwave Relaxed Fit', productPrices: 69.99, img: '../img/pants/pants12.webp'},
  { id: 49, productName: 'Turbo Motion Pants', productPrices: 69.99, img: '../img/pants/pants13.webp'},
  { id: 50, productName: 'Skyfall Slim Fit', productPrices: 69.99, img: '../img/pants/pants14.webp'},
  { id: 51, productName: 'Ranger Utility Pants', productPrices: 69.99, img: '../img/pants/pants15.webp'},
  { id: 52, productName: 'Hypercore Street Joggers', productPrices: 69.99, img: '../img/pants/pants16.webp'},
  { id: 53, productName: 'Driftline Cargo Pants', productPrices: 69.99, img: '../img/pants/pants17.webp'},
  { id: 54, productName: 'Chromatic Runner Pants', productPrices: 69.99, img: '../img/pants/pants18.webp'},
  { id: 55, productName: 'Streetwolf Athletic Pants', productPrices: 69.99, img: '../img/pants/pants19.webp'},
  { id: 56, productName: 'Nova Flex Track Pants', productPrices: 69.99, img: '../img/pants/pants20.webp'},
];

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
                    <p class="product-price">$${item.productPrices} <span class="khmer-nabar">ដុល្លារ</span></p>
                  </div>
                  <div button-product>
                    <button class="add-cart-btn">
                    <i class="ri-shopping-cart-2-line"></i><span class="khmer-nabar" style="font-size: 14.4px;">ទិញផលិតផល</span>
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
