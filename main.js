const { app } = require('electron');
const osc = require('osc');

//create OSC UDP port
const udpPort = new osc.UDPPort({
    localAddress: "127.0.0.1",
    localPort: 57121
});

udpPort.on("ready", function(){
    console.log("Listening for OSC over UDP");
});

//listen for messages
udpPort.on("message", function(oscMsg){
    console.log("Received OSC message:", oscMsg);
});

udpPort.open();

//keep Electron running
app.whenReady().then(function(){
    console.log("Electron ready");
});
