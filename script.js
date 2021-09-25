const video = document.getElementById("video")
//Promise.all([
 // faceapi.nets.tnyFaceDetector.loadFromUri("/models")
//])
// function StartVideo() {
//   console.log("Running")
//   navigator.mediaDevices.getUserMedia(
//     { video: true },
//     stream => video.srcObject = stream,
//     err => console.error(err)
//   )
// }
//StartVideo()

async function StartVideo(){
  console.log("Running ...");
  if(navigator.mediaDevices.getUserMedia){
    var stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({video:{}});
    }
    catch(err){
      console.error(err);
      throw err;
    }
    video.srcObject = stream;
  }
  else{
    alert("Application requires webcam to run");
  }
}
StartVideo();


/*
<script type="module">
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
    }
  }
  canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 1280,
  height: 720
});
camera.start();
</script>
*/