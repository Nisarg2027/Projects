let player = "First {X}";
let element = document.querySelectorAll(".element");
let ans = [[6,7,8],[0,1,2],[0,3,6],[2,4,6],[1,4,7],[2,5,8],[3,4,5],[0,4,8]];
let rst = document.body.querySelectorAll(".reset");
let winner = document.body.querySelector(".winner");

let disable = () =>{
    winner.innerText=`Winner is ${player} player`;
    winner.classList.remove("hide");
    for(ele of element){
        // ele.innerText=""; 
        ele.disabled=true;
    }
}
let check = () =>{
    for(pattern of ans){
        
        let first = element[pattern[0]].innerText;
        let second = element[pattern[1]].innerText; 
        let third = element[pattern[2]].innerText;
        if(first!="" && second!="" && third!=""){
            if(first==second && second==third){
                console.log("winner is",player,"player");
                return true;
            }
        }
    }
}
let reset = () =>{
    winner.classList.add("hide");
    for(ele of element){
        ele.innerText="";   
        ele.disabled=false;
    }
}
element.forEach(element => {
    element.addEventListener("click",()=>{  
        console.log(element.id);
        if(player=="First {X}"){
           element.innerText="X"; 

           if(check()){
            disable();
            return;
           }
           player="Second {O}";
        }
        else{
            element.innerText = "O"; 
            if(check()){
                disable();
                return;
            }
            player="First {X}";
        }
        element.disabled=true;
        
    })
})
rst.forEach(rst=>{
    rst.addEventListener("dblclick",()=>{
        reset();
    })

})

