const lastModified = document.querySelector("#last-modified");

const date = new Date(document.lastModified);

const formattedDate = date.toLocaleString("en-GB");

lastModified.textContent = formattedDate;