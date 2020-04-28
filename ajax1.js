const dogButton = document.getElementById("generate_dog");
let url2 = "https://dog.ceo/api/breeds/list";
let url = "https://dog.ceo/api/breed/rottweiler/images/random";
let url3 = `https://dog.ceo/api/${this.value}/rottweiler/images/random`;
const div1 = document.getElementById("img_contain");
let img = document.createElement("img");
let dropDown = document.getElementById("drop");

console.log($.get(url2));
$.get(url2)
    .then((data) => {
        for (let i = 0; i < data.message.length; i++) {
            let newOption = document.createElement("option");
            newOption.setAttribute("value", data.message[i]);
            newOption.textContent = data.message[i];
            dropDown.appendChild(newOption);
        }
    })

dropDown.addEventListener("change", (e) => {
    let value = e.target.value;
    $.get(`https://dog.ceo/api/breed/${value}/images/random`)

    .then((data) => {
        img.setAttribute("src", data.message);
        div1.appendChild(img);
    })
})
// can write function this way too:
// dropDown.addEventListener("change", function () {
//     let value = e.target.value;
//     $.get(`https://dog.ceo/api/breed/${value}/images/random`)

//     .then((data) => {
//         img.setAttribute("src", data.message);
//         div1.appendChild(img);
//     })
// })

dogButton.addEventListener("click", () => {
    dogButton.textContent = "Generating Dog..."
    $.get(url)
        .then((data) => {
            img.setAttribute("src", data.message);
            div1.appendChild(img);
            dogButton.textContent = "See Rottweiler Pics";
        })    
})