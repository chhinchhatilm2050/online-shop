const shortItem = [
  { id: 37, productName: 'Urban Tactical Cargo Shorts', productPrices: 39.99, img: '../img/bottoms/man1.webp'},
  { id: 38, productName: 'Streetwear Runner Shorts', productPrices: 39.99, img: '../img/bottoms/man2.webp'},
  { id: 39, productName: 'Retro Workman Denim Shorts', productPrices: 39.99, img: '../img/bottoms/man3.webp'},
  { id: 40, productName: 'Classic Black Utility Shorts', productPrices: 39.99, img: '../img/bottoms/man4.webp'},
  { id: 41, productName: 'Heavy Duty Cargo Flex', productPrices: 39.99, img: '../img/bottoms/man5.webp'},
  { id: 42, productName: 'Essential Summer Street Shorts', productPrices: 39.99, img: '../img/bottoms/man6.webp'},
  { id: 43, productName: 'Urban Sport Mesh Shorts', productPrices: 39.99, img: '../img/bottoms/man7.webp'},
  { id: 44, productName: 'Rugged Outdoor Cargo Shorts', productPrices: 39.99, img: '../img/bottoms/man8.webp'},
  { id: 45, productName: 'Casual Fit Everyday Shorts', productPrices: 39.99, img: '../img/bottoms/man9.webp'},
  { id: 46, productName: 'Washed Denim Street Shorts', productPrices: 39.99, img: '../img/bottoms/man10.webp'},
  { id: 47, productName: 'Daily Comfort Stretch Shorts', productPrices: 39.99, img: '../img/bottoms/man11.webp'},
  { id: 48, productName: 'Oversized Skate Shorts', productPrices: 39.99, img: '../img/bottoms/man12.webp'},
  { id: 49, productName: 'Vintage Loose-Fit Shorts', productPrices: 39.99, img: '../img/bottoms/man13.webp'},
  { id: 50, productName: 'Chill Mode Cotton Shorts', productPrices: 39.99, img: '../img/bottoms/man14.webp'},
  { id: 51, productName: 'Utility Street Pocket Shorts', productPrices: 39.99, img: '../img/bottoms/man15.webp'},
  { id: 52, productName: 'Relaxed Fit Summer Shorts', productPrices: 39.99, img: '../img/bottoms/man16.webp'},
  { id: 53, productName: 'Outdoor Comfort Hiking Shorts', productPrices: 39.99, img: '../img/bottoms/man17.webp'},
  { id: 54, productName: 'Street Classic Knee Shorts', productPrices: 39.99, img: '../img/bottoms/man18.webp'},
  { id: 55, productName: 'Premium Twill Cargo Shorts', productPrices: 39.99, img: '../img/bottoms/man19.webp'},
  { id: 56, productName: 'Urban Fit Stretch Chinos', productPrices: 39.99, img: '../img/bottoms/man20.webp'},
  { id: 57, productName: 'Loose Fit Skater Shorts', productPrices: 39.99, img: '../img/bottoms/man21.webp'},
  { id: 58, productName: 'Breathable Mesh Sport Shorts', productPrices: 39.99, img: '../img/bottoms/man22.webp'},
  { id: 59, productName: 'Retro Canvas Cargo Shorts', productPrices: 39.99, img: '../img/bottoms/man23.webp'},
  { id: 60, productName: 'Essential Outdoor Street Shorts', productPrices: 39.99, img: '../img/bottoms/man24.webp'},
];
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

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
