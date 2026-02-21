// Product Data
const products = [
    {
        id: 1,
        name: "Elegant Maxi Dress",
        price: 129.99,
        category: "featured",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTa_g4kd6yINFzujNC6b0bofClLJOZYCg6g&s",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        ],
        description: "A stunning maxi dress perfect for special occasions. Made from sustainable materials with a flattering fit that accentuates your silhouette. Features a elegant design that transitions seamlessly from day to night.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "White", "Brown"],
        reviews: [
            { user: "Sarah J.", rating: 5, comment: "Absolutely beautiful dress! The fit is perfect and the material feels luxurious." },
            { user: "Emily R.", rating: 4, comment: "Love the fabric and design. Runs a bit small, so I'd recommend sizing up." },
            { user: "Jessica M.", rating: 5, comment: "Received so many compliments! Will definitely buy more colors." }
        ]
    },
    {
        id: 2,
        name: "Classic Blazer",
        price: 189.99,
        category: "featured",
        images: [
            "https://www.almas.pk/cdn/shop/files/AJ38_4.jpg?v=1746433166",
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        description: "Timeless blazer that transitions from day to night effortlessly. Tailored fit with premium fabric that maintains its shape. Perfect for both professional settings and casual chic looks.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Blue"],
        reviews: [
            { user: "Michael K.", rating: 5, comment: "Excellent quality and fit. The fabric is substantial and drapes beautifully." },
            { user: "David L.", rating: 4, comment: "Great blazer, very versatile. Sleeves were a bit long for me." }
        ]
    },
    {
        id: 3,
        name: "Summer Linen Shirt",
        price: 79.99,
        category: "new",
        images: [
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        description: "Breathable linen shirt perfect for warm weather. Made from 100% European linen that gets softer with each wash. Relaxed fit with a modern silhouette.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Blue"],
        reviews: [
            { user: "James W.", rating: 5, comment: "Perfect summer shirt! Lightweight and breathable." },
            { user: "Robert T.", rating: 4, comment: "Great quality, wrinkles a bit but that's expected with linen." }
        ]
    },
    {
        id: 4,
        name: "Leather Crossbody Bag",
        price: 149.99,
        category: "new",
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        description: "Handcrafted leather bag with adjustable strap. Made from full-grain leather that develops a beautiful patina over time. Features multiple compartments for organized storage.",
        sizes: ["One Size"],
        colors: ["Brown", "Black"],
        reviews: [
            { user: "Anna M.", rating: 5, comment: "Beautiful craftsmanship! The leather is buttery soft." },
            { user: "Sophie W.", rating: 5, comment: "Perfect size for daily use. Love the quality!" }
        ]
    },
    {
        id: 5,
        name: "Knit Sweater",
        price: 89.99,
        category: "new",
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        description: "Cozy knit sweater perfect for layering. Made from a soft blend of cotton and cashmere. Features a relaxed fit and ribbed details at cuffs and hem.",
        sizes: ["S", "M", "L"],
        colors: ["Cream", "Brown"],
        reviews: [
            { user: "Emma B.", rating: 5, comment: "So soft and cozy! Perfect for chilly days." }
        ]
    },
    {
        id: 6,
        name: "Tailored Trousers",
        price: 119.99,
        category: "featured",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        description: "Modern tailored trousers with a comfortable fit. Features a high-waisted design with pleats and a straight leg. Perfect for office to evening transitions.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Navy"],
        reviews: [
            { user: "Patricia L.", rating: 4, comment: "Great fit and very flattering. Runs true to size." }
        ]
    }
];

// Review Data
const reviews = [
    {
        name: "Jessica Parker",
        image: "https://images.unsplash.com/photo-1494790108777-64fd5f9a7b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        rating: 5,
        comment: "Absolutely love my purchase! The quality is exceptional and the fit is perfect. Will definitely be shopping here again."
    },
    {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        rating: 4,
        comment: "Great style and comfortable materials. The shipping was fast and customer service was helpful with sizing questions."
    },
    {
        name: "Sophie Williams",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 5,
        comment: "The attention to detail is amazing. My new favorite brand! The pieces are versatile and timeless."
    },
    {
        name: "Alex Rodriguez",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        rating: 5,
        comment: "Excellent quality and modern designs. The fabric feels premium and the construction is solid."
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(element => {
        if (element) element.textContent = totalItems;
    });
}

function addToCart(productId, size = 'M', color = 'Black') {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.size === size && item.color === color);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: size,
            color: color,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item added to cart!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Utility functions
function formatPrice(price) {
    return '$' + price.toFixed(2);
}

function getStarRating(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);