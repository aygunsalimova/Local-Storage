const range = document.querySelector("#customRange1");
const images = document.querySelectorAll("img");

function setStyles() {
    let opacity = localStorage.getItem("imagesOpacity");

    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = opacity;
    }
};

setStyles();

range.addEventListener("change", (e) => {
    localStorage.setItem("imagesOpacity", range.value);
})