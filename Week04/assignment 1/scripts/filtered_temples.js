const menuButton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuButton.textContent = menu.classList.contains("open") ? "❌" : "☰";
});

const templeImageLink = "images/temples.jpg";


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: templeImageLink
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: templeImageLink
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: templeImageLink
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: templeImageLink
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: templeImageLink
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: templeImageLink
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: templeImageLink
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: templeImageLink
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: templeImageLink
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: templeImageLink
    }
];

const templeGrid = document.getElementById("temple-grid");
const heading = document.querySelector("main h2");

function displayTemples(templeList) {
    templeGrid.innerHTML = "";
    templeList.forEach(function (temple) {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;

        templeGrid.appendChild(card);
    });
}

displayTemples(temples);

const links = document.querySelectorAll("#nav-menu a");

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const filter = link.textContent.trim();
        let filteredTemples = temples;

        if (heading) {
            heading.textContent = filter;
        }

        if (filter === "Old") {
            filteredTemples = temples.filter(function (temple) {
                const year = parseInt(temple.dedicated.split(","));
                return year < 1900;
            });
        } else if (filter === "New") {
            filteredTemples = temples.filter(function (temple) {
                const year = parseInt(temple.dedicated.split(","));
                return year > 2000;
            });
        } else if (filter === "Large") {
            filteredTemples = temples.filter(function (temple) {
                return temple.area > 90000;
            });
        } else if (filter === "Small") {
            filteredTemples = temples.filter(function (temple) {
                return temple.area < 10000;
            });
        }

        displayTemples(filteredTemples);
    });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
