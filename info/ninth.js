const reviews = [
    {
        id: 1, 
        name : "Anuj",
        job : "Gay",
        img: "anuj.png",
        text: "Can lift pen with his ass"
    },
    {
        id: 2, 
        name : "Atishay",
        job : "Is Jain",
        img: "atishay.png",
        text: "Watches pain jorn"
    },
    {
        id: 3, 
        name : "Mahatva",
        job : "Thugshaker",
        img: "mahatva.png",
        text: "Likes Ojasv"
    },
    {
        id: 4, 
        name : "Taha",
        job : "Terrorist",
        img: "taha.png",
        text: "Terrors everyone"
    },
    {
        id: 5, 
        name : "Rathore",
        job : "Black",
        img: "rathore.png",
        text: "knows how to code in binary"
    },  
]
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let sur = document.querySelector(".surprise");
let count = 0;
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let job = document.querySelector(".ocupation");
let text = document.querySelector(".detail");
next.addEventListener("click",()=>{
    count = (count+1)%5;
    console.log(count);
    let realcount = count;
    if(count<0){
        realcount = -1*count;
    }
    name.innerText = reviews[realcount].name;
    job.innerText = reviews[realcount].job;
    text.innerText = reviews[realcount].text;
    image.src = reviews[realcount].img;
})
prev.addEventListener("click",()=>{
    count = (count-1)%5;
    let realcount = count;
    if(count<0){
        realcount = -1*count;
    }
    console.log(count);
    name.innerText = reviews[realcount].name;
    job.innerText = reviews[realcount].job;
    text.innerText = reviews[realcount].text;
    image.src = reviews[realcount].img;
})
sur.addEventListener("click",()=>{
    let realcount = count ;
    while(realcount==count){
        realcount = Math.floor(Math.random()*5);
    }
    count=realcount;
    console.log(count);
    name.innerText = reviews[realcount].name;
    job.innerText = reviews[realcount].job;
    text.innerText = reviews[realcount].text;
    image.src = reviews[realcount].img;
})