
let cart_sum = 0;

document.addEventListener("DOMContentLoaded", () => {
    const productTable = document.querySelector(".cart-table");
    const cardTotal = document.querySelector("#card-total");
    
    
    const cart = localStorage.getItem("cart");
    const cartData = JSON.parse(cart);
    
    // create each product in the cart on the page
    cartData.forEach((product) => {
        const productContainer = document.createElement("tr");

        // template of each product
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
        productTable.appendChild(productContainer);

        // adds each products price to a total sum
        cart_sum += product.price;
    });
    cardTotal.innerHTML = `$${cart_sum}`;
});

function goToCheckout() {
    if (cart_sum == 0) {
        alert("You need products in your cart to proceed to checkout");
        return;
    }
    // save the sum in localstorage for checkout
    localStorage.setItem("cart_sum", cart_sum);
    window.location.href = "checkout.html";
}