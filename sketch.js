var x = 300;
var y = 100;

function setup() {
  createCanvas(600, 200);
  radius = 100
}

function draw() {
  background(131, 175, 155);
  //Face
  fill(249, 205, 173); //rosy beige
  ellipse(x, y, 100, 100);

  //Eye 1
  fill(30); //dark gray
  ellipse(x, y + 10, 10, 10);

  //Eye 2
  fill(30);
  ellipse(x + 20, y + 10, 10, 10);

  //Mouth
  fill(252, 157, 154); //light pink
  arc(x, y + 25, 30, 30, 0, radians(180), PIE);
  
  if(winkyFace()){
    line(x+20,y+10,310,110);
  }
  else fill(30);
    ellipse(x+20,y+10,10,10);
  
  if(sickFace()){
    fill(200,210,0);
    //line(290,90,210,110);
    //line(300,100,290,90);
   // line(320,120,230,130);
    //line(320,140,230,130);
  }
  else fill(249,204,173);
}


function winkyFace(){
  var ret;
  var d = dist(mouseX, mouseY, x,y);
  if(d<radius){
    ret = true;
  }
  else ret = false;
  return ret;
}

function sickFace(){
  var ret;
  var s = mouseIsPressed(5);
  if(s<radius){
    ret = true;
  }
  else ret = false;
  return ret;
}