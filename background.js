// background.js
(function() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'confineCamera') {
      const videoElements = document.querySelectorAll('video');
  
      videoElements.forEach((video) => {
        video.style.border = '25px solid black'; // Apply black border
        const cameraPreview = document.getElementById('cameraOutput'); // Access preview div from popup
  
        // Assuming your website shows the camera feed in an iframe, check for it:
        if (video.parentNode.nodeName === 'IFRAME') {
          const iframeRect = video.parentNode.getBoundingClientRect();
          cameraPreview.style.width = `${iframeRect.width}px`;
          cameraPreview.style.height = `${iframeRect.height}px`;
        } else {
          // Handle cases where the camera feed is not in an iframe
          cameraPreview.style.width = `${video.videoWidth}px`;
          cameraPreview.style.height = `${video.videoHeight}px`;
        }
      });
  
      chrome.runtime.sendMessage({ type: 'cameraAccessGranted' }); // Send message back to popup
    }
  });
  })();