let dec = document.querySelector(".decrease");
let inc = document.querySelector(".increase");
let res = document.querySelector(".reset");
let count = document.querySelector(".count");
let countnum = 0;
dec.addEventListener("click",()=>{
    countnum--;
    count.innerText = countnum;
    if(countnum>0){
        console.log("what");
        count.style.color = "lightsteelblue"; 
    }
    else if(countnum<0){
        count.style.color = "rgb(50, 238, 238)";
    } 
    else{
        count.style.color = "black";
    }
})
inc.addEventListener("click",()=>{
    countnum++;
    count.innerText = countnum;
    if(countnum>0){
        console.log("what");
        count.style.color = "lightsteelblue"; 
    }
    else if(countnum<0){
        count.style.color = "rgb(50, 238, 238)";
    }
    else{
        count.style.color = "black";
    }
})
res.addEventListener("click",()=>{
    countnum=0;
    count.innerText = countnum;
    count.style.color="black";
})
