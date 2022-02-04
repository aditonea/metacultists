const video = document.querySelector("#video");
const title = document.querySelector(".container-title")

// setTimeout(() => {
//     video.src = "./loop.webm"
//     video.setAttribute("loop", "true");
// }, 6000)

video.addEventListener("ended", () => {
    video.src = "./loop.webm"
    video.setAttribute("loop", "true");
})

title.style.display = "none";
setTimeout(() => {
    title.style.display = "flex";
}, 4000)
