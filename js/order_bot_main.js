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








const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

const botAvatar = "https://cdn-icons-png.flaticon.com/512/4712/4712032.png"; // Замінити при потребі
const userAvatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"; // Замінити при потребі

const botReplies = {
  привіт: "Вітаю! Чим можу допомогти?",
  "де ми": "Ми знаходимось на вул. Смачній, 12, м. Київ.",
  "де ви": "Ми знаходимось на вул. Смачній, 12, м. Київ.",
  замовлення: "Будь ласка, зареєструйтесь, щоб переглянути статус замовлення.",
  заказ: "Будь ласка, зареєструйтесь, щоб переглянути статус замовлення.",
};

function getTime() {
  const now = new Date();
  return (
    now.toLocaleDateString("uk-UA") +
    " " +
    now.toLocaleTimeString("uk-UA").slice(0, 5)
  );
}

function addMessage(from, text) {
  const div = document.createElement("div");
  div.classList.add("message", from);

  const icon = document.createElement("div");
  icon.classList.add("message-icon");
  const img = document.createElement("img");
  img.src = from === "bot" ? botAvatar : userAvatar;
  icon.appendChild(img);

  const bubble = document.createElement("div");
  bubble.classList.add("message-text");
  bubble.innerHTML = text;

  const time = document.createElement("div");
  time.classList.add("timestamp");
  time.textContent = getTime();

  bubble.appendChild(time);
  div.appendChild(icon);
  div.appendChild(bubble);
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  addMessage("user", text);
  input.value = "";

  const lower = text.toLowerCase();
  const key = Object.keys(botReplies).find((k) => lower.includes(k));
  const reply = botReplies[key] || "Вибачте, я не розумію. Спробуйте ще раз.";

  setTimeout(() => addMessage("bot", reply), 600);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

window.onload = () => {
  setTimeout(() => addMessage("bot", botReplies["привіт"]), 500);
};
