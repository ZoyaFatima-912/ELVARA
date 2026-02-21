// Render checkout page
document.addEventListener('DOMContentLoaded', function() {
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    renderCheckout();
});

function renderCheckout() {
    const container = document.getElementById('checkout-page');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    // Save order summary to session storage
    sessionStorage.setItem('orderSummary', JSON.stringify({ subtotal, shipping, tax, total }));
    
    container.innerHTML = `
        <div class="checkout-form">
            <h2>Shipping Information</h2>
            <form id="checkoutForm" onsubmit="placeOrder(event)">
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                
                <div class="form-group">
                    <label for="address">Street Address</label>
                    <input type="text" id="address" required>
                </div>
                
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" required>
                </div>
                
                <div class="form-group">
                    <label for="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" required>
                </div>
                
                <div class="form-group">
                    <label for="country">Country</label>
                    <select id="country" required>
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                    </select>
                </div>
                
                <h2>Payment Method</h2>
                <div class="payment-options">
                    <label class="payment-option">
                        <input type="radio" name="payment" value="credit" checked>
                        Credit Card
                    </label>
                    <label class="payment-option">
                        <input type="radio" name="payment" value="paypal">
                        PayPal
                    </label>
                    <label class="payment-option">
                        <input type="radio" name="payment" value="apple">
                        Apple Pay
                    </label>
                </div>
                
                <button type="submit" class="place-order-btn" style="margin-top: 20px;">Place Order</button>
            </form>
        </div>
        
        <div class="order-summary">
            <h3>Order Summary</h3>
            ${cart.map(item => `
                <div class="checkout-item">
                    <span>${item.name} (${item.quantity}x)</span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                </div>
            `).join('')}
            <div class="checkout-item">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="checkout-item">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div class="checkout-item">
                <span>Tax (8%)</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="checkout-total">
                <span>Total</span>
                <span>${formatPrice(total)}</span>
            </div>
        </div>
    `;
}

function placeOrder(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zipCode').value,
        country: document.getElementById('country').value,
        payment: document.querySelector('input[name="payment"]:checked').value
    };
    
    // Save to session storage
    sessionStorage.setItem('orderDetails', JSON.stringify(formData));
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message and redirect
    alert('Order placed successfully! Thank you for shopping with CHIC·MODE.');
    window.location.href = 'index.html';
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}