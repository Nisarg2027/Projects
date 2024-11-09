let spacing = document.querySelector(".spacing");
let blurvalue = document.querySelector(".blur");
let color = document.querySelector(".color");
let imgcont = document.querySelector(".imgcont");
color.value = '#FFA500';
spacing.value = `${window.getComputedStyle(imgcont).padding}`.split('p')[0]/2;

blurvalue.addEventListener("input",()=>{
    imgcont.querySelector("img").style.filter = `blur(${blurvalue.value / 5}px)`;
})

color.addEventListener("input",()=>{
    imgcont.style.backgroundColor = color.value;
})

spacing.addEventListener("input",()=>{
    imgcont.style.padding = `${spacing.value * 2}px`;
})