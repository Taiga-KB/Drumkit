const box = document.getElementById("box");
const img = document.getElementsByTagName("img");

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// ----------When image is clicked----------

boom.addEventListener("click" , () => {
    boomPlay.pause()
    boomPlay.currentTime = 0
    boomPlay.play();
})

clap.addEventListener("click" , () => {
    clapPlay.pause()
    clapPlay.currentTime = 0
    clapPlay.play();
})

hihat.addEventListener("click" , () => {
    hihatPlay.pause()
    hihatPlay.currentTime = 0
    hihatPlay.play();
})

kick.addEventListener("click" , () => {
    kickPlay.pause()
    kickPlay.currentTime = 0
    kickPlay.play();
})

openhat.addEventListener("click" , () => {
    openhatPlay.pause()
    openhatPlay.currentTime = 0
    openhatPlay.play();
})

ride.addEventListener("click" , () => {
    ridePlay.pause()
    ridePlay.currentTime = 0
    ridePlay.play();
})
snare.addEventListener("click" , () => {
    snarePlay.pause()
    snarePlay.currentTime = 0
    snarePlay.play();
})

tink.addEventListener("click" , () => {
    tinkPlay.pause()
    tinkPlay.currentTime = 0
    tinkPlay.play();
})

tom.addEventListener("click" , () => {
    tomPlay.pause()
    tomPlay.currentTime = 0
    tomPlay.play();
})

// ----------When specific Key is pressed----------

addEventListener("keypress" , (event) => {
    if(event.key == "w") {
        boomPlay.pause()
        boomPlay.currentTime = 0
        boomPlay.play();
        // bW.style.opacity = 1;
    }

    if(event.key == "a") {
        clapPlay.pause()
        clapPlay.currentTime = 0
        clapPlay.play();
    }

    if(event.key == "s") {
        hihatPlay.pause()
        hihatPlay.currentTime = 0
        hihatPlay.play();
    }

    if(event.key == "d") {
        kickPlay.pause()
        kickPlay.currentTime = 0
        kickPlay.play();
    }

    if(event.key == "q") {
        openhatPlay.pause()
        openhatPlay.currentTime = 0
        openhatPlay.play();
    }

    if(event.key == "r") {
        ridePlay.pause()
        ridePlay.currentTime = 0
        ridePlay.play();
    }

    if(event.key == "f") {
        snarePlay.pause()
        snarePlay.currentTime = 0
        snarePlay.play();
    }

    if(event.key == "x") {
        tinkPlay.pause()
        tinkPlay.currentTime = 0
        tinkPlay.play();
    }

    if(event.key == "z") {
        tomPlay.pause()
        tomPlay.currentTime = 0
        tomPlay.play();
    }
})