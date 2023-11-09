document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-list");
 
    fetch("https://fakestoreapi.com/products")
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
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});