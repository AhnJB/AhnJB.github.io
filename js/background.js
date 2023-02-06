const images = ["0.PNG","1.PNG","2.PNG","3.PNG","4.PNG"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${chosenImage}')`
//const bgImages = document.createElement("img");

//bgImages.src = `img/${chosenImage}`;

//document.body.appendChild(bgImages);
