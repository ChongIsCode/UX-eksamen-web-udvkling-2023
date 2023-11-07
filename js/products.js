document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-list");

    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-description">${product.description}</p>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});