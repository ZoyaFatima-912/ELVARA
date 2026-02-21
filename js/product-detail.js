// Load product details
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetail();
});

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    renderProductDetail(product);
}

function renderProductDetail(product) {
    const container = document.getElementById('product-detail');
    
    container.innerHTML = `
        <div class="product-gallery">
            <div class="gallery-main">
                <img src="${product.images[0]}" alt="${product.name}" id="mainImage">
            </div>
            ${product.images.slice(1).map((img, index) => `
                <div class="gallery-thumb" onclick="updateMainImage('${img}')">
                    <img src="${img}" alt="${product.name}">
                </div>
            `).join('')}
        </div>
        <div class="product-details">
            <h1>${product.name}</h1>
            <div class="price">${formatPrice(product.price)}</div>
            <div class="product-description">${product.description}</div>
            
            <div class="options">
                <h3>Size</h3>
                <div class="size-options" id="sizeOptions">
                    ${product.sizes.map(size => `
                        <button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>
                    `).join('')}
                </div>
                
                <h3>Color</h3>
                <div class="color-options" id="colorOptions">
                    ${product.colors.map(color => `
                        <button class="color-btn" data-color="${color}" onclick="selectColor(this, '${color}')"></button>
                    `).join('')}
                </div>
            </div>
            
            <button class="add-to-cart-large" onclick="addToCartFromDetail(${product.id})">Add to Cart</button>
            
            <div class="product-reviews">
                <h3>Customer Reviews</h3>
                ${product.reviews.map(review => `
                    <div class="review-item">
                        <div class="reviewer">${review.user}</div>
                        <div class="review-rating">${getStarRating(review.rating)}</div>
                        <p>${review.comment}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Set default selections
    setTimeout(() => {
        const firstSize = document.querySelector('.size-btn');
        const firstColor = document.querySelector('.color-btn');
        if (firstSize) selectSize(firstSize, product.sizes[0]);
        if (firstColor) selectColor(firstColor, product.colors[0]);
    }, 100);
}

let selectedSize = 'M';
let selectedColor = 'Black';

function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
}

function selectColor(btn, color) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedColor = color;
}

function updateMainImage(src) {
    document.getElementById('mainImage').src = src;
}

function addToCartFromDetail(productId) {
    addToCart(productId, selectedSize, selectedColor);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}