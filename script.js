let verifyButton = document.getElementById("verify");
let resetButton = document.getElementById("reset");
let para = document.getElementById("para");

verifyButton.style.display = "none";
resetButton.style.display = "none";

function generateImages() {
    const images = document.querySelectorAll(".img");
    const imageClasses = ["img1", "img2", "img3", "img4", "img5"];

    const imageIndex = Math.floor(Math.random() * imageClasses.length);
    let selectedImage = imageClasses[imageIndex];
    imageClasses.splice(imageIndex, 1);

    let predefinedIndex = [0, 1, 2, 3, 4, 5];

    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * predefinedIndex.length);
        images[predefinedIndex[randomIndex]].classList.add(selectedImage);
        predefinedIndex.splice(randomIndex, 1);
    }

    for (let j = 0; j < 4; j++) {
        images[predefinedIndex[j]].classList.add(imageClasses[j]);
    }
}
generateImages();

let selectedImages = [];
const images = document.querySelectorAll(".img");

for (let j = 0; j < images.length; j++) {
    images[j].addEventListener("click", function() {
        if (this.classList.contains("selected")) {
            selectedImages.splice(selectedImages.indexOf(this.classList[1]), 1);
        } else {
            selectedImages.push(this.classList[1]);
        }
        this.classList.toggle("selected");
        if (selectedImages.length === 2) {
            verifyButton.style.display = "block";
        } else {
            verifyButton.style.display = "none";
        }
        if (selectedImages.length > 0) {
            resetButton.style.display = "block";
        } else {
            resetButton.style.display = "none";
        }
    });
}

resetButton.addEventListener("click", function() {
    selectedImages = [];
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("selected");
    }
    resetButton.style.display = "none";
    verifyButton.style.display = "none";
    para.style.display = "none";
});

verifyButton.addEventListener("click", function() {
    if (selectedImages[0] === selectedImages[1]) {
        para.innerHTML = "You are a human. Congratulations!";
    } else {
        para.innerHTML =
            "We can't verify you as a human. You selected the non-identical tiles";
    }
    para.style.display = "block";
});
