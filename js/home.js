document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-list-home");

    fetch("https://fakestoreapi.com/products?limit=4")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                productCard.innerHTML = `
                    <a href="single_product.html?id=${product.id}"><img class="product-image" src="${product.image}" alt="${product.title}"></a>
                    <h3 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                    <img class="cart-icon" src="img/cart-icon.png" alt="cart">
                    
                `;

                productContainer.appendChild(productCard);
                // Add click event listener to cart-icons class
                const cartIcon = productCard.querySelector('.cart-icon');
                cartIcon.addEventListener('click', () => {
                    addToCart(product);
                });
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});

// Function to add item to cart and store in localStorage
function addToCart(product) {
    // Check if cart exists in localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the selected product to the cart
    cartItems.push(product);

    // Store updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
    
    // alert("Item added to cart!");

    // const cartData = JSON.parse(storedData);
    // console.log(cartData)

}
