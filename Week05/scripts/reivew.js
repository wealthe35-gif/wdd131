let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount = reviewCount + 1;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;