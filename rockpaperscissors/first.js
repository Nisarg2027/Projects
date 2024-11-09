let button = document.body.querySelectorAll("#button");
let newgame = document.body.querySelectorAll(".newgame");
let firstcount=0;
let secondcount=0;
let choices = ["rock","paper","scissors"];
let firstval;
let secondval;
let score = document.body.querySelector(".score");
let reset = (firstcount,secondcount,str)=>{
    firstval = null;
    secondval=null;
    if(str=="you"){
        let scoreval = document.body.querySelector(".first");
        scoreval.innerText = firstcount ;
    }
    else if(str=="computer"){
        let scoreval = document.body.querySelector(`.second`);
        scoreval.innerText = secondcount ;
    }
    
}
newgame.forEach(newgame=>{
    newgame.addEventListener("click",()=>{
        let scoreval1 = document.body.querySelector(".first");
        scoreval1.innerText = 0 ;
        let scoreval2 = document.body.querySelector(".second");
        scoreval2.innerText = 0 ;
        firstcount=0;
        secondcount=0;
        console.clear();
    })
    
})
button.forEach(button=>{
    button.addEventListener("click",()=>{
        

        let choise = button.className;
        // console.log(choise);
        firstval = choise;
        secondval = choices[Math.floor(Math.random()*3)];
        console.log(`You choose`, firstval, `\nComputer choose` ,secondval);
        if(firstval==secondval){
            console.log(`Draw`);
            reset(firstcount,secondcount,"");
        }
        else if( (firstval=="rock" && secondval=="paper") || (firstval=="paper" && secondval=="scissors") || (firstval=="scissors" && secondval=="rock")){
            console.log(`Computer is the winner`);
            secondcount++;
            reset(firstcount,secondcount,"computer");
        }
        else{
            console.log(`You are the winner`);
            firstcount++;
            reset(firstcount,secondcount,"you");
        }
        
    })
})