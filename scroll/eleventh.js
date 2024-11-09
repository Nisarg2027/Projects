let button = document.querySelectorAll("button");
let home = document.querySelector(".home");
let aboutus = document.querySelector(".aboutus");
let domain = document.querySelector(".domain");
let why = document.querySelector(".why");
button.forEach(button=>{
    button.addEventListener("click",()=>{
        let text = button.id;
        if(text == "home"){
            home.scrollIntoView({ behavior: 'smooth' });
        }
        else if(text=="aboutus"){
            aboutus.scrollIntoView({ behavior: 'smooth' });
        }
        else if(text=="domain"){
            domain.scrollIntoView({ behavior: 'smooth' });
        }
        else if(text=="why"){
            why.scrollIntoView({ behavior: 'smooth' });
        }

    })

})
let header = document.querySelector(".header");
let header3 = document.querySelector(".header3");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
        header.classList.add("header2");
        header3.classList.add("header2");

    }
    else{
        header.classList.remove("header2");
        header3.classList.remove("header2");
    }

})

let option = document.querySelector(".option");
let new_height = document.querySelector(".new_height")
let newbutton = document.querySelector(".newbutton");
let newheight = false;

option.addEventListener("click",()=>{
    if(newheight==false){
        newbutton.classList.add("new_height");
        
        newheight=true;
    }   
    else{
        newbutton.classList.remove("new_height");
        newheight=false;
    }
})
