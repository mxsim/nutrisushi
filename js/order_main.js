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
