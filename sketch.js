let hearts = [];
let lastX, lastY;
let font;
let cupid;

function preload() {
  console.log('Preload function called');
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceSansPro-Semibold.otf');
}

function setup() {
  console.log('Setup function called');
  try {
    createCanvas(windowWidth, windowHeight);
    lastX = mouseX;
    lastY = mouseY;
    textFont(font);
    textAlign(CENTER, CENTER);
    cupid = createCupid();
    console.log('Canvas created with dimensions:', windowWidth, 'x', windowHeight);
  } catch (error) {
    console.error('Error in setup:', error);
  }
}

function draw() {
  try {
    background(255, 240, 245);
    drawFrame();
    
    if (dist(mouseX, mouseY, lastX, lastY) > 5) {
      hearts.push(new Heart(mouseX, mouseY));
      lastX = mouseX;
      lastY = mouseY;
    }
    
    for (let i = hearts.length - 1; i >= 0; i--) {
      hearts[i].move();
      hearts[i].display();
      if (hearts[i].isOffScreen()) {
        hearts.splice(i, 1);
      }
    }
    
    while (hearts.length > 100) {
      hearts.shift();
    }
    
    image(cupid, width - 100, height - 100, 80, 80);
    
    fill(200, 0, 100);
    textSize(24);
    text("Happy Valentine's Day!", width / 2, 40);
    textSize(16);
    text("Touch the screen to create love!", width / 2, 70);
  } catch (error) {
    console.error('Error in draw:', error);
  }
}

// ... (rest of the code remains the same)

console.log('sketch.js loaded');