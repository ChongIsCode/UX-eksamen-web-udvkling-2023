document.addEventListener("DOMContentLoaded", () => {

    const cost_section = document.querySelector(".total-cost");
    let cart_sum = localStorage.getItem("cart_sum");
    cart_sum = parseFloat(cart_sum);
    cart_sum += 5;

    cost_section.innerHTML = `$${cart_sum}`;

    const checkout_form = document.querySelector("#checkout-form");
    checkout_form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});

function confirm_purchase() {
    alert("Purchase Confirmed");
    localStorage.removeItem("cart");
    localStorage.removeItem("cart_sum");
    window.location.href = "home.html";
}