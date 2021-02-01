var bird,pillar1,pillar2,back1,back2;
var birdImage,pillar1Image,pillar2Image,back1Image,back2Image;
function preload(){
 birdImage = loadImage("sprites/bird.png");
 pillar1Image = loadImage("sprites/pillar5.png");
 pillar2Image = loadImage("sprites/pillar6.png");
 back1Image = loadImage("sprites/background.png");
 back2Image = loadImage("sprites/winter_night.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

 bird = createSprite(200,200,20,30);
 bird.addImage(birdImage);
}

function draw() {
  background(0);

 // bird.display();  

  drawSprites();
}