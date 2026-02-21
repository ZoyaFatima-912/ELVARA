// Render cart page
document.addEventListener('DOMContentLoaded', function() {
    renderCart();
});

function renderCart() {
    const container = document.getElementById('cart-container');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <button class="continue-shopping" onclick="window.location.href='products.html'">Continue Shopping</button>
            </div>
        `;
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    container.innerHTML = `
        <div class="cart-items">
            ${cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>Size: ${item.size} | Color: ${item.color}</p>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <span class="remove-item" onclick="removeFromCart(${index})">🗑️</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div class="summary-row">
                <span>Tax (8%)</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total</span>
                <span>${formatPrice(total)}</span>
            </div>
            <button class="checkout-btn" onclick="proceedToCheckout()">Proceed to Checkout</button>
            <button class="continue-shopping" onclick="window.location.href='products.html'" style="margin-top: 1rem; width: 100%;">Continue Shopping</button>
        </div>
    `;
}

function proceedToCheckout() {
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        showNotification('Your cart is empty!');
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}