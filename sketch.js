var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var wall;
var music;
function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
  music=loadSound("bgmusic.wav");
}

function setup() {
  createCanvas(1350, 650);
  spacecraft = createSprite(650,500);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.25;
   spacecraft.debug=true;
  spacecraft.setCollider("rectangle",10,-320,50,10);

  iss = createSprite(650,230);
  iss.addImage(issimg);
  iss.scale = 0.5;


  wall = createSprite(560,270,5,5);
  // wall.debug=true;
  wall.visible=false;
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){

    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(scimg1);
    spacecraft.y = spacecraft.y -2;
    music.play();
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 2;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 2;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y +2;

  }
}


  if(spacecraft.isTouching(wall)){
     hasDocked = true;
    textSize(40);
     fill("yellow")
     textFont("algerian")
     text("Docking Successful! CONGRATULATIONS , YOU DID IT!! ", 100, 500);
   }

  drawSprites();
}

