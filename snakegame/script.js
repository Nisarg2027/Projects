let checkifstart = false;
document.addEventListener("keydown", (event) => {
    
    if (event.key === ' ' && checkifstart===false) {
        let currscore = document.querySelector(".currscore");
        currscore.innerHTML = `${1}`;
        let game = document.querySelector(".game");
        let book = [    
            { rs: 9, cs: 9 }
        ];
        let dir = "";
        let change = false;
        let currkey;
        document.addEventListener("keydown", (event) => {
            if (change === false && event.key !== currkey) {
                currkey = event.key;
                if (event.key === 'w' && dir !== "down") {
                    dir = "up";
                }
                else if (event.key === 'd' && dir !== "left") {
                    dir = "right";
                }
                else if (event.key === 's' && dir !== "up") {
                    dir = "down";
                }
                else if (event.key === 'a' && dir !== "right") {
                    dir = "left";
                }
                change = true;
            }

        })
        function generatefood() {
            let row = Math.floor(Math.random() * 18) + 1;
            let col = Math.floor(Math.random() * 18) + 1;
            // col=10;

            book.forEach((element) => {
                if (element.rs === row && element.cs === col) {
                    newfood = generatefood();
                    row = newfood.row;
                    col = newfood.col;
                    return;
                }
            })

            game.innerHTML += `<div class="food"></div>`;
            let food = document.querySelector(`.food`);
            food.style.gridRow = row;
            food.style.gridColumn = col;
            console.log(row, col);
            return { row, col };

        }
        function generatesnake() {
            game.innerHTML = "";
            if (foodlocation !== "") {

                game.innerHTML += `<div class="food"></div>`;
                let food = document.querySelector(`.food`);
                food.style.gridRow = foodlocation.row;
                food.style.gridColumn = foodlocation.col;
            }
            book.forEach((element, index) => {
                // game.innerHTML += `<div class="food"></div>`;

                game.innerHTML += `<div class="block${index} block"></div>`;
                let block = document.querySelector(`.block${index}`);
                if (index === book.length - 1) {
                    // block.style.backgroundColor = "orange";
                    block.classList.add("head");
                }
                block.style.gridRow = element.rs;
                block.style.gridColumn = element.cs;

            });


        }
        let foodlocation = "";
        // console.log(book[book.length-1].rs);

        setInterval(() => {

            if ((dir === "down" && book[book.length - 1].rs >= 18) || (dir === "right" && book[book.length - 1].cs >= 18)) {
                location.reload();
            }
            else if ((dir === "up" && book[book.length - 1].rs <= 1) || dir === "left" && book[book.length - 1].cs <= 1) {
                location.reload();
            }
            let bookele;
            let lastele = book[0];
            if (dir === "up") {

                bookele = (({ rs: book[book.length - 1].rs - 1, cs: book[book.length - 1].cs }));
                book.shift();
                book.push(bookele);

            }
            else if (dir === "down") {
                bookele = (({ rs: book[book.length - 1].rs + 1, cs: book[book.length - 1].cs }));
                book.shift();
                book.push(bookele);

            }
            else if (dir === "left") {
                bookele = (({ rs: book[book.length - 1].rs, cs: book[book.length - 1].cs - 1 }));
                book.shift();
                book.push(bookele);
            }
            else if (dir === "right") {
                bookele = (({ rs: book[book.length - 1].rs, cs: book[book.length - 1].cs + 1 }));
                book.shift();
                book.push(bookele);
            }
            if (bookele !== undefined && foodlocation !== undefined && bookele.rs === foodlocation.row && bookele.cs === foodlocation.col) {
                console.log("got it");
                foodlocation = "";
                book.unshift(lastele);
                // let currscore = document.querySelector(".currscore");

                currscore.innerHTML = `${book.length}`;
            }
            generatesnake();
            book.forEach((element, index) => {

                if (bookele !== undefined && element.rs === bookele.rs && element.cs === bookele.cs && index !== book.length - 1) {
                    location.reload();
                }

            })

            if (foodlocation === "") {

                foodlocation = generatefood();
                console.log(foodlocation);

            }
            change = false;
        }, 100);
        checkifstart=true;
    }
})

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "VT323", monospace;
// }

// body {
//     background-color: #2b2b2b; /* Darker background for contrast */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
// }

// .container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// }

// .currscore, .highscore {
//     color: #f0f0f0;
//     margin: 10px 0;
//     font-size: 2rem;
//     text-align: center;
//     text-shadow: 2px 2px #000;
// }

// .game {
//     height: 50vw;
//     width: 50vw;
//     max-width: 500px; /* Limits max size for smaller screens */
//     max-height: 500px;
//     background-color: #3e3e3e;
//     display: grid;
//     grid-template-columns: repeat(18, 1fr);
//     grid-template-rows: repeat(18, 1fr);
//     border: 5px solid #4a4a4a;
//     box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
//     border-radius: 10px;
//     position: relative;
// }

// .block {
//     background-color: #414141;
//     width: 100%;
//     height: 100%;
//     border: 1px solid #5a5a5a;
//     border-radius: 5px;
// }

// .food {
//     background-color: #ff6f61;
//     border-radius: 50%;
//     width: 80%;
//     height: 80%;
//     margin: auto;
//     box-shadow: 0px 0px 5px #000;
// }

// .head {
//     width: 100%;
//     height: 100%;
//     background-color: #ffeb3b;
//     border-radius: 5px;
//     box-shadow: 0px 0px 5px #000;
// }

// .start {
//     height: 100vh;
//     width: 50vw;
//     max-width: 500px;
//     position: absolute;
//     top: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.7);
//     color: #f0f0f0;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
//     text-align: center;
//     font-size: 3rem;
//     visibility: visible; /* You might want to toggle visibility in your game logic */
//     z-index: 10;
// }

// .start img {
//     width: 80%;
//     max-width: 300px;
//     margin-bottom: 20px;
//     filter: drop-shadow(0px 0px 10px #000);
//     border-radius: 10px;
// }
// .start{
//     max-height: 60vh;

// }
