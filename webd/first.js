let logo = document.querySelector(".logo");
let body = document.querySelector("body");
let mode = "light"; 
logo.addEventListener("click",()=>{
    if(mode=="light"){
        body.classList.add("dark");
        body.classList.remove("light");
        mode = "dark";
    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        mode = "light";
    }
})