// global variable socket:
let socket = io();

let my_title = document.getElementById('my_title');
let my_btn = document.getElementById('my_btn');
let my_input = document.getElementById('my_input');
let my_ul = document.getElementById('my_ul');
let my_ul_arduino = document.getElementById('my_ul_arduino');


my_btn.addEventListener('click', function () {
    let msg = my_input.value;

    // emits events to server:
    socket.emit('chat message', msg)
});

my_input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        console.log('enter pressed');
        document.getElementById("my_btn").click();
        my_input.value = '';
    }
});



    // get messages from server:
socket.on('chat message', function (msg) {

    console.log('message received from server : ' + msg);
    let li = document.createElement('li');
    li.innerHTML = msg;
    my_ul.appendChild(li);
});

// get messages from server:
socket.on('arduino', function (msg) {

    console.log('message received from server : ' + msg);
    let li = document.createElement('li');
    li.innerHTML = msg;
    my_ul_arduino.appendChild(li);
});
