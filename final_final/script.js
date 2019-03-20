"use strict";

var video = document.getElementById('video');

// camera access
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// for photo
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// take the photo
document.getElementById("log").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 515, 480);
});
