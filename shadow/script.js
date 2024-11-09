let body = document.querySelector("body");

body.addEventListener("mousemove",(e)=>{

    let x = e.offsetX;
    let y = e.offsetY;
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    let four = document.querySelector(".four");
    // console.log(e.target);
    let walk = 100;
    if(e.target != this){
        // console.log("yea");
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    let width = document.querySelector(".container").offsetWidth;
    let height = document.querySelector(".container").offsetHeight;
    x = Math.floor((x/width*walk) - (walk/2));
    y = Math.floor(y/height*walk - walk/2);
    console.log(x , y);
    
    one.style.textShadow =  `rgba(100, 43, 43, 1) ${x*2}px ${y*2}px 0px`; 
    two.style.textShadow =  `${y*2}px ${x*2}px 0px rgb(71, 43, 100)`; 
    three.style.textShadow =  `${y*-2}px ${x*-2}px 0 rgb(87, 100, 43)`; 
    four.style.textShadow =  `${x*-2}px ${y*-2}px 0px rgb(174, 172, 44)`; 


})