function preload(){
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    tint_color = "";
}
function modelLoaded(){
    console.log('filter');
}

Webcam.set({
    width:300,
    height: 300,
    image_format: 'png',
    png_quality:90,
});

function draw(){
    image(video, 0, 0, 300, 300);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}
