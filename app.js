const video = document.querySelector("#video");

video.play();

setTimeout(() => {
    video.src = "./loop.webm"
    video.setAttribute("loop", "true");
}, 6000)