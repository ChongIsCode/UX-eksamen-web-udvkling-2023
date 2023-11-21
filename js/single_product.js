const productImage = document.querySelector("#product-image");
const productInfo = document.querySelector("#product-info");
const productExtra = document.querySelector("#product-extra");

async function fetchAndDisplaySingleProduct() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product = await response.json();

  displayProduct(product);
  console.log(product);
}

function displayProduct(product) {
  productImage.innerHTML = `
    
            <div class="product-image">
                <img
                src=${product.image}
                alt="${product.title}">
            </div>
    `;
  productInfo.innerHTML = `
            <h2 class="product-name"> ${product.title}</h2>
            <div class="product-price">$${product.price}</div>
            <div class="cart-icon-single"> <img class="cart-icon" src="img/cart-icon.png" alt="cart">  </div>
            <hr>
            <p class="product-description"><strong> Description: </strong> <br> ${product.description}</p> <br> 
            <p class="product-review"> <strong> Rating: </strong> <br>  ${product.rating.rate} </p>
    `;
  const cartIcon = document.querySelector('.cart-icon');
  cartIcon.addEventListener('click', () => {
      addToCart(product);
  });
}

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

fetchAndDisplaySingleProduct();
