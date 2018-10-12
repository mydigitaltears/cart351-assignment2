//variables
let avatarX;
let avatarY;
let avatarVX = 0;
let avatarVY = 0;
let avatarSpeed = 2;
let avatarWidth = 40;
let avatarHeight = 40;
let myAvatar;
let orientation;
let pinkFlower;
let grass;
let oo;
let upa = false;
let doa = false;
let lea = false;
let ria = false;

function preload() {
  grass = loadImage("assets/images/grass.svg");
  pinkFlower = loadImage("assets/images/pinkF.png");
  animSUP = loadAnimation("assets/images/avatarI_0010.png");
  animSDOWN = loadAnimation("assets/images/avatarI_0001.png");
  animSLEFT = loadAnimation("assets/images/avatarI_0004.png");
  animSRIGHT = loadAnimation("assets/images/avatarI_0007.png");
  animUP = loadAnimation("assets/images/avatarI_0011.png","assets/images/avatarI_0010.png",
  "assets/images/avatarI_0012.png","assets/images/avatarI_0010.png");
  animDOWN = loadAnimation("assets/images/avatarI_0002.png","assets/images/avatarI_0001.png",
  "assets/images/avatarI_0003.png","assets/images/avatarI_0001.png");
  animLEFT = loadAnimation("assets/images/avatarI_0005.png","assets/images/avatarI_0004.png",
  "assets/images/avatarI_0006.png","assets/images/avatarI_0004.png");
  animRIGHT = loadAnimation("assets/images/avatarI_0008.png","assets/images/avatarI_0007.png",
  "assets/images/avatarI_0009.png","assets/images/avatarI_0007.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("green");
  imageMode(CENTER);
  setupAvatar();
  myAvatar = createSprite(avatarX, avatarY, 40, 40);
  myAvatar.addAnimation("default", animSDOWN);
  myAvatar.shapeColor = color(255);
  myAvatar.velocity.y = 0;
}

function draw() {
  createCanvas(windowWidth,windowHeight);
  background("green");
  image(grass, 200, 200, 70, 50);
  handleInput();
  stop();
  //drawAvatar();
  moveAvatar();
  drawSprites();
  myAvatar.position.x = avatarX;
  myAvatar.position.y = avatarY;
  console.log(oo);
  console.log(avatarVX);
  console.log(avatarVY);
  flower1.drawFlower();
  bflower1.drawbFlower();
  bflower2.drawbFlower();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    lea=true;
  }
  if (keyCode === RIGHT_ARROW){
    ria=true;
  }
  if (keyCode === DOWN_ARROW){
    doa=true;
  }
  if (keyCode === UP_ARROW){
    upa=true;
  }
  if (lea === true){
    myAvatar.addAnimation("default", animLEFT);
  }
  if (ria === true){
    myAvatar.addAnimation("default", animRIGHT);
  }
  if (doa === true){
    myAvatar.addAnimation("default", animDOWN);
  }
  if (upa === true){
    myAvatar.addAnimation("default", animUP);
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW){
    lea=false;
  }
  if (keyCode === RIGHT_ARROW){
    ria=false;
  }
  if (keyCode === DOWN_ARROW){
    doa=false;
  }
  if (keyCode === UP_ARROW){
    upa=false;
  }
  if (lea === true){
    myAvatar.addAnimation("default", animLEFT);
  }
  if (ria === true){
    myAvatar.addAnimation("default", animRIGHT);
  }
  if (doa === true){
    myAvatar.addAnimation("default", animDOWN);
  }
  if (upa === true){
    myAvatar.addAnimation("default", animUP);
  }
}

function stop(){
  if (avatarVX === 0 && avatarVY ===0){
    if (orientation === animLEFT){
      myAvatar.addAnimation("default", animSLEFT);
    }
    else if (orientation === animRIGHT){
      myAvatar.addAnimation("default", animSRIGHT);
    }
    else if (orientation === animDOWN){
      myAvatar.addAnimation("default", animSDOWN);
    }
    else if (orientation === animUP){
      myAvatar.addAnimation("default", animSUP);
    }
  }
}


//inputs
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
    orientation = animLEFT;
    oo = "LEFT";
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
    orientation = animRIGHT;
    oo = "RIGHT";
  }
  else {
    avatarVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
    orientation = animUP;
    oo = "UP";
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
    orientation = animDOWN;
    oo = "DOWN";
  }
  else {
    avatarVY = 0;
  }
}

// setup / draw / move for avatar
function setupAvatar(){
  avatarX = width/2;
  avatarY = height/2;
}

function drawAvatar(){
  ellipse(avatarX,avatarY,avatarWidth,avatarHeight);
}

function moveAvatar(){
  avatarX += avatarVX;
  avatarY += avatarVY;
  if (avatarX < 0){
    avatarX = 0;
  }
  if (avatarX > width){
    avatarX = width;
  }
  if (avatarY < 0){
    avatarY = 0;
  }
  if (avatarY > height){
    avatarY = height;
  }
}


// creating some flowers
let flower1= new flowers(20,30,30,60,"marguerite");
let flower2= new flowers(50,100,30,60,"tulipe");
let flower3= new flowers(200,150,30,60,"tournesol");

let bflower1= new bflowers(15,5,20,50,"allo");
let bflower2= new bflowers(20,10,20,50,"allo")

//Adding flowers to bouquet
let bouquet=[];

//PERSONNAGE PASSE SUR LA FLEUR- EVENT
if(event)
{
  bouquet.push();
}

function bflowers(x, y ,w, h, nom){
  this.xPos=x;
  this.yPos=y;
  this.width=w;
  this.height=h;
  this.name=nom;

  this.drawbFlower = function() {
    //rect(this.xPos+avatarX,this.yPos+avatarY,this.width,this.height);
    image(pinkFlower, this.xPos+avatarX, this.yPos+avatarY, this.width, this.height);
  }
}

// flowers Constructor

function flowers(x, y, w, h, nom)
{
  this.xPos=x;
  this.yPos=y;
  this.width=w;
  this.height=h;
  this.name=nom;

  this.removeFlower=function(){
    let d = dist(avatarX, avatarY, this.width,this.height);

  }

  this.addFlower=function(){

  }

  this.drawFlower = function() {
    image(pinkFlower, this.xPos, this.yPos, this.width, this.height);
  }

}
