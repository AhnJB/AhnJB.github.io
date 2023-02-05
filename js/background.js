const images = ["0.JPG","1.JPG","2.JPG","3.JPG","4.JPG"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${chosenImage}')`
//const bgImages = document.createElement("img");

//bgImages.src = `img/${chosenImage}`;

//document.body.appendChild(bgImages);
