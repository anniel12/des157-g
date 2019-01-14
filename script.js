console.log('reading js');

function setup () {
  var myCanvas = createCanvas (800, 250);
  myCanvas.parent('mySketch')
}

var waveHeight=400; // wave amplitude
var wavelength=5; // wavelength (width)
var noiseScale=.5; // difference between adjacent waves
var t=0;
var waveSep=5;

function draw() {
  if (mouseIsPressed) {
    stroke('#FFB6C1');
  } else {
    stroke('#fbfb96');
  }
  strokeWeight(2);
  rect(0, 0, width, height); //if going back and forth
  background('#535e63');
  for (var x=0; x<width; x++) { // scan across the display
    for (var i=1; i<9; i++) { // loop through the waves
      point(x, i*waveSep+waveHeight*2*(noise(x/wavelength, noiseScale*i, t)-0.5));
    }
  }
  t=t+0.03; // for a bit of time-dependent animation
}
