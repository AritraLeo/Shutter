// background.js
// Example: Handling message passing between content script and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'confineCamera') {
      // Handle the message, for example, apply CSS to confine camera
      // You might need to send message to content scripts to trigger actions
    }
  });
  