document.addEventListener("DOMContentLoaded", () => {
    const productTable = document.querySelector(".cart-table");
    const cardTotal = document.querySelector("#card-total");
    let cart_sum = 0;
    
    const cart = localStorage.getItem("cart");
    const cartData = JSON.parse(cart);
    
    cartData.forEach((product) => {
        const productContainer = document.createElement("tr");

        productContainer.innerHTML = `
            <td>
                <div class="table-product">
                    <img class="table-img" src="${product.image}" alt="${product.title}">
                    <p>${product.title}</p>
                </div>
            </td>
            <td><div class="table-qty">1</div></td>
            <td><div class="table-price">$${product.price}</div></td>
        `;
        cart_sum += product.price;
        productTable.appendChild(productContainer);
    });

cardTotal.innerHTML = "$".cart_sum;
});