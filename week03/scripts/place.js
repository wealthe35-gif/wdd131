const lastModified = document.querySelector("#last-modified");
lastModified.textContent = document.lastModified;

const temperature = 30;
const windSpeed = 12;

const windChill = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    let result = 13.12 + (0.6215 * temperature)
        - (11.37 * Math.pow(windSpeed, 0.16))
        + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    windChill.textContent = result.toFixed(1) + " °C";
} else {
    windChill.textContent = "N/A";
}
