function openCam(){
  let All_mediaDevices=navigator.mediaDevices
  if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
     console.log("getUserMedia() not supported.");
     return;
  }
  All_mediaDevices.getUserMedia({
    //  audio: true,
     video: true
  })
  .then(function(vidStream) {
     var video = document.getElementById('videoCam');
     if ("srcObject" in video) {
        video.srcObject = vidStream;
     } else {
        video.src = window.URL.createObjectURL(vidStream);
     }
     video.onloadedmetadata = function(e) {
        video.play();
     };
  })
  .catch(function(e) {
     console.log(e.name + ": " + e.message);
  });
}


// document.getElementById('confineButton').addEventListener('click', async () => {
//   console.log('Confine Camera button clicked!'); // Log button click

//   const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
//   const tabId = tabs[0].id;

//   chrome.tabs.sendMessage(tabId, { type: 'confineCamera' });
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'cameraAccessGranted') {
//     document.getElementById('cameraPreview').style.display = 'block'; // Show preview on camera access
//   }
// });


// const videoElement = document.getElementById('cameraPreview');

// navigator.mediaDevices.getUserMedia({ video: true })
//   .then(stream => {
//     videoElement.srcObject = stream;
//     // videoElement.onplay();
//   })
//   .catch(error => {
//     console.error('Error accessing camera:', error);
//     // Display an error message to the user
//     const errorMessage = document.createElement('p');
//     errorMessage.textContent = 'Failed to access camera. Please check permissions or if another application is using it.';
//     document.body.appendChild(errorMessage);
//   });


(function() {

  document.getElementById('confineButton').addEventListener('click', async () => {
    console.log('Confine Camera button clicked!');

    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tabId = tabs[0].id;

    chrome.tabs.sendMessage(tabId, { type: 'confineCamera' });
  });


  document.getElementById('startBtn').addEventListener('click', openCam);

})();
