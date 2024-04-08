const loggedin_user = JSON.parse(document.getElementById('json-message-username').textContent)

const online_status = new WebSocket(
    'ws://'+ window.location.host + '/ws/' + 'online/'
)

online_status.onopen = function(e){
    console.log("CONNECTED TO ONLINE CONSUMER");
    console.log(e);
    online_status.send(JSON.stringify({
        'username':loggedin_user,
        'type':'open',
    }))
}

online_status.onclose = function(e){
    console.log("DISCONNECTED TO ONLINE CONSUMER");
    console.log(e);
}


// no -04, len- 00.35min