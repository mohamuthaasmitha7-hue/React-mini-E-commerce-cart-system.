// Product list
const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
    { id: 3, name: "Headphones", price: 100 }
];

let cart = [];

// Display products
const productsDiv = document.getElementById("products");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <h3>${product.name} - $${product.price}</h3>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(productDiv);
});

// Add to cart with quantity
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1; // increase quantity
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    displayCart();
}

// Display cart
function displayCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            ${item.name} - $${item.price} × ${item.quantity}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartDiv.appendChild(itemDiv);
    });

    document.getElementById("total").innerText = `Total: $${total}`;
}

// Remove item
function removeFromCart(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1; // decrease quantity
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    displayCart();
}

// Clear cart
function clearCart() {
    cart = [];
    displayCart();
}
