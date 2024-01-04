document.addEventListener("DOMContentLoaded", function () {
    var canvas = new fabric.Canvas('myCanvas');

    // Create a video element
    var videoElement = document.createElement('video');
    videoElement.width = 640;
    videoElement.height = 360;
    videoElement.src = 'path_to_your_video.mp4'; // Replace with your video path
    videoElement.crossOrigin = 'anonymous'; // Use this if the video is hosted on another domain
    videoElement.loop = true;
    videoElement.muted = true; // Mute to enable autoplay in most browsers
    videoElement.play();

    // Create a Fabric.js video object
    var fabricVideo = new fabric.Image(videoElement, {
        left: 100,
        top: 100,
        angle: 0,
        objectCaching: false
    });

    // Add the video object to the canvas
    canvas.add(fabricVideo);

    // Update the canvas on each frame of the video
    fabric.util.requestAnimFrame(function update() {
        canvas.requestRenderAll();
        fabric.util.requestAnimFrame(update);
    });
});
