const dogButton = document.getElementById("generate_dog");
let url = "https://dog.ceo/api/breed/rottweiler/images/random";
const div1 = document.getElementById("img_contain");
let img = document.createElement("img");


dogButton.addEventListener("click", () => {
    dogButton.textContent = "Generating Dog..."
    $.get(url)
        .then((data) => {
            img.setAttribute("src", data.message);
            div1.appendChild(img);
        })
})