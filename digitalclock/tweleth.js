let submit = document.querySelector(".submit");
let date;
let time;

let length ;
let dayleft ;
let hourleft ;
let minleft ;
let secleft ;
// let currdate = new Date();
let newdate = new Date() ;

let start = false;
let interevalid;

submit.addEventListener("click",()=>{
    if(start == true){
        start = false;
        clearInterval(interevalid);
        newdate = new Date();
        submit.innerText = "Submit";
        
    }
    else{
        start = true;
        date = document.querySelector(".date").value;
        time = document.querySelector(".time").value;
        
        submit.innerText = "Reset";
        let year = date.split('-')[0];
        let month = date.split('-')[1];
        let day= date.split('-')[2];
        let hour = time.split(':')[0];
        let min = time.split(':')[1];
        let sec = document.querySelector(".sec").value;
        newdate = new Date(year,month-1,day,hour,min,sec);
        interevalid = setInterval(()=>{
            let currdate = new Date();
            console.log(newdate);
            console.log(currdate);
            
            length=(currdate.getTime()-newdate.getTime()) ;

            console.log(length);
            if (length <= 0) {
                clearInterval(interevalid);
                document.querySelector(".timeremaining").innerHTML = "Time's up!";
                return;
            }
            let daysec = 24*60*60*1000;
            let hoursec = 60*60*1000;
            let minsec = 60*1000;
            dayleft  = Math.floor(length/daysec);
            hourleft = Math.floor((length%daysec)/hoursec);
            minleft = Math.floor((length%hoursec)/minsec);
            secleft = Math.floor((length%minsec)/1000);

            let timeescaped = document.querySelector(".timeescaped");
            timeescaped.innerHTML = `days: ${dayleft} <br> hours: ${hourleft} <br> min: ${minleft} <br> sec: ${secleft}`;
        },1000)
    }
})
