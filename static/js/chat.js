const id = JSON.parse(document.getElementById('json-username').textContent);
const message_username = JSON.parse(document.getElementById('json-message-username').textContent);

const socket = new WebSocket(
    'ws://' + window.location.host + '/ws/' + id +'/'
)

socket.onopen = function(e){
    console.log("CONNECTION ESTRABLISHED In CHAT.JS");
    console.log(e);
}

socket.onmessage = function(e){
    const data = JSON.parse(e.data);
    console.log(data);

    if(data.username == message_username){
        document.querySelector('#chat-body').innerHTML += `
        <tr>
        <td>
            <p class="bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded">
                ${data.message}
            </p>
        </td>
        </tr>
        `;
    }else{
        document.querySelector('#chat-body').innerHTML += `
        <tr>
        <td>
            <p class="p-2 mt-2 mr-5 text-light shadow-sm float-left rounded" style="background-color:#000">
                ${data.message}
            </p>
        </td>
        </tr>
        `;
    }
}

socket.onclose = function(e){
    console.log("CONNECTION CLOSED");
    console.log(e);
}

socket.onerror = function(e){
    console.log("ERROR FOUND");
    console.log(e);
}


document.querySelector('#chat-message-submit').onclick = function (e){
    const message_input = document.querySelector('#message_input');
    const message = message_input.value;

    socket.send(JSON.stringify({
        'message':message,
        'username': message_username,
    }));
    message_input.value = "";
}



