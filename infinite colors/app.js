// hex color # followed by 6 characters (0-9, A-F combinations)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexValue = '#';

    // loop that generates 6 random values
    for (let i = 0; i < 6; i++) {
        hexValue += hex[getRandomNumber()];
    }

    color.textContent = hexValue;
    document.body.style.backgroundColor = hexValue;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}