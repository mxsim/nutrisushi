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

// Логіка для додавання/видалення страв
document.querySelector(".add-dish-btn").addEventListener("click", () => {
  // Тут буде логіка вибору страв
  alert("Функціонал вибору страв у розробці");
});

document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".dish-item").remove();
    updateTotalPrice();
  });
});

function updateTotalPrice() {
  // Логіка розрахунку загальної суми
  let total = 0;
  document.querySelectorAll(".dish-item").forEach((item) => {
    const price = parseInt(item.querySelector("p").textContent.match(/\d+/)[0]);
    const quantity = parseInt(
      item.querySelector("p").textContent.split("×")[1]
    );
    total += price * quantity;
  });
  document.querySelector(".total-price").textContent = `Всього: ₴${total}`;
}
