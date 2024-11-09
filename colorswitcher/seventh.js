let button = document.querySelector(".clickme");
let colorval = document.querySelector(".colorvalue");
let color = [
    "#FFFFFF",  // White
    "#FF0000",  // Red
    "green",
    "blue",
    "black",
    "#FFFF00",  // Yellow
    "cyan",
    "#FF00FF",  // Magenta
    "#808080",  // Gray
    "silver",
    "#800000",  // Maroon
    "olive",
    "#800080",  // Purple
    "#008080",  // Teal
    "#000080",  // Navy
    "orange",
    "#FFD700",  // Gold
    "pink",
    "#D3D3D3",  // LightGray
    "darkgray",
    "#ADD8E6",  // LightBlue
    "rgb(0, 0, 139)",  // DarkBlue
    "lightgreen",
    "#006400",  // DarkGreen
    "rgb(238, 130, 238)",  // Violet
    "indigo",
    "#A52A2A",  // Brown
    "#FF4500",  // OrangeRed
    "#FFD700",  // Gold
    "lavender",
    "rgb(72, 61, 139)",  // DarkSlateBlue
    "#00FF00",  // Lime
    "rgb(255, 69, 0)",  // OrangeRed
    "crimson",
    "#4B0082",  // Indigo
    "rgb(0, 128, 255)",  // DodgerBlue
    "#32CD32",  // LimeGreen
    "brown",
    "#FF6347",  // Tomato
    "rgb(255, 20, 147)",  // DeepPink
    "#4682B4",  // SteelBlue
    "rgb(70, 130, 180)",  // SteelBlue
    "deepskyblue",
    "#FF6347",  // Tomato
    "rgb(255, 215, 0)",  // Gold
    "forestgreen",
    "#FFFAFA",  // Snow
    "lightyellow",
    "rgb(0, 250, 154)",  // MediumSpringGreen
    "#8A2BE2",  // BlueViolet
    "rgb(240, 128, 128)",  // LightCoral
    "crimson",
    "rgb(173, 255, 47)",  // GreenYellow
    "#E9967A",  // DarkSalmon
    "rgb(135, 206, 250)",  // LightSkyBlue
    "lightgoldenrodyellow",
    "rgb(189, 183, 107)",  // DarkKhaki
    "palegreen",
    "#FFB6C1",  // LightPink
    "rgb(255, 218, 185)",  // PeachPuff
    "#FA8072",  // Salmon
    "rgb(135, 206, 235)",  // SkyBlue
    "rgb(75, 0, 130)",  // Indigo
    "#40E0D0",  // Turquoise
    "#FF7F50",  // Coral
    "rgb(128, 0, 128)",  // Purple
    "moccasin",
    "lavenderblush",
    "#800080",  // Purple
    "whitesmoke",
    "#FFFACD",  // LemonChiffon
    "#FFE4C4",  // Bisque
    "rgb(222, 184, 135)",  // BurlyWood
    "lightgreen",
    "tan",
    "#FF69B4",  // HotPink
    "lightsalmon",
    "rgb(240, 230, 140)",  // Khaki
    "#98FB98",  // PaleGreen
    "rgb(219, 112, 147)",  // PaleVioletRed
    "#F5DEB3",  // Wheat
    "rgb(175, 238, 238)",  // PaleTurquoise
    "rgb(154, 205, 50)",  // YellowGreen
    "mediumpurple",
    "#7B68EE",  // MediumSlateBlue
    "mediumseagreen",
    "#BA55D3",  // MediumOrchid
    "slateblue",
    "rgb(105, 105, 105)",  // DimGray
    "lightsteelblue"];
let randomvalue = 0;
button.addEventListener("click", () => {
    let ranvalue = randomvalue;
    while (randomvalue == ranvalue) {
        ranvalue = Math.floor(Math.random() * 100);
    }
    randomvalue = ranvalue;
    document.body.style.backgroundColor = color[ranvalue];
    colorval.innerText = color[ranvalue];
})