var noseX = 0;
var noseY = 0;
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

function draw()    {
  image(video, 0, 0, 310, 300);
  poseNet.on('pose', gotPoses);
  stroke(255, 0, 0);
  fill(255, 0, 0,255);
  circle(noseX, noseY, 20);
  circle(rightShoulderX, rightShoulderY, 20);
}

function setup() {
  canvas = createCanvas(310, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
}

function modelReady() {
  console.log('Model Loaded');
}



function take_snapshot(){    
  save('myCanvas.png');
}