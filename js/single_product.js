const productImage = document.querySelector('#product-image');
const productInfo = document.querySelector('#product-info');
const productExtra = document.querySelector('#product-extra');
 
 
async function fetchAndDisplaySingleProduct() {
    const productId = new URLSearchParams(window.location.search).get("id");
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
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
    `
    productInfo.innerHTML = `
            <h2 class="product-name"> ${product.title}</h2>
            <div class="product-price">$${product.price}</div>
    `
    productExtra.innerHTML = `
            <p class="product-description"><strong> Description: </strong> <br> <br> ${product.description}</p>
            <p class="product-review"> <strong> Rating: </strong> <br> <br> ${product.rating.rate} </p>
    `
    
}
 
fetchAndDisplaySingleProduct();