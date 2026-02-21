# ELVARA - Modern E-commerce Clothing Website

![ELVARA Banner](https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## 📖 Overview

ELVARA is a modern, responsive e-commerce website designed for a contemporary clothing brand. Built with pure HTML, CSS, and JavaScript, this project demonstrates a fully functional online store with product listings, shopping cart functionality, and a seamless checkout process.

## 🎨 Color Palette

- **Primary Dark**: `#254F22` - Navigation, headers, primary elements
- **Accent Charcoal**: `#A03A13` - Prices, secondary accents
- **Accent Terracotta**: `#F5824A` - CTAs, interactive elements
- **Accent Cream**: `#EDE4C2` - Backgrounds, cards

## ✨ Features

### Homepage
- Hero section with captivating background image
- Featured products showcase
- New arrivals section
- Customer reviews carousel
- Responsive navigation with mobile hamburger menu

### Products Page
- Grid layout displaying all products
- Product cards with images, names, prices
- Quick "Add to Cart" functionality
- Click through to detailed product view

### Product Detail Page
- Multiple product image gallery
- Size and color selection options
- Detailed product descriptions
- Customer reviews section
- Add to cart with selected options

### Shopping Cart
- View all added items
- Update quantities
- Remove items
- Real-time price calculations
- Persistent storage using localStorage

### Checkout Process
- Shipping information form
- Payment method selection
- Order summary
- Session storage for order details
- Order confirmation

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized layouts
- Hamburger menu for mobile navigation
- Flexible grid systems
- Optimized images for all devices

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Flexbox, Grid, animations, and media queries
- **JavaScript** - ES6+ features, DOM manipulation
- **LocalStorage** - Cart persistence
- **SessionStorage** - Order information storage
- **Unsplash API** - High-quality product and lifestyle images

## 📁 Project Structure
chic-mode/
│
├── index.html # Homepage
├── products.html # Products listing page
├── product-detail.html # Individual product page
├── cart.html # Shopping cart page
├── checkout.html # Checkout page
│
├── css/
│ └── styles.css # Main stylesheet
│
├── js/
│ ├── data.js # Shared product data and utilities
│ ├── main.js # Homepage functionality
│ ├── products.js # Products page functionality
│ ├── product-detail.js # Product detail page functionality
│ ├── cart.js # Cart page functionality
│ └── checkout.js # Checkout page functionality
│
└── README.md # Project documentation

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZoyaFatima-912/ELVARA.git
Navigate to project directory

bash
cd chic-mode
Open with live server

Using VS Code Live Server extension

Or simply open index.html in your browser

No build process or dependencies required! The project runs entirely in the browser.

💻 Usage Guide
Browsing Products
Navigate through the homepage to see featured items

Click "Shop" to view all products

Use the navigation menu to explore different sections

Making a Purchase
Browse products and click on items of interest

Select size and color options

Click "Add to Cart"

View cart by clicking the cart icon

Adjust quantities or remove items as needed

Proceed to checkout

Fill in shipping information

Select payment method

Place order

📱 Responsive Breakpoints
Mobile: Up to 480px

Tablet: 481px to 768px

Desktop: 769px and above

🔧 Customization
Adding New Products
Edit the products array in js/data.js to add new products with all required fields.

Modifying Colors
Update the CSS variables in css/styles.css to change the color scheme:

css
:root {
    --primary-dark: #254F22;
    --accent-charcoal: #A03A13;
    --accent-terracotta: #F5824A;
    --accent-cream: #EDE4C2;
}
📸 Image Credits
All images are sourced from Unsplash and are free to use for commercial and non-commercial purposes.

🌟 Future Enhancements
User authentication system

Product search functionality

Category filtering

Wishlist feature

Product ratings and reviews submission

Payment gateway integration

Order tracking system

Email confirmation for orders

📱 Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Opera (latest)

Mobile browsers (iOS Safari, Chrome for Android)

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

👏 Acknowledgments
Unsplash for the beautiful imagery

The open-source community for inspiration

Modern fashion e-commerce sites for design inspiration
