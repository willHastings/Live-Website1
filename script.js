let score = 0
let nameColour1 = 255
let nameColour2 = 255
let nameColour3 = 255

const SPACE_BAR = 32
function setup () {
  createCanvas (windowWidth, windowHeight);
  handgrab = loadImage ("handclipart.png")
  wallpaper = loadImage ("spaceimage.webp")
  star = loadImage ("stargrab.png.crdownload")
  silkscreen = loadFont ("Silkscreen-Regular.ttf")
  venus = loadImage ("venusv2.webp")
  sunimage = loadImage ("sunimage.png")
  bluespace = loadImage ("bluespace.jpeg")
  ufo = loadImage ("ufo.png")
  greenspace = loadImage ("greenspace.webp")
  asteroid = loadImage ("asteroid.png")
  frameRate (100)
	x1 = random(width)
	y1 = random(height)
	
}


function createstar () { 
  if (score <= 9){ // if the score is below 9 it will be a star image 
  image (star, x1, y1, 100, 100); // image will go random width and height at size 100
  } else if (score >= 10 && score <= 19){ // if the score is between 10 and 19 the image will be a sun image
    image(sunimage, x1, y1, 100, 100); // image will go random width and height at size 100
  } else if (score >= 20 && score <= 30){ // if the score is between 20 and 30 it will be a ufo image
    image (ufo, x1, y1, 100, 100); // image will go random width and height at size 100
  } else if (score >= 30){ // if the score is above 30 it will be an asteroid image
    image (asteroid, x1, y1, 100, 100); // image will go random width and height at size 100
  }
}


function ChangeBackground () { // changes the background if the size is between a certain amount
if (score >= 10 && score <= 19){
  image (venus, width/2, height/2, width, height) // if the score is between 10 and 19 the background image will be venus
  createstar (); // recalling function
  renderHand (); // recalling function
  scoreboard (); // recalling function
} else if (score >= 19 && score <=29){
  image (bluespace, width/2, height/2, width, height) // if the score is between 19 and 29 the image will be bluespace
  createstar (); // recalling function
  renderHand (); // recalling function
  scoreboard (); // recalling function
  } else if (score >= 29)
  image (greenspace, width/2, height/2, width, height) // if the score is above 29 it will be greenspace
  createstar (); // recalling function
  renderHand (); // recalling function
  scoreboard (); // recalling function
}
  
function draw () {
  image (wallpaper, width/2, height/2, width, height); //making wallpaper image centered in both screens
  createstar (); // calling function
  scoreboard (); // calling function
  renderHand (); // calling function
  ChangeBackground (); // calling function
  finish (); // calling function
  creatorName(); // calling function
  beginningtip(); // calling function
  levelup (); // calling function
}

function renderHand(){ // custom function for hand cursor
 imageMode (CENTER) // centering the hand cursor image
 image (handgrab, mouseX, mouseY, 50, 50); // handgrab image follows mouseX and mouseY at size 50
  noCursor() // removes original cursor to replace it with hand image

}

function creatorName() {
  stroke (255) // colour of outline now white
  fill(nameColour1, nameColour2, nameColour3) // makes name colour white
  textSize (20) // makes name size 20
  textFont (silkscreen, 20) // makes text font custom and size 20
  textAlign(RIGHT, BOTTOM) // aligns text in the bottom right for both screens
  text("Will Hastings", width, height) // writes name text 
}

function scoreboard() {
  stroke (255, 255, 0) //scoreboard outline is now yellow
  fill (255, 255, 0) // text colour is now yellow
  textSize (width/15) // scoreboard is in top left, slightly lowered and moved to the right
  textAlign (LEFT, TOP) // scoreboard text is in top left
  text (score, 40, 40) // the score is now displayed at these coordinates
}

function starhit () {
  if (x1 -50 <= mouseX && mouseX <= x1 +50 && y1 -50 <= mouseY && mouseY <= y1 +50) { //if mouse location is within a 100 x 100 box surrounding the star, the score increases by 1
  score += 1
  scoreboard ()
    
  x1 = random (width)
  y1 = random (height)
  } else { //if the mouse is not within this box, the star moves to a new location
    x1 = random (width)
    y1 = random (height)
  }
}
  
function mouseClicked () { // if mouse is clicked starhit runs
  starhit ()
}

function finish () { // if score reaches 30 the text will appear at a size that works for both screens, in the middle of the screen
  if (score == 30) {
  textSize (width/48)
  textAlign (CENTER)
  fill (0, 255, 255)
  text ("Congratulations! You've Completed Star Grabber,", width/2, height/2 -25)
  fill (0, 255, 0)
  text ("double clicking your mouse will bring you back to the start,", width/2, height/2)
  fill (0, 255, 255)
  text ("you can continue by pressing the UFO.", width/2, height/2 +25)
    
  }
}

function resetScore(){ // Score will be reset to zero if this function is ran
  score = 0
  scoreboard();
}

function doubleClicked(){ // if mouse is double clicked and the score is at 30 or above the reset score will be ran and the score will equal zero again
  if (score >= 30){
  resetScore();
  print(true)
  } else {
  }
}

function namecolourchange (){ // when this function is called the name colour variables are changed
  nameColour1 = random(256)
  nameColour2 = random(256)
  nameColour3 = random(256)
  creatorName();
  
}

function keyPressed(){ // namecolourchange variable is ran when space bar is pressed
  if (keyIsDown (SPACE_BAR)){
  namecolourchange()
}
}

function beginningtip (){ // when score is at zero text will appear in the center of screen at a size applicable for both screens in a yellow colour
  if (score != 0){
  }else{
  textAlign (CENTER)
  stroke (255,255,0)
  fill (255,255,0)
  textSize (width/42)
  text ("Press space bar to change the colour of the creators name", width/2, height/2)
  }
}

function levelup (){ // if the score equals 10 or 20 a level up text will appear in the center of the screen at a size applicable for both screens in a yellow colour
  if (score == 10){
  textAlign (CENTER)
  stroke (255,255,0)
  fill (255,255,0)
  textSize (width/20)
  text ("LEVEL UP!", width/2, height/2)
  } else if (score == 20){
  textAlign (CENTER)
  stroke (255,255,0)
  fill (255,255,0)
  textSize (width/20)
    text ("LEVEL UP!", width/2, height/2)
  }
}

