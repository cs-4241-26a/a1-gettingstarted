const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.png",
    "image4.jpg",
    "image5.jpg"
];

const imageElement = document.getElementById("randomImage");
const button = document.getElementById("randomButton");

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    imageElement.classList.add("slide-out");

    setTimeout(function () {
        imageElement.style.transition = "none";

        imageElement.src = "images/" + randomImage;

        imageElement.classList.remove("slide-out");
        imageElement.classList.add("slide-in");

        imageElement.offsetWidth;

        imageElement.style.transition = "transform 0.5s ease";

        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                imageElement.classList.remove("slide-in");
            })
        })

    }, 500);
});
