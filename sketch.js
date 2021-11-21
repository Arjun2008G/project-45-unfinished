var bgimage1;
var bg1;
var gamemusic;
var titleimg;
var title;
var INFO = 0;
var START = 1;
var gameState = START;
var howtoplayimg;
var playimg;
var infobackimg;
var htpgamesound;


function preload(){
bgimage1 = loadImage("backgroundimage1.jpg");
gamemusic = loadSound("bgmusic.mp3");
titleimg = loadImage("texttitle.png");
howtoplayimg = loadImage("howtoplay.png");
playimg = loadImage("playbuttonimage.png");
infobackimg = loadImage("backbutton.png");
htpgamesound = loadSound("htpgame.m4a");
}

function setup() {
  createCanvas(800,400);
  background("blue");
  bg1 = createSprite(400,200,800,400);
  bg1.addImage("introductionpicture",bgimage1);
  bg1.scale = 0.9;

  title = createSprite(400,100,50,50);
  title.addImage("text",titleimg);
  title.scale=0.3;

  howtoplay = createSprite(600,300,50,50);
  howtoplay.addImage("instructions",howtoplayimg);
  howtoplay.scale=0.3;

  playbutton = createSprite(200,300,50,50);
  playbutton.addImage("play",playimg);
  playbutton.scale = 0.35;

  infoback = createSprite(400,300,50,50);
  infoback.addImage("back",infobackimg);
  infoback.visible=false;

  gamemusic.loop();
}

function draw() {

  if(gameState === START){
    infoback.visible=false;

  }

  if(mousePressed(howtoplay) && gameState === START){
    gameState = INFO;
    htpgamesound.play();

  }

  if(gameState === INFO){
    howtoplay.visible=false;
    title.visible=false;
    playbutton.visible=false;
    infoback.visible=true;
    textSize(10);
    fill("white");
    stroke("black");
    text("Hello everyone! This game is called The Harry Potter Game! It is created by Arjun Gupta",10,60);
  }
  
  drawSprites();
}