var mouse,mouseanim
var cat,catanim
var garden,gardenimage


function preload() {
    //load the images here
    gardenimage.loadImage('garden.png')
    catanim.loadAnimation('cat1.png','cat2.png','cat3.png','cat4.png')
    mouseanim.loadAnimation('mouse1.png','mouse2.png','mouse3.png','mouse4.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry  sprites here
garden=createSprite(900,700,100,100)
garden.addImage(gardenimage)
garden.scale=0.3
cat=createSprite(600,400,50,50)
cat.addAnimation(catanim)
cat.scale=0.4
mouse=createSprite(400,300,50,50)
mouse.addAnimation(mouseanim)
mouse.scale=0.4
}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}