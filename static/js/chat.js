const id = JSON.parse(document.getElementById('json-username').textContent);
const message_username = JSON.parse(document.getElementById('json-message-username').textContent);

const socket = new WebSocket(
    'ws://' + window.location.host + '/ws/' + id +'/'
)

socket.onopen = function(e){
    console.log("CONNECTION ESTRABLISHED");
    console.log(e);
}

socket.onmessage = function(e){
    console.log("MESSAGE OPEN");
    console.log(e);
}

socket.onclose = function(e){
    console.log("CONNECTION CLOSED");
}

socket.onerror = function(e){
    console.log("ERROR FOUND");
    console.log(e);
}

// no -02, len- 00.00min