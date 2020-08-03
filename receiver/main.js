window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    // always check sender's URL
    if (event.origin !== "urlOfMySenderPage") {
        window.alert('Pirates(!) from: ' + event.origin);
        return;
    }
    document.querySelector('#p1').textContent = `Msg:${event.data.myMsg} Time:${event.timeStamp}`;
    
    // displaying some properties of 'event' object
    console.log(event.source);
    console.log(event.origin);
    console.log(event.target);
    console.log(event.timeStamp);
}

function closeWindow() {
    try {
        window.close();
    } catch (e) { console.log(e) }
    try {
        self.close();
    } catch (e) { console.log(e) }
}
