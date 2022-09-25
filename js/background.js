const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * (images.length-1))];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

document.querySelector(".container__seconds__column2").appendChild(bgImage);

