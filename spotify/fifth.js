console.log("hello");
let songindex = 0;
let masterplay = document.querySelector("#masterplay");
let progressbar = document.querySelector(".progressbar");
let audioelement = new Audio("song1.mp3");
let songinfo = document.querySelector(".songinfo");
let songs = [
    {songname: "one" , filePath: "song1.mp3" , coverPath: "img1.jpg"},
    {songname: "two" , filePath: "song2.mp3" , coverPath: "img2.png"},
    {songname: "three" , filePath: "song1.mp3" , coverPath: "img1.jpg"},
    {songname: "four" , filePath: "song2.mp3" , coverPath: "img2.png"},
    {songname: "five" , filePath: "song1.mp3" , coverPath: "img1.jpg"},
    {songname: "six" , filePath: "song2.mp3" , coverPath: "img2.png"},
    {songname: "seven" , filePath: "song1.mp3" , coverPath: "img1.jpg"},
]
document.querySelectorAll(".cover").forEach((element,i)=>{
    // console.log(element,i);
    // audioelement.src = songs[i].filePath;    
    // console.log((audioelement.duration));
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector(".songname").innerText = songs[i].songname;
    // element.querySelector(".duration").innerText = audioelement.duration;
})

audioelement.addEventListener("timeupdate",()=>{
    progressbar.value = audioelement.currentTime/audioelement.duration *100; 
})
progressbar.addEventListener("change" ,()=>{
    audioelement.currentTime = progressbar.value * audioelement.duration / 100;
})
function makealloff(){
    document.querySelectorAll(".miniplay").forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        songinfo.innerText = "";
    })
}
let i = 0 ;
document.querySelectorAll(".miniplay").forEach((element)=>{
    element.addEventListener("click" , ()=>{
        makealloff();
        audioelement.src = songs[i%7].filePath;
        console.log(i%7);
        console.log(audioelement)
            audioelement.play();
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause"); 
            element.classList.remove("fa-play");
            element.classList.add("fa-pause"); 
        songinfo.classList.add("hide");
        songinfo.innerText = songs[i%7].songname;
        i++;
    })
})
masterplay.addEventListener("click",()=>{
    console.log(audioelement);  
    if(audioelement.paused || audioelement.currentTime <=0){
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause"); 
    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play"); 
    }
    songinfo.classList.add("hide");
    makealloff();
    
})