let cont = document.querySelectorAll(".cont");
let prevelement ;
cont.forEach((element)=>{
    element.addEventListener("click",()=>{
       
        // location.reload();

        if(prevelement){
            prevelement.classList.remove("hoverpos");
            prevelement.classList.add("hoverneg");
            prevelement.querySelector(".foot").classList.remove("hoverfoot");
            prevelement.querySelector(".head").classList.remove("hoverhead");
            if(prevelement!=element){
                element.classList.add("hoverpos");
                element.classList.remove("hoverneg");
                element.querySelector(".foot").classList.add("hoverfoot");
                element.querySelector(".head").classList.add("hoverhead");
                element.querySelector(".main").classList.add("exp");
                prevelement.querySelector(".main").classList.remove("exp");
                prevelement.querySelector(".main").classList.add("shrink");

                prevelement = element;
            }else{
                prevelement.querySelector(".main").classList.remove("exp");
                prevelement.querySelector(".main").classList.add("shrink");
                prevelement=false;
            }
            prevelement.querySelector(".main").classList.remove("shrink");


        }
        else{
          
            element.classList.add("hoverpos");
            element.classList.remove("hoverneg");
            element.querySelector(".foot").classList.add("hoverfoot");
            element.querySelector(".head").classList.add("hoverhead");
            element.querySelector(".main").classList.add("exp");
            element.querySelector(".main").classList.remove("shrink");
            prevelement = element;
        }
        
        console.log(element);
    })
})

