
var garden,gardenimg
var tom,tomimg1,tomimg2
var jerry,jerryimg1,jerryimg2
var together;



function preload() {
    //load the images here
    garden=loadImage('images/garden.png');
   tomimg1 = loadAnimation('images/cat1.png');
   tomimg2 = loadAnimation('images/cat2.png','images/cat3.png');
   tomimg3 = loadAnimation('images/cat4.png');
   jerryimg1=loadAnimation('images/mouse1.png');
   jerryimg2=loadAnimation('images/mouse2.png','images/mouse3.png');
   jerryimg3=loadAnimation('images/mouse4.png');

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation('tomsleeping',tomimg1);
    tom.scale = 0.15

    jerry = createSprite(200,600);
    jerry.addAnimation('jerrystanding',jerryimg1);
    tom.scale = 0.1;

}
    

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width + jerry.width)/2)
    {
       
     tom.velocityX = 0;
        jerry.addAnimation('jerrystanding',jerryimg1);
        jerry.scale=0.1;
        jerry.changeAnimation('jerrystading');

    }

    
    


    drawSprites();
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        tom.velocityX = 0;
        tom.addAnimation('tomsleeping',tomimg3);
        tom.x = 800;
        tom.scale = 0.15;
        tom.changeAnimation('tomsleeping');
    }


    //For moving and changing animation write code here
      if(keyCode === LEFT_ARROW){
      tom.velocityX = -6;
      tom.addAnimation('tomrunning',tomimg2);
      tom.changeAnimation('tomrunning');

      jerry.addAnimation('jerryteasing',jerryimg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation('jerryteasing',jerryimg1);
       }
     
     }