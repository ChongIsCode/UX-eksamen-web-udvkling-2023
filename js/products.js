document.addEventListener("DOMContentLoaded", () => {
    const productListDiv = document.getElementById('product-list');
    const categoryLinks = document.querySelectorAll('#product_dropdown a');
    const filterButton = document.getElementById('filter_button');

    function fetchProducts(category) {
        let apiUrl = 'https://fakestoreapi.com/products';

        // If a specific category is selected, update the API URL
        if (category !== 'All products') {
            apiUrl += `/category/${category.toLowerCase()}`;
        }

        // Use fetch to get data from the API based on the selected category
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Clear existing products
                productListDiv.innerHTML = '';

                // Create and append product cards to productListDiv
                data.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');

                    productCard.innerHTML = `
                        <a href="single_product.html?id=${product.id}">
                            <img class="product-image" src="${product.image}" alt="${product.title}">
                        </a>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-price">$${product.price}</p>
                        <img class="cart-icon" src="img/cart-icon.png" alt="cart">
                    `;

                    productListDiv.appendChild(productCard);
                    // Add click event listener to cart-icons class
                    const cartIcon = productCard.querySelector('.cart-icon');
                    cartIcon.addEventListener('click', () => {
                        addToCart(product);
                    });
                });

                // Update filter button text with the selected category
                filterButton.textContent = category;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Fetch all products on page load
    fetchProducts('All products');

    // Add click event listeners to category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.textContent;
            fetchProducts(category);
        });
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
});
