// Category Selection
const mainCategories = document.querySelectorAll("#mainCategories .nav-item");
const subCategories = document.getElementById("subCategories");

mainCategories.forEach((category) => {
  category.addEventListener("click", () => {
    mainCategories.forEach((c) => c.classList.remove("active"));
    category.classList.add("active");
    subCategories.classList.add("show");
  });
});

// Subcategory Selection
const subNavItems = document.querySelectorAll(".sub-nav-item");
subNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    subNavItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    // Here you would filter the menu items
  });
});

// Filter Toggle
const filterBtn = document.getElementById("filterBtn");
const filterOptions = document.getElementById("filterOptions");

filterBtn.addEventListener("click", () => {
  filterOptions.classList.toggle("show");
  filterBtn.textContent = filterOptions.classList.contains("show")
    ? "Сховати фільтри"
    : "Фільтр";
});

// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    // Here you would apply the filters
  });
});

// Price Range
const priceRange = document.getElementById("priceRange");
const maxPriceValue = document.getElementById("maxPriceValue");

priceRange.addEventListener("input", () => {
  maxPriceValue.textContent = `${priceRange.value} грн`;
  // Here you would filter by price
});

// Pagination
const pageButtons = document.querySelectorAll(".page-btn:not(.dots)");
pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".page-btn.active").classList.remove("active");
    button.classList.add("active");
    // Here you would load the appropriate page
  });
});

// Price Range
// Price Range
const currentPriceValue = document.getElementById("currentPriceValue");

priceRange.addEventListener("input", () => {
  currentPriceValue.textContent = `${priceRange.value} грн`;
  // Тут можна додати фільтрацію за ціною
});
