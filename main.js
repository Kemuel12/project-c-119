function setup()
{
 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO)
 video.size(300,300)
 video.hide()
}

function modelLoaded() {
    console.log("ModelLoaded!")
}

function draw() {
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }

    else {
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
