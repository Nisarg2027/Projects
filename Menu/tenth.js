const menu = [
    {
        category:"Breakfast",
        name:"Pancake",
        price:"25 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"pancake.jpg"
    },
    {
        category:"Breakfast",
        name:"Sandwich",
        price:"40 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"sandwich.jpeg"
    },
    {
        category:"Lunch",
        name:"Rolls",
        price:"5 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"rolls.jpg"
    },
    {
        category:"Lunch",
        name:"Rice",
        price:"20 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"rice.jpeg"
    },
    {
        category:"Lunch",
        name:"Pulao",
        price:"125 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"pulao.jpeg"
    },
    {
        category:"Dinner",
        name:"Biryani",
        price:"225 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"biryani.jpg"
    },
    {
        category:"Dinner",
        name:"Khichdi",
        price:"100 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"khichdi.jpeg"
    },
    {
        category:"Shake",
        name:"Cold coffee",
        price:"60 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"coldcoffee.jpeg"
    },
    {
        category:"Shakes",
        name:"Chocolate shake",
        price:"50 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"chocolateshake.jpg"
    },
    {
        category:"Shakes",
        name:"Banana shake",
        price:"40 Rs",
        detail:"thwi shfaadsf adgs rgad agf gag adga gdf a gas g g df g a gsa  ",
        img:"bananashake.jpeg"
    }
]
let allcontent = document.querySelector(".allcontent")
let button = document.querySelectorAll("button");
window.addEventListener("DOMContentLoaded",()=>{
    let displaymenu = menu.map((item)=>{
        return `<div class="content">
            <div class="img">
                <img src="${item.img}" alt="">
            </div>
            <div class="maincont">
                <div class="info ${item.category}">
                    <div class="name">${item.name}</div>
                    <div class="price">${item.price}</div>
                </div>
                <div class="underline"></div>       
                <div class="about">${item.detail}</div>
            </div>
        </div>`
    })
    displaymenu = displaymenu.join("");
    allcontent.innerHTML = displaymenu;
})
button.forEach(button=>{
    button.addEventListener("click",()=>{
        let domain = button.innerText;
        let displaymenu = menu.map((item)=>{

            if(item.category===domain || domain =="All"){

                return `<div class="content">
                    <div class="img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="maincont">
                        <div class="info ${item.category}">
                            <div class="name">${item.name}</div>
                            <div class="price">${item.price}</div>
                        </div>
                        <div class="underline"></div>       
                        <div class="about">${item.detail}</div>
                    </div>
                </div>`
            }

        })
        displaymenu = displaymenu.join("");
        allcontent.innerHTML = displaymenu;
    })
})