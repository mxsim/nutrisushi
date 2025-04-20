// menu.js
import sushis from "../js/db.js";

const sushiMenuContainer = document.getElementById("sushi-menu");

// Function to create sushi item elements
function createSushiElement(sushi) {
  const sushiElement = document.createElement("div");
  sushiElement.classList.add("sushi-item");
  sushiElement.innerHTML = `
    <img src="${sushi.image}" alt="${sushi.name}">
    <h3>${sushi.name}</h3>
    <p>${sushi.description}</p>
    <button class="view-details" data-sushi-id="${sushi.name}">View Details</button>
  `;

  // Add click event listener to the "View Details" button
  sushiElement.querySelector(".view-details").addEventListener("click", () => {
    // Redirect to the sushi_description.html with the sushi name as a parameter
    window.location.href = `sushi_description.html?sushi=${encodeURIComponent(
      sushi.name
    )}`;
  });

  return sushiElement;
}

// Loop through all sushi items and append them to the page
sushis.forEach((sushi) => {
  const sushiElement = createSushiElement(sushi);
  sushiMenuContainer.appendChild(sushiElement);
});
