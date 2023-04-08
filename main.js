function preload() {
}

function setup() {
    canvas = createCanvas(800,600);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
  image(video,250,170,300,250);
  stroke(168,10,10);
  fill(138, 46, 242);

  circle(40,40,60);
  circle(40,560,60);
  circle(760,40,60);
  circle(760,560,60);

  stroke(65, 120, 13);
  fill(146, 219, 77);
  
  rect(70,27,660,25);
  rect(70,550,660,25);
  rect(27,70,25,460);
  rect(750,70,25,460);
  
}

function snapshot() {
    save('picture.png');   
}