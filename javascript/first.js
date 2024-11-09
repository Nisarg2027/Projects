let btn1 = document.querySelector(".btn1");
let body = document.querySelector("body");
let mode = "light"; 
btn1.addEventListener("click",()=>{
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