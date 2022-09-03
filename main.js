noseX=0;
noseY=0;
function preload(){
    cn=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
    }

function setup(){
   Canvas=createCanvas(300,300);
   Canvas.center();
   Video=createCapture(VIDEO);
   Video.size(300,300);
   Video.hide();

   PoseNet=ml5.poseNet(Video,modelloaded);
   PoseNet.on('pose',gotposes);
}

function takesnapshot(){
    save('myfilterpic.png');
}

function modelloaded(){
    console.log('posenet is inicialized')
}

function draw(){
    image(Video,0,0,300,300);
    image(cn,noseX,noseY,40,30);
}

function gotposes(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x -20;
        noseY=results[0].pose.nose.y +15;
        console.log("nosex="+noseX);
        console.log("nosey="+noseY);
    }
}