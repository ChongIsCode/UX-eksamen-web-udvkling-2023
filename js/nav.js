document.addEventListener("DOMContentLoaded", () => {
  const filterButton = document.getElementById('filter_button');
  const productDropdown = document.getElementById('product_dropdown');

  filterButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the body
    productDropdown.classList.toggle('active');
  });

  document.body.addEventListener('click', () => {
    productDropdown.classList.remove('active');
  });

  // Close the dropdown when clicking on a link
  const dropdownLinks = document.querySelectorAll('#product_dropdown a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      productDropdown.classList.remove('active');
    });
  });
});
