//Maciek mistake count: 11

//world constant 
var deg = Math.PI/180;


function player(x,y,z,rx,ry){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}


//rectangle Array
var map = [
    [0,0,-1000,0,0,0,2000,200,"../patterns/sciana.png"], //front wall
    [0,0,1000,0,0,0,2000,200,"../patterns/sciana.png"], //back wall
    [1000,0,0,0,90,0,2000,200,"../patterns/sciana.png"], //right wall
    [-1000,0,0,0,90,0,2000,200,"../patterns/sciana.png"], //left wall
    [0,100,0,90,0,0,2000,2000,"../patterns/podloga.png",0.5], // ground

    [0,0,-1000,0,0,0,83,180,"../patterns/b513ab8bf4120634a5f5520afd7cc8ba.png"],

    [-800,0,900,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-600,0,750,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-750,0,600,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-900,0,700,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-850,0,800,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-800,0,750,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,700,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-850,0,400,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-800,0,300,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-600,0,400,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-650,0,500,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,450,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-500,0,400,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,400,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-450,0,300,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-450,0,500,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,200,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-800,0,100,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-900,0,150,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,150,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,0,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-500,0,-150,0,90,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-750,0,-200,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-900,0,-100,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-600,0,-100,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-450,0,100,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,50,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-150,0,0,0,0,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-100,0,-100,0,0,0,600,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-300,0,900,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [250,0,900,0,0,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,900,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-500,0,750,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,700,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-450,0,600,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-200,0,800,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [100,0,850,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [250,0,800,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [500,0,750,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [400,0,600,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [0,0,750,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [100,0,700,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [200,0,600,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [350,0,500,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [400,0,700,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [300,0,650,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-300,0,400,0,90,0,600,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-100,0,550,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-200,0,400,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-200,0,700,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-200,0,300,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-200,0,100,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-100,0,200,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [0,0,350,0,90,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [100,0,350,0,90,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [50,0,100,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [50,0,600,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [200,0,-100,0,90,0,1000,200,"../patterns/pexels-pixabay-220182.jpg"],
    [350,0,400,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [500,0,150,0,90,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [900,0,800,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [900,0,500,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,650,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [700,0,600,0,90,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [600,0,550,0,90,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [650,0,800,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,400,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [900,0,300,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [700,0,200,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [700,0,0,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,-100,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,-400,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,-400,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [850,0,-200,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [600,0,-200,0,90,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [900,0,0,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [850,0,100,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,50,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [400,0,50,0,90,0,500,200,"../patterns/pexels-pixabay-220182.jpgf"],
    [300,0,200,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [300,0,-100,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [350,0,0,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [250,0,100,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [250,0,300,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [450,0,-200,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [400,0,-300,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [400,0,-500,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [300,0,-400,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [500,0,-450,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [550,0,-600,0,0,0,700,200,"../patterns/pexels-pixabay-220182.jpg"],
    [500,0,-700,0,0,0,800,200,"../patterns/pexels-pixabay-220182.jpg"],
    [350,0,-800,0,0,0,1300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-650,0,-800,0,0,0,500,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,-900,0,0,0,600,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,-500,0,0,0,1000,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-550,0,-400,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-600,0,-350,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-800,0,-300,0,0,0,400,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-100,0,-200,0,0,0,600,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-200,0,-300,0,0,0,600,200,"../patterns/pexels-pixabay-220182.jpg"],
    [100,0,-400,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [100,0,-650,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,-150,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-800,0,-600,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-900,0,-700,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-600,0,-650,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-700,0,-650,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-650,0,-700,0,0,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-300,0,-700,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [0,0,-700,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-150,0,-600,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [250,0,-900,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [600,0,-900,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [900,0,-900,0,0,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,-950,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [800,0,-850,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [700,0,-950,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [500,0,-950,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [400,0,-850,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [100,0,-850,0,90,0,100,200,"../patterns/pexels-pixabay-220182.jpg"],
    [-400,0,-650,0,90,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [750,0,-500,0,0,0,300,200,"../patterns/pexels-pixabay-220182.jpg"],
    [900,0,-600,0,90,0,200,200,"../patterns/pexels-pixabay-220182.jpg"],
    
    
]

var coins = [
    [-650,30,750,0,-30,0,50,50,"../patterns/coinimg.png",50],
    [150,30,850,0,90,0,50,50,"../patterns/coinimg.png",50],
    [-800,30,-650,0,-30,0,50,50,"../patterns/coinimg.png",50],

]

var keys = [
    [850,30,50,0,0,0,50,50,"../patterns/klucz.png"]
]

//variables for movement 
var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;
var lock = false;
var canlock = false;

//link variable to container 
var container = document.getElementById("container");
//if the mouse ir pressed 
container.onclick = function(){
    if (canlock) container.requestPointerLock();
}

//if the key is pressed 
document.addEventListener("keydown", (event) => {
    if (event.key == "w"){
        PressForward = 1;
    }
    if (event.key == "s"){
        PressBack = 1;
    }
    if (event.key == "d"){
        PressRight = 1;
    }
    if (event.key == "a"){
        PressLeft = 1;
    }
    if (event.key == " "){
        PressUp = 1;
    }
})

//if the key is relealised 
document.addEventListener("keyup", (event) =>{
    if (event.key == "w"){
        PressForward = 0;
    }
    if (event.key == "s"){
        PressBack = 0;
    }
    if (event.key == "d"){
        PressRight = 0;
    }
    if (event.key == "a"){
        PressLeft = 0;
    }
    if (event.key == " "){
        PressUp = 0;
    }
})
document.addEventListener("keydown", function(event) {
         if (event.key == "ArrowLeft"){
            PressLeft = 1;
         } else if (event.key == "ArrowUp"){
            PressForward = 1;
         } else if (event.key == "ArrowRight"){
            PressRight = 1;
         } else if (event.key == "ArrowDown"){
            PressBack = 1;
         }
      });

document.addEventListener("keyup", function(event) {
         if (event.key == "ArrowLeft"){
            PressLeft = 0;
         } else if (event.key == "ArrowUp"){
            PressForward = 0;
         } else if (event.key == "ArrowRight"){
            PressRight = 0;
         } else if (event.key == "ArrowDown"){
            PressBack = 0;
         }
      });
//locked mouse listener 
document.addEventListener("pointerlockchange", (event) => {
    lock = !lock;
})


// mouse movement listener 
document.addEventListener("mousemove", (event) =>{
    MouseX = event.movementX;
    MouseY = event.movementY;
}) 

var pawn = new player(0,0,0,0,0);
var world = document.getElementById("world");

function update(){
    //count movement 
    dx = Math.cos(pawn.ry * deg) * (PressRight - PressLeft) - Math.sin(pawn.ry * deg) * (PressForward - PressBack); 
    dz = - (Math.sin(pawn.ry * deg) * (PressRight - PressLeft) + Math.cos(pawn.ry * deg) * (PressForward - PressBack));
    //dx = PressRight - PressLeft
    //dz = -(PressForward - PressBack);
    dy = -PressUp;
    drx = MouseY/4;
    dry = - MouseX/4;
    MouseX = MouseY = 0;

    //add movement to the coordinate 
    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;
    if (lock) {
        pawn.rx = pawn.rx + drx;
        pawn.ry = pawn.ry + dry;
    }
    
    //change coordinate of the world 
    world.style.transform = "translateZ(600px)" + 
        "rotateX(" + (-pawn.rx) + "deg)" +
        "rotateY(" + (-pawn.ry) + "deg)" +
        "translate3d(" + (-pawn.x) +"px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
}

function CreateNewWorld(){
    CreateSquares(map,"map");
}

function CreateSquares(squares, string){
  for (let i = 0; i < squares.length; i++){

    let newElement = document.createElement("div");
    newElement.className = string + " square";
    newElement.id = string + i;

    newElement.style.width  = squares[i][6] + "px";
    newElement.style.height = squares[i][7] + "px";

    
    const tex = squares[i][8];
    if (typeof tex === "string" && tex.startsWith("#")) {
      newElement.style.backgroundColor = tex;
      newElement.style.backgroundImage = "none";
    } else {
      newElement.style.backgroundColor = "transparent";
      newElement.style.backgroundImage = `url("${tex}")`;
      newElement.style.backgroundRepeat = "no-repeat";
      newElement.style.backgroundSize = "cover";
      newElement.style.backgroundPosition = "center";
    }

    
    newElement.style.opacity = (squares[i][9] ?? 1);

    
    if (string === "coin") newElement.style.borderRadius = "50%";
    else newElement.style.borderRadius = "0%";

    newElement.style.transform =
      "translate3d(" +
        (600 - squares[i][6]/2 + squares[i][0]) + "px," +
        (400 - squares[i][7]/2 + squares[i][1]) + "px," +
        squares[i][2] + "px)" +
      "rotateX(" + squares[i][3] + "deg)" +
      "rotateY(" + squares[i][4] + "deg)" +
      "rotateZ(" + squares[i][5] + "deg)";

    world.append(newElement);
  }
}


//generation of the world
CreateNewWorld();
TimerGame = setInterval(repeatForever, 0.15);

