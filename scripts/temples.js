const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  
  if (navMenu.classList.contains("open")) {
    menuToggle.textContent = "❌";
  } else {
    menuToggle.textContent = "☰";
  }
});

const temples = [
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" },
  { name: "San Diego California", imgUrl: "images/temple1.jpg" }
];

const gridContainer = document.getElementById("temple-grid");

temples.forEach(temple => {
  const figureHTML = `
    <figure>
      <img src="${temple.imgUrl}" alt="${temple.name}" loading="lazy">
      <figcaption>${temple.name}</figcaption>
    </figure>
  `;
  gridContainer.innerHTML += figureHTML;
});

const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
