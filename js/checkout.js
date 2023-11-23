document.addEventListener("DOMContentLoaded", () => {
    const cost_section = document.querySelector(".total-cost");

    let cart_sum = localStorage.getItem("cart Sum");
    cart_sum = parseFloat(cart_sum);
    cart_sum += 5;

    cost_section.innerHTML = `$${cart_sum}`;
});



