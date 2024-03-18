const products = [
  { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
  { id: 2, name: "Product 2", price: 20, image: "product2.jpg" },
  { id: 3, name: "Product 3", price: 30, image: "product3.jpg" },
];

function displayProducts() {
  const productsContainer = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productsContainer.appendChild(productElement);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
}

function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    cartItemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      `;
    cartContainer.appendChild(cartItemElement);
  });
}

displayProducts();
