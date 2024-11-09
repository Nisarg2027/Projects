let button = document.querySelector("button");
let video = document.querySelector("video");
let isplaying = true;
let play_show = document.querySelector(".play_show");
button.addEventListener("click",()=>{
    if(isplaying){
        video.pause();
        play_show.classList.add("pause_show");
        isplaying=false;
    }
    else{
        video.play();

        play_show.classList.remove("pause_show");
        isplaying=true;
    }
})
