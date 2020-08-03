let receiverPage = "https://myReceiverPage.github.io/index.html" 
let receiverWindow = "";
let msg = { myMsg: "hellO" };

function openTarget() {
    receiverWindow = window.open(receiverPage, 'window');
}

function sendMessage() {
    // targetWindow.postMessage(message, targetOrigin, [transfer]);
    // NEVER set "*" as targetOrigin to prevent interception of msg by 3rd party
    receiverWindow.postMessage(msg, 'https://myReceiverPage.github.io')
    receiverWindow.focus();
}