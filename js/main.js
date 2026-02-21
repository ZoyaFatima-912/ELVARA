// Load featured products on homepage
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    loadNewArrivals();
    loadReviews();
});

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;
    
    const featuredProducts = products.filter(p => p.category === 'featured');
    
    featuredContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function loadNewArrivals() {
    const newContainer = document.getElementById('new-products');
    if (!newContainer) return;
    
    const newProducts = products.filter(p => p.category === 'new');
    
    newContainer.innerHTML = newProducts.map(product => `
        <div class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function loadReviews() {
    const reviewsContainer = document.getElementById('customer-reviews');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="reviewer-image">
                <img src="${review.image}" alt="${review.name}" loading="lazy">
            </div>
            <h3>${review.name}</h3>
            <div class="rating">${getStarRating(review.rating)}</div>
            <p>"${review.comment}"</p>
        </div>
    `).join('');
}

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}